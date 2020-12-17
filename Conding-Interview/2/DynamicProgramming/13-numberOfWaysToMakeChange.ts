/**
 * Given an array of distinct positive integers representing coin denominations and a single non-negative integer n representing a target amount of money,
 * write a function that returns the number of ways to make change for that target amount using the given coin denominations.
 *
 * Note that an unlimited amount of coins is at your disposal.
 */

// ways[i] += ways[i - 1]

// ways = 1({ ø })   0 0 0 0 0 0 0 0 0 0
// n    = 0          1 2 3 4 5 6 7 8 9 10

// wip
function numberOfWaysToMakeChange(n: number, denoms: number[]) {
  let res = Array(n + 1).fill(0);
  res[0] = 1;
  for (let i = 0; i < denoms.length; i += 1) {
    const denom = denoms[i];

    for (let j = 1; j <= n; j += 1) {
      if (j - denom >= 0) res[j] += res[j - denom];
    }
  }

  return res[n];
}
