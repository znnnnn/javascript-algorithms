// Place your playground code here.
/**
 * @param {number} number
 * @param {number} bitPosition - zero based.
 * @return {number}
 */
export default function getBit(number, bitPosition = 0) {
  return (number >> bitPosition) & 1;
}
