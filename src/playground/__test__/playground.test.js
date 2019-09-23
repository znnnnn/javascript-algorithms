import test from '../playground';

describe('playground', () => {
  it('should perform playground tasks', () => {
    expect(test(7)).toBe(true);
    expect(test(10)).toBe(false);
  });
});
