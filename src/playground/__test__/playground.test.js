import test from '../playground';

describe('playground', () => {
  it('should perform playground tasks', () => {
    expect(test(10)).toBe(55);
  });
});
