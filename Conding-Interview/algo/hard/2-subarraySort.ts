/**
 * Write a function that takes in an array of at least two integers and that returns an array of the starting and ending indices of the smallest subarray in the input array
 * that needs to be stored in place in order for the entire input array to be sorted (in ascending order).
 *
 * If the input array is already sorted, the function should return [-1, -1]
 */

type Range = [number, number];

export function subarraySort(array: number[]): Range {
  let minOutOfOrder = Infinity;
  let maxOutOfOrder = -Infinity;

  // find subarray max, min
  for (let i = 0; i < array.length; i++) {
    const num = array[i];

    // subarray 를 추출함과 동시에 max 와 min 을 지속적으로 찾아낸다
    if (isOutOfOrder(i, num, array)) {
      minOutOfOrder = Math.min(minOutOfOrder, num);
      maxOutOfOrder = Math.max(maxOutOfOrder, num);
    }
  }

  // not updated, input array already sorted
  if (minOutOfOrder === Infinity) return [-1, -1];

  // find position
  let subarrayLeftIdx = 0;
  while (minOutOfOrder >= array[subarrayLeftIdx]) subarrayLeftIdx++;

  let subarrayRightIdx = array.length - 1;
  while (maxOutOfOrder <= array[subarrayRightIdx]) subarrayRightIdx--;

  return [subarrayLeftIdx, subarrayRightIdx];
}

function isOutOfOrder(i: number, num: number, array: number[]) {
  // first, end
  if (i === 0) return num > array[i + 1];
  if (i === array.length - 1) return num < array[i - 1];

  // i > 2
  return num > array[i + 1] || num < array[i - 1];
}

// [1, 2, 4, 7, 10, 11, 7, 12, 6, 7, 16, 18, 19]
// [v, v, v, v, v,  x,  x,  x, x, v,  v,  v,  v]

// [11, 7, *12, *6]

// hacky
function _subarraySort(array) {
  let newArray = [...array].sort((a, b) => a - b);

  let s = 0;
  let e = array.length - 1;

  while (s < array.length && array[s] === newArray[s]) s += 1;

  if (s === array.length) return [-1, -1];

  while (array[e] === newArray[e]) e -= 1;

  return [s, e];
}
