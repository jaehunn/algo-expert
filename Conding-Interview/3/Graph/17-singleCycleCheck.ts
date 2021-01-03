/**
 * You're given an array of integers where each integer represents a jump of its value in the array.
 * For instance, the integer 2 represents a jump of two indices forward in the array;
 * the integer -3 represents a jump of three indices backward in the array.
 *
 * If a jump spills past the array's bounds, it wraps over to the other side.
 * For instance, a jump of -1 at index 0 brings us to the last index in the array.
 * Similarly, a jump of 1 at the last index in the array brings us to index 0.
 *
 * Write a function that returns a boolean representing whether the jumps in the array form a single cycle.
 * A single cycle occurs if, starting at any index in the array and following the jumps,
 * every element in the array is visited exactly once before landing back on the starting index.
 */

// 반복로직의 규칙을 정확히 꿰고 있어야한다.
// 예외포착하기, 배열마다 특정한 표시를 하면서 나아가는 방식이 아니기때문에 중복 접근을 어떻게 판별할 것인가를 잘 포착해야한다.
// (위에서 누적인덱스(i)가 0 이 되는지를 확인. 단, 종점을 거친 누적인덱스는 반드시 0이 되어야만한다. (cycle 조건))

// O(n) / O(1)
function hasSingleCycle(array: number[]) {
  let numElementVisited = 0;
  let currentIdx = 0;
  while (numElementVisited++ < array.length) {
    if (numElementVisited > 0 && currentIdx === 0) return false; // jump in place

    currentIdx = getNextIdx(currentIdx, array);
  }

  return currentIdx === 0;
}

function getNextIdx(currentIdx: number, array: number[]) {
  const nextIdx = (currentIdx + array[currentIdx]) % array.length; // normalize

  return nextIdx >= 0 ? nextIdx : nextIdx + array.length; // to positive
}

function _hasSingleCycle(array: number[]) {
  let i = 0;
  let l = array.length;
  while (l--) {
    i += array[i];
    i %= array.length; // normalize

    if (l > 0 && i === 0) return false; // jump in place
    if (i < 0) i += array.length; // cycle
  }

  return i === 0;
}
