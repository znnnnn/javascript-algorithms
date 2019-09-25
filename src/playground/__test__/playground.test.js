import test from '../playground';

describe('playground', () => {
  it('should perform playground tasks', () => {
    expect(test(20, 12)).toBe(4);
  });
});
