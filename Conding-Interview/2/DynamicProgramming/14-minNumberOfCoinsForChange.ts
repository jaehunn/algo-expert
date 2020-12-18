/**
 * Given an array of positive integer representing coin denominations and a single non-negative integer n representing a target amount of money,
 * write a functions that returns the smallest number of coins needed to make change for (to sum up to) that target amount using the given coin denominations.
 *
 * Note that you have access to an unlimited amount of coins.
 * In other words, if the denominations are [1, 5, 10], you have access to an unlimited amount of 1s, 5s, and 10s.
 *
 * If it's impossible to make change for the target amount, return -1.
 */

// O(nd) / O(n)
function minNumberOfCoinsForChange(n: number, denoms: number[]) {
  const numOfCoins: number[] = new Array(n + 1).fill(Infinity);

  numOfCoins[0] = 0;
  for (const denom of denoms) {
    for (let amount = 0; amount < numOfCoins.length; amount++) {
      if (denom <= amount)
        numOfCoins[amount] = Math.min(
          numOfCoins[amount],
          numOfCoins[amount - denom] + 1 // increase coin
        );
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
