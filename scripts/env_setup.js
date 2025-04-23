const fs = require('fs').promises;

async function setupEnv(filePath) {
  try {
    const content = await fs.readFile(filePath, 'utf8');
    const lines = content.split(/\r?\n/).filter(Boolean);
    const result = {};
    for (const line of lines) {
      const [key, ...rest] = line.split('=');
      if (!key) continue;
      result[key] = rest.join('=');
    }
    return result;
  } catch (err) {
    if (err.code === 'ENOENT') {
      return {};
    }
    throw err;
  }
}

module.exports = { setupEnv };
