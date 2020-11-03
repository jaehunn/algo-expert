// [1, 5, 10], n = 7

// 전형적인 그리디 불가문제

// wip
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

  return numOfCoins[n] !== Infinity ? numOfCoins[n] : -1;
}

const a = Infinity;
const b = Infinity + 1;

console.log(a <= b); // true
console.log(a >= b); // true

// a < b: false, then a >= b: true(relative boolenan)
// a > b: false, then a <= b: true(relative boolean)
