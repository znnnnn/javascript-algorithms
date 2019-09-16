import test from '../playground';

describe('playground', () => {
  it('should perform playground tasks', () => {
    // Place your playground tests here.
    // 10 = 0b1010
    expect(test(1, 2)).toBe(5);
  });
});
