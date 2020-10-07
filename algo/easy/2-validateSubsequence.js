function isValidSubsequence(array, sequence) {
  if (sequence.length === 1 && array.length === 1) return true;

  while (array.length) {
    const v = array.shift();

    if (v === sequence[0]) sequence.shift();
  }

  console.log(array, sequence);

  return !sequence.length;
}

// O(n) / O(1)
function _isValidSubsequence(array, sequence) {
  let arrIdx = 0;
  let seqIdx = 0;

  while (arrIdx < array.length && seqIdx < sequence.length) {
    if (array[arrIdx] === sequence[seqIdx]) seqIdx++;

    arrIdx++;
  }

  return seqIdx === sequence.length;
}

// O(n) / O(1)
function __isValidSubsequence(array, sequence) {
  let seqIdx = 0;

  for (const value of array) {
    if (sequence[seqIdx] === value) seqIdx++;
    if (seqIdx === sequence.length) return true;
  }

  return false;
  // return seqIdx === sequence.length;
}

// 반복문에서 리턴하는 방법과 외부로 끌고가서 리턴하는 방법 중 무엇이 나을까?

console.log(__isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10]));
