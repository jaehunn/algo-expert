/**
 * Write a function that takes in an array of integers and returns a boolean representing whether the array is monotonic.
 *
 * An array is said to be monotonic if its elements, from left to right, are entirely non-increasing or entirely non-decreasing.
 *
 * Non-increasing elements aren't necessarily exclusively decreasing; they simple don't increase.
 * Similarly, non-decreasing elements aren't necessarily exclusively increasing; they simple don't decrease.
 *
 * Note that empty arrays and arrays of one element are monotonic.
 */

// monotonic 은 단조로서 같을지언정 반대로 움직이지 않음을 말한다.

// 벤 다이어그램
// 플래그 두개를 OR 연산으로 결과 판단 (둘다 만족하지 못하는 경우를 골라내기)

// O(n) / O(1)
function isMonotonic(array: number[]) {
  if (array.length <= 2) return true;

  let direction = array[1] - array[0];
  for (let i = 2; i < array.length; i += 1) {
    if (direction === 0) {
      direction = array[i] - array[i - 1];
      continue;
    }

    // 이전 방향과 다른 방향을 띄는지를 확인한다
    if (breakDirection(direction, array[i - 1], array[i])) return false;
  }

  return true;
}

function breakDirection(
  direction: number,
  previousInt: number,
  currentInt: number
) {
  const difference = currentInt - previousInt;

  if (direction > 0) return difference < 0;
  return difference > 0;
}

// 결과론적으로 단조증가 이거나 단조감소면 된다. = A OR B
// NOT A: 증가하지 않는다. == B: 단조감소
// NOT B: 감소하지 않는다. == A: 단조증가
// A 와 B 는 상호의존적이다. (하나가 결정되면 다른 하나는 반드시 결정된다.)

// O(n) / O(1)
function _isMonotonic(array: number[]) {
  let isNonDecreasing = true; // 단조 증가
  let isNonIncreasing = true; // 단조 감소

  for (let i = 1; i < array.length; i += 1) {
    if (array[i] < array[i - 1]) isNonDecreasing = false;
    if (array[i] > array[i - 1]) isNonIncreasing = false;
  }

  return isNonDecreasing || isNonIncreasing;
}
