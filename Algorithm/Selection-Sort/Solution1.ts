// Best
// T: O(n^2)
// S: O(1)

// Average
// T: O(n^2)
// S: O(1)

// Worst
// T: O(n^2)
// S: O(1)
export function Solution1(array: number[]) {
  let startIdx = 0;
  while (startIdx < array.length - 1) {
    let smallestIdx = startIdx;

    // find smallest index
    for (let i = startIdx + 1; i < array.length; i += 1) {
      if (array[smallestIdx] > array[i]) smallestIdx = i;
    }

    if (smallestIdx !== startIdx)
      [array[startIdx], array[smallestIdx]] = [
        array[smallestIdx],
        array[startIdx],
      ];

    startIdx += 1;
  }

  return array;
}
