const { mapObjectToArray, getNewUser } = require('./utils');

describe('getNewUser()', () => {
  test('user exists', async () => {
    const user = await getNewUser(1);

    expect(user).toBeTruthy();
    expect(user.verified).toBe(false);
  });

  test('user does not exist', async () => {
    // Inform Jest you're expecting an "expect" to be called.  That's b/c you're expecting it to error, which is where the "expect" is.  In this case a success is based on an error happening.  If the error does not happen then you'd get a false positive without this "assertions" method.
    expect.assertions(1);

    try {
      await getNewUser(3);
    } catch (e) {
      expect(e.message).toBe('User does not exist');
    }
  });
});

describe('mapObjectToArray()', () => {
  test('callback gets called for each value', () => {
    // This is called a spy
    const mockCb = jest.fn();

    mapObjectToArray({ a: 1, b: 1, c: 1 }, mockCb);
    expect(mockCb.mock.calls.length).toBe(3);
  });

  test('callback gets the right args', () => {
    // Create a spy
    const mockCb = jest.fn();
    const o = { a: 1, b: 1, c: 1 };

    mapObjectToArray(o, mockCb);
    const firstCall = mockCb.mock.calls[0];

    expect(firstCall[0]).toBe('a');
    expect(firstCall[1]).toBe(1);
    expect(firstCall[2]).toBe(o);
  });
});
