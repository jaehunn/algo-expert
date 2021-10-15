// Best
// T: O(n), Sorted Check
// S: O(1)

// Average
// T: O(n^2)
// S: O(1)

// Worst
// T: O(n^2)
// S: O(1)
export function Solution1(array: number[]) {
  let counter = 0;

  let isSorted = false;
  while (!isSorted) {
    isSorted = true;

    // move to end point, then count up
    for (let i = 0; i < array.length - 1 - counter; i += 1) {
      if (array[i] > array[i + 1]) {
        [array[i], array[i + 1]] = [array[i + 1], array[i]];

        isSorted = false;
      }
    }

    counter += 1;
  }

  return array;
}
