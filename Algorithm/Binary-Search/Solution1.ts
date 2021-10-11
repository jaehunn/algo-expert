// T: O(log(n))
// S: O(log(n))
function Solution1(array: number[], target: number) {
  return helper(array, target);
}

export function helper(
  array: number[],
  target: number,
  left: number = 0,
  right: number = array.length - 1
): number {
  if (left > right) return -1;

  const middle = Math.floor((left + right) / 2);
  const potentialMatch = array[middle];

  if (target === potentialMatch) return middle;

  if (target < potentialMatch) return helper(array, target, left, middle - 1);
  else return helper(array, target, middle + 1, right);
}
