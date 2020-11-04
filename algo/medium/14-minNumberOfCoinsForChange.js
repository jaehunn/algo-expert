// [1, 5, 10], n = 7
// denom: 1 -> [0 1 2 3 4 5 6 7]
// denom: 5 -> [0 1 2 3 4 1 2 3]
// denom: 10 -> X

// 전형적인 그리디 불가문제
function minNumberOfCoinsForChange(n, denoms) {
  const numOfCoins = new Array(n + 1).fill(Infinity); // Infinity -> impossible

  numOfCoins[0] = 0;
  for (const denom of denoms) {
    for (let amount = 0; amount < numOfCoins.length; amount++) {
      // if numOfCoins[?] = Infinity, Infinity
      if (denom <= amount)
        numOfCoins[amount] = Math.min(
          numOfCoins[amount],
          numOfCoins[amount - denom] + 1
        );
    }
  }

  if (numOfCoins[n] === Infinity) return -1;

  return numOfCoins[n];
}

const a = Infinity;
const b = Infinity + 1;

console.log(a <= b); // true
console.log(a >= b); // true

// a < b: false, then a >= b: true(relative boolean)
// a > b: false, then a <= b: true(relative boolean)
// !(a > b) == a is *not greater than b
