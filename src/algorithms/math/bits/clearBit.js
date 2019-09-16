/**
 * @param {number} number
 * @param {number} bitPosition - zero based.
 * @return {number}
 */
// ~2 = 11111111 11111111 11111111 11111101
// 10 = 00000000 00000000 00000000 00001010
// 10 & ~2 = 8 = 00000000 00000000 00000000 00001000
// 该函数作用就是在二进制的视角上，去除掉某一位的值，使其变为0
export default function clearBit(number, bitPosition) {
  const mask = ~(1 << bitPosition);

  return number & mask;
}
