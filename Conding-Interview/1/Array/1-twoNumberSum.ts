/* 
  Write a function that takes is a non-empty array of distinct integers and an integer representing a target sum.
  If any two numbers in the input array sum up to the target sum,
  the function should return them in an array, in any order.
  
  If no two numbers sum up to the target sum, the function should return an empty array.

  Note that the target sum has to be obtained by summing two different integers in the array;
  you can't add a single integer to itself in order to obtain the target sum.

  You can assume that there will be at most one pair of numbers summing up to the target sum.
*/

// O(n^2) / O(1)
function twoNumberSum(array: number[], targetSum: number) {
  for (let i = 0; i < array.length - 1; i += 1) {
    const firstNum = array[i];

    for (let j = i + 1; j < array.length; j += 1) {
      const secondNum = array[j];

      if (firstNum + secondNum === targetSum) return [firstNum, secondNum];
    }
  }

  return [];
}

// O(n) / O(n)
function _twoNumberSum(array: number[], targetSum: number) {
  const nums: { [key: number]: boolean } = {};

  for (const num of array) {
    const potentialMatch = targetSum - num;

    if (nums[potentialMatch]) return [potentialMatch, num];

    nums[num] = true;
  }

  return [];
}

// O(nlog n) / O(1)
function __twoNumberSum(array: number[], targetSum: number) {
  array.sort((a, b) => a - b);

  let left = 0;
  let right = array.length - 1;
  while (left < right) {
    const currentSum = array[left] + array[right];

    if (currentSum === targetSum) return [array[left], array[right]];

    if (currentSum < targetSum) left += 1;
    else right -= 1;
  }

  return [];
}
