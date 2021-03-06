const getUserName = require('./02.js');

it('Check whether getUserName function returns an existent name', () => {
  return expect(getUserName(4)).resolves.toBe('Mark');
})

it('Check whether getUserName function returns an error when id isn`t found', () => {
  return expect(getUserName(6)).rejects.toEqual({ error: 'User with 6 not found.' })
})