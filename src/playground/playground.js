// Place your playground code here.
/**
 * @param {number} number
 * @return {number}
 */
export default function bitLength(number) {
  let bitLenCount = 0
  while ((1 << bitLenCount) <= number) {
    bitLenCount += 1
  }
  return bitLenCount
}
