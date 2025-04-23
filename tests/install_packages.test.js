const { installPackages } = require('../scripts/install_packages');

describe('installPackages', () => {
  test('installs given packages', async () => {
    const packages = ['express', 'lodash'];
    const result = await installPackages(packages);
    expect(result).toEqual({ installed: packages });
  });
});
