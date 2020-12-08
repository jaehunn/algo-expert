/**
 * Write a function that takes in array of integers and returns a sorted version of that array.
 * Use the Bubble Sort algorithm to sort the array.
 *
 * If you're unfamiliar with Bubble Sort, we recommend watching the Conceptual Overview section of this question's video explanation before starting to code.
 */

// 인접한 두 요소를 비교해가며 끝으로 몬다. 플래그를 설정하면 복잡도를 낮출 수 있다.

// Best O(n) / O(1)
// Average O(n^2) / O(1)
// Worst O(n^2) / O(1)
function bubbleSort(array: number[]) {
  let isSorted = true;
  let counter = 0;

  // 한번도 스왑이 일어나지않았다면 정렬이 이루어져있는 상태다
  while (!isSorted) {
    isSorted = true;

    for (let i = 0; i < array.length - 1 - counter; i += 1) {
      if (array[i] > array[i + 1])
        [array[i], array[i + 1]] = [array[i + 1], array[i]];

      isSorted = false;
    }

    counter += 1;
  }
}
