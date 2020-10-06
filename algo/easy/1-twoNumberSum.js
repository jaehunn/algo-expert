function twoNumberSum(array, targetSum) {
  let r = {};
  for (let i = 0; i < array.length; i += 1) {
    let c = targetSum - array[i];

    if (r[c]) return [c, array[i]];

    r[array[i]] = true;
  }

  return [];
}

// solution

// O(n^2) / O(1)
function _twoNumberSum(array, targetSum) {
  for (let i = 0; i < array.length - 1; i++) {
    const firstNum = array[i];

    for (let j = i + 1; j < array.length; j++) {
      const secondNum = array[j];

      if (firstNum + secondNum === targetSum) return [firstNum, secondNum];
    }
  }

  return [];
}

// O(n) / O(n)
function __twoNumberSum(array, targetSum) {
  const nums = {};

  for (const num of array) {
    const potentialMatch = targetSum - num;

    if (potentialMatch in nums) return [potentialMatch, num];
    else nums[num] = true;
  }

  return [];
}

// O(nlog n) / O(1)
function ___twoNumberSum(array, targetSum) {
  array.sort((a, b) => a - b);

  let left = 0;
  let right = array.length - 1;
  while (left < right) {
    const currentSum = array[left] + array[right];

    if (currnetSum === targetSum) return [array[left], array[right]];
    else if (currentSum < targetSum) left++;
    else right--;
  }

  return [];
}
