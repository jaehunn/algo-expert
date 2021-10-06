// T: O(n)
// S: O(n)
export default function Solution2(array: number[], targetSum: number) {
  const nums: { [key: number]: boolean } = {};

  for (const num of array) {
    const potentialMatch = targetSum - num;

    if (potentialMatch in nums) {
      return [potentialMatch, num];
    } else {
      nums[num] = true;
    }
  }

  return [];
}
