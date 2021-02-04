// Prime Factors
// 12 -> 2 x 2 x 3
function primeFactor(n) {
  let _n = n;

  const factors = [];

  for (let factor = 2; factor <= Math.sqrt(_n); factor += 1) {
    while (_n % factor === 0) {
      _n /= factor;

      factors.push(factor);
    }
  }

  if (_n !== 1) factors.push(_n);

  return factors;
}

// Trial Division
// integer, 1, even number
function trialDivision(number) {
  if (number % 1) return false; // integer
  if (number <= 1) return false; // 1
  if (number <= 3) return true; // 2 3
  if (!(number % 2)) return false; // even

  for (let division = 3; division <= Math.sqrt(number); division += 2) {
    if (!(number % division)) return false;
  }

  return true;
}

// Sieve of Eratosthenes
function sieveOfEratosthenes(number) {
  const isPrime = new Array(n + 1).fill(true);

  isPrime[0] = false;
  isPrime[1] = false;

  const primes = [];

  for (let i = 2; i <= n; i += 1) {
    if (isPrime[i]) {
      primes.push(i);

      let j = i * i;

      while (j <= n) {
        isPrime[j] = false;

        j += i;
      }
    }
  }

  return primes;
}
