const fs = require('fs');
const path = require('path');

const DATA_FILE = path.resolve(__dirname, 'unitViews.json');

function getStartOfWeek(date) {
  const d = new Date(date);
  const day = d.getDay();
  const diff = d.getDate() - day + (day === 0 ? -6 : 1); // adjust when day is sunday
  return new Date(d.setDate(diff));
}

exports.handler = async function(event, context) {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: 'Method Not Allowed',
    };
  }

  let body;
  try {
    body = JSON.parse(event.body);
  } catch (e) {
    return {
      statusCode: 400,
      body: 'Invalid JSON',
    };
  }

  let unitIds = [];
  let logUnitId = null;

  if (Array.isArray(body.unitIds)) {
    unitIds = body.unitIds.map(String);
  } else if (body.unitId) {
    // Backward compatibility: single unitId
    logUnitId = String(body.unitId);
    unitIds = [logUnitId];
  } else {
    return {
      statusCode: 400,
      body: 'Missing unitId(s)',
    };
  }

  // Read or initialize data
  let data = [];
  if (fs.existsSync(DATA_FILE)) {
    try {
      data = JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
    } catch (e) {
      data = [];
    }
  }

  const now = new Date();
  // Only log a view if a single unitId is provided (detail page)
  if (logUnitId) {
    data.push({ unitId: logUnitId, timestamp: now.toISOString() });
    fs.writeFileSync(DATA_FILE, JSON.stringify(data), 'utf8');
  }

  // Calculate views for each unit in the current week
  const startOfWeek = getStartOfWeek(now);
  const counts = {};
  unitIds.forEach((id) => {
    counts[id] = data.filter(
      v => String(v.unitId) === id && new Date(v.timestamp) >= startOfWeek
    ).length;
  });

  return {
    statusCode: 200,
    body: JSON.stringify({ counts }),
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  };
}; 