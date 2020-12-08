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
  for (let i = 0; i < array.length - 1; i++) {
    const firstNum = array[i];

    for (let j = i + 1; j < array.length; j++) {
      const secondNum = array[j];

      // 모든 쌍을 찾아서 targetSum 과 비교
      if (firstNum + secondNum === targetSum) return [firstNum, secondNum];
    }
  }

  return [];
}

// O(n) / O(n)
function _twoNumberSum(array: number[], targetSum: number) {
  const nums: { [key: number]: boolean } = {};

  for (const num of array) {
    // targetSum 에 대한 num 의 보수
    const potentialMatch = targetSum - num;

    // 보수를 해싱에 성공하면 num 과 함께 반환, 그렇지 않으면 캐싱하기
    if (potentialMatch in nums) return [potentialMatch, num];
    else nums[num] = true;
  }

  return [];
}

// O(nlog n) / O(1)
function __twoNumberSum(array: number[], targetSum: number) {
  array.sort((a, b) => a - b);

  // 정렬된 배열의 양 끝단(최소값, 최대값)에 포인터를 두고,
  // 두 포인터 값의 합을 targetSum 과 비교해 작다면 최소값 포인터를 우측으로 옮겨 값을 올린다. 크다면 최대값 포인터를 좌측으로 옮겨 값을 내린다.
  let left = 0;
  let right = array.length - 1;
  while (left < right) {
    const currentSum = array[left] + array[right];

    if (currentSum === targetSum) return [array[left], array[right]];
    else if (currentSum < targetSum) left++;
    else right--;
  }

  return [];
}
