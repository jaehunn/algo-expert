// T: O(n^2), n is the length of the array
// S: O(1)

export function Solution1(array: number[]) {
  let minIndex = array.length;

  for (let i = 0; i < array.length; i += 1) {
    const value = array[i];

    for (let j = i + 1; j < array.length; j += 1) {
      const other = array[j];

      if (value === other) minIndex = Math.min(minIndex, j);
    }
  }

  return minIndex === array.length ? -1 : array[minIndex];
}
