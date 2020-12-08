/**
 * Write a function that takes in array of integers and returns a sorted version of that array.
 * Use the Selection Sort algorithm to sort the array.
 *
 * If you're unfamiliar with Selection Sort, we recommend watching the Conceptual Overview section of this question's video explanation before starting to code.
 */

// 매번 모든 요소를 탐색해 가장 작은 값을 순서대로 배치한다

// Best: O(n ^ 2) / O(1)
// Average: O(n ^ 2) / O(1)
// Worst: O(n ^ 2) / O(1)
function selectionSort(array: number[]) {
  let startIdx = 0;

  while (startIdx < array.length - 1) {
    let smallestIdx = startIdx;

    for (let i = startIdx + 1; i < array.length; i += 1) {
      if (array[smallestIdx] > array[i]) smallestIdx = i;
    }

    [array[startIdx], array[smallestIdx]] = [
      array[smallestIdx],
      array[startIdx],
    ];

    startIdx += 1;
  }

  return array;
}
