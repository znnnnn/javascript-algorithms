import test from '../playground';

describe('playground', () => {
  it('should perform playground tasks', () => {
    expect(test(8)).toBe(true);
    expect(test(9)).toBe(false);
  });
});
