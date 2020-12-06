function binarySearch(array, target) {
  return helper(0, array.length - 1);

  function helper(start, end) {
    if (start > end) return -1;

    const mid = ((start + end) / 2) << 0;

    if (array[mid] === target) return mid;

    return array[mid] > target ? helper(start, mid - 1) : helper(mid + 1, end);
  }
}

// O(log n) / O(log n)
function _binarySearch(array, target) {
  return _binarySearchHelper(array, target, 0, array.length - 1);
}

function _binarySearchHelper(array, target, left, right) {
  if (left > right) return -1;

  const middle = Math.floor((left + right) / 2);
  const potentialMatch = array[middle];

  if (target === potentialMatch) {
    return middle;
  } else if (target < potentialMatch) {
    return _binarySearchHelper(array, target, left, middle - 1);
  } else _binarySearch(arra, target, middle + 1, right);
}

// 범위는 middle 오차만큼 조정된다.
// 재귀로 범위를 새로 하던지, while 로 범위를 수정하던지

// O(log n) / O(1)
function __binarySearch(array, target) {
  return __binarySearchHelper(array, target, 0, array.length - 1);
}

function __binarySearchHelper(array, target, left, right) {
  while (left <= right) {
    const middle = Math.floor((left + right) / 2);
    const potentialMatch = array[middle];

    if (target === potentialMatch) {
      return middle;
    } else if (target < potentialMatch) {
      right = middle - 1;
    } else left = middle + 1;
  }

  return -1;
}
