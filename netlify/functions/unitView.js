function getStartOfWeek(date) {
  const d = new Date(date);
  const day = d.getDay();
  const diff = d.getDate() - day + (day === 0 ? -6 : 1); // adjust when day is sunday
  return new Date(d.setDate(diff));
}

// Persist data using Netlify Blobs (https://docs.netlify.com/edge-functions/blobs/)
// We use dynamic import to stay compatible with CommonJS.
const DATA_KEY = 'unitViews.json';


exports.handler = async function(event, context) {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: 'Method Not Allowed',
    };
  }

  // Dynamically import Netlify Blobs helpers
  const { get, set } = await import('@netlify/blobs');

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

  // Read existing data (or initialize)
  let data = (await get(DATA_KEY, { type: 'json' })) || [];

  const now = new Date();
  // Only log a view if a single unitId is provided (detail page)
  if (logUnitId) {
    data.push({ unitId: logUnitId, timestamp: now.toISOString() });
    await set(DATA_KEY, data, { type: 'json' });
  }

  // Calculate views for each unit in the current week
  const startOfWeek = getStartOfWeek(now);
  const counts = {};
  unitIds.forEach((id) => {
    counts[id] = data.filter(
      v => String(v.unitId) === id && new Date(v.timestamp) >= startOfWeek
    ).length;
  });

  // Hide view counts less than 2 per week
  Object.keys(counts).forEach(id => {
    if (counts[id] < 2) {
      counts[id] = 0;
    }
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