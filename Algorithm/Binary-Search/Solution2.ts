// T: O(log(n))
// S: O(1)
function Solution2(array: number[], target: number) {
  return helper(array, target);
}

export function helper(
  array: number[],
  target: number,
  left: number = 0,
  right: number = array.length - 1
): number {
  // iteration
  while (left <= right) {
    const middle = Math.floor((left + right) / 2);
    const potentialMatch = array[middle];

    if (target === potentialMatch) return middle;

    if (target < potentialMatch) right = middle - 1;
    else left = middle + 1;
  }

  return -1;
}
