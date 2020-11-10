function hasSingleCycle(array) {
  let i = 0;
  let l = array.length;
  while (l--) {
    i += array[i];
    i %= array.length; // normalize

    if (l > 0 && i === 0) return false;
    if (i < 0) i += array.length;
  }

  return i === 0;
}

// 반복로직의 규칙을 정확히 꿰고 있어야한다.
// 예외포착하기, 배열마다 특정한 표시를 하면서 나아가는 방식이 아니기때문에 중복 접근을 어떻게 판별할 것인가를 잘 포착해야한다.
// (위에서 누적인덱스(i)가 0 이 되는지를 확인. 단, 종점을 거친 누적인덱스는 반드시 0이 되어야만한다. (cycle 조건))

// O(n) / O(1)
function _hasSingleCycle(array) {
  let numElementVisited = 0;
  let currentIdx = 0;
  while (numElementVisited++ < array.length) {
    if (numElementVisited > 0 && currentIdx === 0) return false;

    currentIdx = _getNextIdx(currentIdx, array);
  }

  return currentIdx === 0;
}

// 모든 인덱스를 거쳤다면 첫 인덱스로 돌아와야 사이클이 생성된다.
// getNextIdx() 에서 배열 값의 범위를 정규화시켜야한다. 범위를 벗어나는 큰 음수의 경우도 mod 연산을 이용한다.

function _getNextIdx(currentIdx, array) {
  const nextIdx = (currentIdx + array[currentIdx]) % array.length; // normalize

  return nextIdx >= 0 ? nextIdx : nextIdx + array.length; // to positive
}
