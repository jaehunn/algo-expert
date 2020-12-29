/**
 * Write a function that takes in a sorted array of integers as well as a target integer.
 * The function sholud use the Binary Search algorithm to determine if the target integer is contained in the array
 * and should return its index if it is, otherwise -1.
 *
 * If you're unfamiliar with Binary Search, we recommend watching the Conceptual Overview section of this question's video explanation before starting to code.
 */

// O(log n) / O(log n)
function binarySearch(array: number[], target: number) {
  return binarySearchHelper(array, target, 0, array.length - 1);
}

function binarySearchHelper(
  array: number[],
  target: number,
  left: number,
  right: number
) {
  if (left > right) return -1;

  const middle = Math.floor((left + right) / 2);
  const potentialMatch = array[middle];

  if (target === potentialMatch) return middle;

  if (target < potentialMatch)
    return binarySearchHelper(array, target, left, middle - 1);
  else binarySearchHelper(array, target, middle + 1, right);
}

// O(log n) / O(1)
function _binarySearch(array: number[], target: number) {
  return _binarySearchHelper(array, target, 0, array.length - 1);
}

function _binarySearchHelper(
  array: number[],
  target: number,
  left: number,
  right: number
) {
  while (left <= right) {
    const middle = Math.floor((left + right) / 2);
    const potentialMatch = array[middle];

    if (target === potentialMatch) return middle;

    if (target < potentialMatch) right = middle - 1;
    else left = middle + 1;
  }

  return -1;
}
