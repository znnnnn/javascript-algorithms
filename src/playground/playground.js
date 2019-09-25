// Place your playground code here.
/**
 * @param {number} number
 * @return {number}
 */
export default function euclideanAligorithm(numberA, numberB) {
  const a = Math.abs(numberA)
  const b = Math.abs(numberB)
  return b === 0 ? a : euclideanAligorithm(b, a % b)
}
