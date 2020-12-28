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
function trialDivision(n) {
  if (n % 1) return false; // integer
  if (n <= 1) return false; // 1
  if (n <= 3) return true; // 2 3
  if (!(n % 2)) return false; // even

  for (let d = 3; d <= Math.sqrt(n); d += 2) {
    if (!(n % d)) return false;
  }

  return true;
}

// Sieve of Eratosthenes
function sieveOfEratosthenes(n) {
  const isP = new Array(n + 1).fill(true);

  isP[0] = false;
  isP[1] = false;

  const p = [];

  for (let i = 2; i <= n; i += 1) {
    if (isP[i]) {
      p.push(i);

      let j = i * i;

      while (j <= n) {
        isP[j] = false;

        j += i;
      }
    }
  }

  return p;
}
