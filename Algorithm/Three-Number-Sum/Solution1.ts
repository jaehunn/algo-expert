// T: O(n^2)
// S: O(n)

type TripletsType = [number, number, number];

export function Solution1(array: number[], targetSum: number) {
  const triplets: TripletsType[] = [];
  array.sort((a, b) => a - b);

  for (let i = 0; i < array.length - 2; i += 1) {
    // binary search
    let left = i + 1;
    let right = array.length - 1;
    while (left < right) {
      const currentSum = array[i] + array[left] + array[right];

      if (currentSum === targetSum) {
        // find -> continue
        triplets.push([array[i], array[left], array[right]]);

        left += 1;
        right -= 1;
      } else {
        currentSum < targetSum ? (left += 1) : (right -= 1);
      }
    }
  }

  return triplets;
}
