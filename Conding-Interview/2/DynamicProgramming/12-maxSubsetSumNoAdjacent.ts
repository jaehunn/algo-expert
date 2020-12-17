/**
 * Write a function that takes in an array of positive integers
 * and returns the maximum sum of non-adjacent elements in the array
 */

// Max[i] = Math.max(M[i - 1], M[i - 2] + A[i])

// O(n) / O(n)
function maxSubsetSumNoAdjacent(array: number[]) {
  if (!array.length) return 0;
  if (array.length === 1) return array[0];

  const maxArray = [...array]; // clone

  maxArray[1] = Math.max(array[0], array[1]);

  for (let i = 2; i < array.length; i += 1) {
    maxArray[i] = Math.max(maxArray[i - 1], maxArray[i - 2] + array[i]);
  }

  return maxArray[maxArray.length - 1];
}

// O(n) / O(1)
function _maxSubsetSumNoAdjacent(array: number[]) {
  if (!array.length) return 0;
  if (array.length === 1) return array[0];

  let first = array[0]; // i - 2
  let second = Math.max(array[0], array[1]); // i - 1
  for (let i = 2; i < array.length; i += 1) {
    const current = Math.max(first, second + array[i]);

    second = first; // i - 2 <- i - 1
    first = current; // i - 1 <- current
  }

  return second;
}
