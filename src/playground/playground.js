// Place your playground code here.
/**
 * @param {number} number
 * @return {number}
 */
export default function fibonacci(number) {
  if (number === 0) return 0
  const list = [0, 1]
  for (let i = 2; i <= number; i += 1) {
    list.push(list[i - 1] + list[i - 2])
  }
  return list[number]
}
