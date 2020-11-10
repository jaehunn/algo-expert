// O(n) / O(1)
function hasSingleCycle(array) {
  let numElementVisited = 0;
  let currentIdx = 0;
  while (numElementVisited++ < array.length) {
    if (numElementVisited > 0 && currentIdx === 0) return false;

    currentIdx = getNextIdx(currentIdx, array);
  }

  return currentIdx === 0;
}

// 모든 인덱스를 거쳤다면 첫 인덱스로 돌아와야 사이클이 생성된다.
// getNextIdx() 에서 배열 값의 범위를 정규화시켜야한다. 범위를 벗어나는 큰 음수의 경우도 mod 연산을 이용한다.

function getNextIdx(currentIdx, array) {
  const nextIdx = (currentIdx + array[currentIdx]) % array.length; // normalize

  return nextIdx >= 0 ? nextIdx : nextIdx + array.length; // to positive
}
