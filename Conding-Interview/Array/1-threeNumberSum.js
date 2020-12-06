/* 
  Write a function that takes in a non-empty array of distinct integers and an integer representing a target sum.
  The function should find all triplets in the array that sum up to the target sum and return a two-dimensional array of all these triplets.
  The numbers in each triplet should be ordered in ascending order, and the triplets themselves should be ordered in ascending order with respect to the numbers the hold.

  If no three numbers sum up to the target sum, the function should return an empty array.
*/

// triplet 들의 오름차순과 각 triplet 안의 요소들이 오름차순을 유지해야한다. (다른 triplet 간 요소들은 순서를 신경 쓸 필요가 없다.)

// 정렬시킨 배열의 끝단에 포인터를 배치하면 target 과 비교해 포인터를 조정할 수 있다.
// 만약, 순차적으로 포인터를 배치하면 모든 요소를 평가해야한다.

// O(n^2) / O(n)
function _threeNumberSum(array, targetSum) {
  array.sort((a, b) => a - b);

  const triplets = [];
  for (let i = 0; i < array.length - 2; i++) {
    let left = i + 1;
    let right = array.length - 1;

    while (left < right) {
      const currentSum = array[i] + array[left] + array[right];

      if (currentSum === targetSum) {
        triplets.push([array[i], array[left], array[right]]);
        left++;
        right--;
      } else if (currentSum < targetSum) {
        left++;
      } else if (currentSum > targetSum) {
        right--;
      }
    }
  }

  return triplets;
}
