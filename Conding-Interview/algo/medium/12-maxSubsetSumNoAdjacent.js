// WIP
function maxSubsetSumNoAdjacent(array) {
  if (!array.length) return 0;
  if (array.length === 1) return array[0];

  let [pre, cur] = [array[0], Math.max(array[0], array[1])];
  for (let i = 2; i < array.length; i += 1) {
    [pre, cur] = [cur, Math.max(cur, pre + array[i])];
  }

  return cur;
}

// [] = [] swap 할때 값 변경이 즉시 반영되지 않는다. (순서에 상관없이 기술가능)

// O(n) / O(n)
function maxSubsetSumNoAdjacent(array) {
  if (!array.length) return 0;
  if (array.length === 1) return array[0];

  const maxArray = [...array]; // clone

  maxArray[1] = Math.max(array[0], array[1]);

  for (let i = 2; i < array.length; i += 1) {
    maxArray[i] = Math.max(maxArray[i - 1], maxArray[i - 2] + array[i]);
  }

  return maxArray[maxArray.length - 1];
}

// O(n) / O(1)
function _maxSubsetSumNoAdjacent(array) {
  if (!array.length) return 0;
  if (array.length === 1) return array[0];

  let first = array[0];
  let second = Math.max(array[0], array[1]);
  for (let i = 2; i < array.length; i += 1) {
    const current = Math.max(second, first + array[i]);
    [first, second] = [second, current];
  }

  return second;
}
