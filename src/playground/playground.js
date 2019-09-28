// Place your playground code here.
/**
 * @param {number} number
 * @return {number}
 */
export default function sieveOfEratosthenes(n) {
  const notPrimes = new Uint8Array(n + 1)
  const primes = []
  for (let i = 2; i <= n; i += 1) {
    if (notPrimes[i] === 0) {
      primes.push(i)
      for (let j = 1; j * i <= n; j += 1) {
        notPrimes[i * j] = true
      }
    }
  }
  return primes
}
