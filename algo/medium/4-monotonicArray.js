function isMonotonic(array) {
  if (array.length <= 2) return true;

  let dist = array[1] - array[0];
  for (let i = 2; i < array.length; i += 1) {
    let diff = array[i] - array[i - 1];

    if (dist === 0) {
      dist = diff;
      continue;
    }

    if (diff === 0) continue;

    // differ -> false
    if ((dist > 0) ^ (diff > 0)) return false;
  }

  return true;
}

isMonotonic([1, 1, 2, 3, 4, 5, 5, 5, 6, 7, 8, 8, 9, 10, 11]);

// 첫 두 원소로 증가, 감소를 판단 -> 이후 원소들을 매치시킨다.
// continue 로 조건 pass 하기

/* 
    가드절 적극 활용하기

    if (direction > 0) return difference < 0; 
    return difference > 0;
*/

// 벤 다이어그램
// 플래그 두개를 OR 연산으로 결과 판단 (둘다 만족하지 못하는 경우를 골라내기)

// O(n) / O(1)
function _isMonotonic(array) {
  if (array.length <= 2) return true;

  let direction = array[1] - array[0];
  for (let i = 2; i < array.length; i += 1) {
    if (direction === 0) {
      direction = array[i] - array[i - 1];
      continue;
    }

    if (_breakDirection(direction, array[i - 1], array[i])) return false;
  }

  return true;
}

function _breakDirection(direction, previousInt, currentInt) {
  const difference = currentInt - previousInt;

  if (direction > 0) return difference < 0;
  return difference > 0;
}

// O(n) / O(1)
function __isMonotonic(array) {
  let isNonDecreasing = true;
  let isNonIncreasing = true;

  for (let i = 1; i < array.length; i += 1) {
    if (array[i] < array[i - 1]) isNonDecreasing = false; // only increase
    if (array[i] > array[i - 1]) isNonIncreasing = false; // only decrease
  }

  // only increase + only decrease: false
  return isNonIncreasing || isNonIncreasing;
}
