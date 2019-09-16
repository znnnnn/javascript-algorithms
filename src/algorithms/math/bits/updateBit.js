/**
 * @param {number} number
 * @param {number} bitPosition - zero based.
 * @param {number} bitValue - 0 or 1.
 * @return {number}
 */
// 该函数先去除指定位置Bit值，再移动1到指定位置，但是清除位置和移动位置差了1
// 1 = 0001
// 10 = 1010
// updateBit(10,2,1)
// 首先去掉第二位的1：变为1000 = 8
// 然后 1 << 3 = 0100 = 6
// 最后 1000 | 0100 = 1100 = 14
export default function updateBit(number, bitPosition, bitValue) {
  // Normalized bit value.
  // 判断是否值为0，其余全为1
  const bitValueNormalized = bitValue ? 1 : 0;

  // Init clear mask.
  const clearMask = ~(1 << bitPosition);

  // Clear bit value and then set it up to required value.
  return (number & clearMask) | (bitValueNormalized << bitPosition);
}
