// Place your playground code here.
/**
 * @param {number} number
 * @return {number}
 */
export default function factorial(number) {
  return number > 1 ? factorial(number - 1) : 1
}
