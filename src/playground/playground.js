// Place your playground code here.
/**
 * @param {number} number
 * @return {number}
 */
export default function countSitBit(originNumber) {
  let counter = 0
  let number = originNumber
  while (number) {
    counter += number & 1
    number >>= 1
  }
  return counter
}
