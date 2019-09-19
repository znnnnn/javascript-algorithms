import test from '../playground';

describe('playground', () => {
  it('should perform playground tasks', () => {
    expect(test(4, 5)).toBe(1);
  });
});
