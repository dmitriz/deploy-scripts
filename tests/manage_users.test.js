const { manageUsers } = require('../scripts/manage_users');

describe('manageUsers', () => {
  test('throws error when no users provided', async () => {
    await expect(manageUsers([])).rejects.toThrow('No users specified');
  });

  test('creates users when provided', async () => {
    const users = [
      { username: 'alice', group: 'admin' },
      { username: 'bob', group: 'users' }
    ];
    const result = await manageUsers(users);
    expect(result).toEqual({ created: ['alice', 'bob'] });
  });
});
