/**
 * Write a function that takes in array of integers and returns a sorted version of that array.
 * Use the Insert Sort algorithm to sort the array.
 *
 * If you're unfamiliar with Insert Sort, we recommend watching the Conceptual Overview section of this question's video explanation before starting to code.
 */

// 매번 정렬된 상태를 유지한다.

// Best: O(n) / O(1)
// Average: O(n ^ 2) / O(1)
// Worst: O(n ^ 2) / O(1)
function insertionSort(array: number[]) {
  for (let i = 1; i < array.length; i += 1) {
    let j = i;

    while (j > 0 && array[j] < array[j - 1]) {
      [array[j], array[j - 1]] = [array[j - 1], array[j]];

      j -= 1;
    }
  }

  return array;
}
