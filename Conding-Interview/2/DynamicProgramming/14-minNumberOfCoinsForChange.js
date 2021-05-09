// knapsack algorithm (0-1)

// wip
// O(nd) / O(n)
function minNumberOfCoinsForChange(n, denoms) {
  const numOfCoins = new Array(n + 1).fill(Infinity);

  numOfCoins[0] = 0;
  for (const denom of denoms) {
    for (let amount = 0; amount < numOfCoins.length; amount += 1) {
      if (denom <= amount) numOfCoins[amount] = Math.min(numOfCoins[amount], numOfCoins[amount - denom] + 1);
    }
  }

  if (numOfCoins[n] === Infinity) return -1;

  return numOfCoins[n];
}

// denoms = [1, 5, 10], n = 7
// coins  = 0 F F F F F F F
// n      = 0 1 2 3 4 5 6 7

// denom  = 1
// coins  = 0 1 2 3 4 5 6 7
// n      = 0 1 2 3 4 5 6 7

// denom  = 5
// coins  = 0 1 2 3 4 1 2 3
// n      = 0 1 2 3 4 5 6 7

// n = 7, coins = 3

// ETC
const a = Infinity;
const b = Infinity + 1;

console.log(a <= b); // true
console.log(a >= b); // true

// a < b: false, then a >= b: true(relative boolean)
// a > b: false, then a <= b: true(relative boolean)
// !(a > b) == a is *not greater than b
