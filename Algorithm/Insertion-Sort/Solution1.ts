// Best
// T: O(n)
// S: O(1)

// Average
// T: O(n^2)
// S: O(1)

// Worst
// T: O(n^2)
// S: O(1)

export function Solution1(array: number[]) {
  for (let i = 1; i < array.length; i += 1) {
    let j = i;

    // increase sort range
    while (j > 0 && array[j] < array[j - 1]) {
      [array[j], array[j - 1]] = [array[j - 1], array[j]];

      j -= 1;
    }
  }

  return array;
}
