/**
 * Given an array of distinct positive integers representing coin denominations and a single non-negative integer n representing a target amount of money,
 * write a function that returns the number of ways to make change for that target amount using the given coin denominations.
 *
 * Note that an unlimited amount of coins is at your disposal.
 */

// ways[i] += ways[i - 1]

// O(nd) / O(n)
function numberOfWaysToMakeChange(n: number, denoms: number[]) {
  let ways = Array(n + 1).fill(0);
  ways[0] = 1; // { ø }

  for (let i = 0; i < denoms.length; i += 1) {
    const denom = denoms[i];

    for (let j = 1; j <= n; j += 1) {
      if (j - denom >= 0) ways[j] += ways[j - denom]; // 나머지를 활용할 수 있는가
    }
  }

  return ways[n];
}

// denoms = [1, 5], n = 6
// ways   = 1 0 0 0 0 0 0
// n      = 0 1 2 3 4 5 6

// denom  = 1
// ways   = 1 1 1 1 1 1 1
// n      = 0 1 2 3 4 5 6

// denom  = 5
// ways   = 1 1 1 1 1 2 2
// n      = 0 1 2 3 4 5 6

// n = 6, ways = 2 (n[1] + n[5])
