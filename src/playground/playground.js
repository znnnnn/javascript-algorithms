// Place your playground code here.
/**
 * @param {number} number
 * @return {number}
 */
export default function isPowerOfTwo(number) {
  return (number & (number - 1)) === 0
}
