const { configureService } = require('../scripts/configure_service');

describe('configureService', () => {
  test('throws error when no services provided', async () => {
    await expect(configureService([])).rejects.toThrow('No services specified');
  });

  test('configures services when provided', async () => {
    const services = [
      { name: 'nginx', config: { port: 80 } },
      { name: 'redis', config: { port: 6379 } }
    ];
    const result = await configureService(services);
    expect(result).toEqual({ configured: ['nginx', 'redis'] });
  });
});
