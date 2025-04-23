const fs = require('fs');
const path = require('path');
const os = require('os');
const { setupEnv } = require('../scripts/env_setup');

describe('setupEnv', () => {
  test('parses env file and returns key-value pairs', async () => {
    const tmpFile = path.join(os.tmpdir(), 'test.env');
    const content = 'KEY1=value1\nKEY2=value2\n';
    fs.writeFileSync(tmpFile, content);
    const result = await setupEnv(tmpFile);
    expect(result).toEqual({ KEY1: 'value1', KEY2: 'value2' });
    fs.unlinkSync(tmpFile);
  });
});
