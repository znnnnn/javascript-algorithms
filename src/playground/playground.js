// Place your playground code here.
/**
 * @param {number} number
 * @return {number}
 */
export default function isPrime(n) {
  if (n > 1 && n <= 3) { return true }

  for (let i = 2; i < Math.sqrt(n); i += 1) {
    if (n % i === 0) { return false; }
  }
  return true;
}
