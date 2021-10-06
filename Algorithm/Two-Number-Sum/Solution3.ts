// T: O(nlog(n))
// S: O(1)
export default function Solution3(array: number[], targetSum: number) {
  array.sort((a, b) => a - b);

  let left = 0;
  let right = array.length - 1;
  while (left < right) {
    const currentSum = array[left] + array[right];

    if (currentSum === targetSum) {
      return [array[left], array[right]];
    } else if (currentSum < targetSum) {
      left += 1;
    } else if (currentSum > targetSum) {
      right -= 1;
    }
  }

  return [];
}
