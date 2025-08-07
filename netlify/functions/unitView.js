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

  const { unitId } = body;
  if (!unitId) {
    return {
      statusCode: 400,
      body: 'Missing unitId',
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
  data.push({ unitId, timestamp: now.toISOString() });

  // Save updated data
  fs.writeFileSync(DATA_FILE, JSON.stringify(data), 'utf8');

  // Calculate views for this unit in the current week
  const startOfWeek = getStartOfWeek(now);
  const viewsThisWeek = data.filter(
    v => v.unitId === unitId && new Date(v.timestamp) >= startOfWeek
  ).length;

  return {
    statusCode: 200,
    body: JSON.stringify({ viewsThisWeek }),
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  };
}; 