function threeNumberSum(array, targetSum) {
  array.sort((a, b) => a - b);
  let result = [];
  for (let i = 0; i < array.length; i += 1) {
    let sum = 0;
    for (let j = i + 1; j < array.length; j += 1) {
      for (let k = j + 1; k < array.length; k += 1) {
        sum = array[i] + array[j] + array[k];

        if (sum === targetSum) {
          let selected = [array[i], array[j], array[k]];

          result.push(selected);
        }
      }
    }
  }
  return result;
}

// 두 포인터를 순차적으로 배치하는 것보다 포인터를 끝단에 위치시키는 것이 왜 효율적인가?
// 가장 큰값, 작은값의 합인 중간합에서부터 평가를 시작하면, 값을 증가시켜야하는지 감소시켜야하는지에 대한 선택지가 생긴다.

// O(n^2) / O(n)
function _threeNumberSum(array, targetSum) {
  array.sort((a, b) => a - b);
  let count = 0;
  const triplets = [];
  for (let i = 0; i < array.length - 2; i++) {
    let left = i + 1;
    let right = array.length - 1;

    console.log(count);
    while (left < right) {
      const currentSum = array[i] + array[left] + array[right];

      count += 1;
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

_threeNumberSum([12, 3, 1, 2, -6, 5, -8, 6], 0);
