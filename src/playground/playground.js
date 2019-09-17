// Place your playground code here.
/**
 * @param {number} number
 * @param {number} bitPosition - zero based.
 * @return {number}
 */
export default function isEven(number) {
  return (number & 1) === 0;
}
