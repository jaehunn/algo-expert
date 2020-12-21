/**
 * Write a function that takes in an array of unique integers
 * and returns an array of all permutations of those integer in no particular order.
 *
 * If the input array is empty, the function should return an empty array
 */

// upper bound: O(n^2 * n!) / O(n * n!)
// roughly: O(n * n!) / O(n * n!)
function getPermutations(array: number[]) {
  const permutations: number[][] = [];

  permutationsHelper(array, [], permutations);

  return permutations;
}

function permutationsHelper(
  array: number[],
  currentPermutation: number[],
  permutations: number[][]
) {
  if (!array.length && currentPermutation.length) {
    permutations.push(currentPermutation);
  } else {
    for (let index = 0; index < array.length; index += 1) {
      const prefix = array.slice(0, index);
      const suffix = array.slice(index + 1);

      permutationsHelper(
        prefix.concat(suffix), // remain
        currentPermutation.concat([array[index]]),
        // push 는 mutate 다.
        permutations
      );
    }
  }
}

// use pointer
// [**1, 2, 3]
//  [1, **2, 3] break
//  [1, *3, *2] break
// [*2, *1, 3]
//  [2, **1, 3] break
//  [2, *3, *1] break
// [*3, 2, *1]
//  [3, **2, 1] break
//  [3, *1, *2] break

// O(n * n!) / O(n * n!)
function _getPermutations(array: number[]) {
  const permutations = [];

  _permutationsHelper(0, array, permutations);

  return permutations;
}

function _permutationsHelper(
  startIndex: number,
  array: number[],
  permutations: number[][]
) {
  if (startIndex === array.length - 1) {
    permutations.push(array.slice());
  } else {
    for (let index = startIndex; index < array.length; index += 1) {
      [array[index], array[startIndex]] = [array[startIndex], array[index]];

      _permutationsHelper(startIndex + 1, array, permutations);

      // revert
      [array[index], array[startIndex]] = [array[startIndex], array[index]];
    }
  }
}
