import getBit from '../playground'

describe('playground', () => {
  it('should perform playground tasks', () => {
    // Place your playground tests here.
    // 10 = 0b1010
    expect(getBit(10, 0)).toBe(0)
    expect(getBit(10, 5)).toBe(0)
  })
})
