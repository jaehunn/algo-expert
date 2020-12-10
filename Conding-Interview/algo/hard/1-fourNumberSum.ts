/**
 * Write a function that takes in a non-empty array of distinct integers and an integer representing a target sum.
 * The function should find all quadruplets in the array that sum up to the target sum and return a two-dimensional array of all these quadruplets in no particular order.
 *
 * If no four numbers sum up to the target sum, the function should return an empty array.
 */

interface Pairs {
  [key: number]: [number, number][]; // [[number, number], [number, number], ...]
}

// [7, 6, 4, -1, 1, 2]
// { P: [a, b] }
// find P -> P.concat([c, d])

// duplicate
// 13 + 3: [7, 6, 1, 2] / 9 + 7: [7, 2, 6, 1]

// WIP ...

// Average: O(n^2) / O(n^2)
// Worst: O(n^3) / O(n^2)
function fourNumberSum(array: number[], targetSum: number) {
  const allPairSums: Pairs = {};
  const quadruplets: number[][] = [];

  // 외부 루프를 활용한다
  for (let i = 1; i < array.length - 1; i += 1) {
    // 해싱 먼저
    for (let j = i + 1; j < array.length; j += 1) {
      const currentSum = array[i] + array[j];
      const difference = targetSum - currentSum;

      if (difference in allPairSums) {
        for (const pair of allPairSums[difference]) {
          quadruplets.push(pair.concat([array[i], array[j]]));
        }
      }
    }

    // 요소가 겹치지않게
    for (let k = 0; k < i; k += 1) {
      const currentSum = array[i] + array[k];

      if (!(currentSum in allPairSums))
        allPairSums[currentSum] = [[array[k], array[i]]];
      else allPairSums[currentSum].push([array[k], array[i]]);
    }
  }

  return quadruplets;
}
