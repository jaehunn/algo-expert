/* 
  Given two non-empty arrays of integers, write a function that determines whether the second array is a subsequence of the first one.
  
  A Subsequence of an array is a set of numbers that aren't necessarily adjacent in the array 
  but that are in the same order as they appear in the array.
  
  For instance, the numbers [1, 3, 4] form a subsequence of the array [1, 2, 3, 4], and so do the numbers [2, 4].
  
  Note that a single number in an array and the array itself are both valid subsequence of the array.
*/

// O(n) / O(1)
function isValidSubsequence(array: number[], sequence: number[]) {
  let arrIdx = 0;
  let seqIdx = 0;

  // sequence 의 요소는 인접할 필요가 없고, 순서만 유지되면 된다. 따라서, array 에 sequence 요소가 순서대로 있는지만 확인한다.
  // 반복문의 꾸준히 증감되는 index 대신, 포인터를 두면 조건에 만족할 때마다 포인터를 증가시키는 고정인덱스를 구현할 수 있다.
  while (arrIdx < array.length && seqIdx < sequence.length) {
    if (array[arrIdx] === sequence[seqIdx]) seqIdx++;

    arrIdx++;
  }

  return seqIdx === sequence.length;
}

// O(n) / O(1)
function _isValidSubsequence(array: number[], sequence: number[]) {
  let seqIdx = 0;

  // array 를 순회하며 sequence 의 고정인덱스 seqIdx 를 조정한다.
  // 반복문 중간에 실패하는 조건은 만들 수 없다. 모든 array 를 순회해야 판단가능하다.
  for (const value of array) {
    if (sequence[seqIdx] === value) seqIdx++;
    if (seqIdx === sequence.length) return true;
  }

  return false;
}
