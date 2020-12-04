/**
 * Write a function that takes in array of integers and returns the length of the longest peak in the array.
 *
 * A peak is defined as adjacent integers in the array that are strictly increasing untile the reach a tip (the highest value in the peak), at which point they become strictly decreasing.
 * At least three integers are required to form a peak.
 *
 * For example, the integers 1, 4, 10, 2 form a peak, but the integers 4, 0, 10 don't and neither do the integers 1, 2, 2, 0.
 * Similarly, the integers 1, 2, 3 don't form a peak because there aren't any strictly decreasing integers after the 3.
 */

// peak 한 세 요소를 찾으면 좌우로 인덱스를 확장시킨다.

// O(n) / O(1)
function longestPeak(array) {
  let longestPeakLength = 0;
  let i = 1;

  // [i - 1, i, i + 1]
  while (i < array.length - 1) {
    // find peak
    const isPeak = array[i - 1] < array[i] && array[i + 1] < array[i];

    // continue 로 후퇴시키기
    if (!isPeak) {
      i += 1;
      continue;
    }

    // extend
    let leftIdx = i - 2;
    while (leftIdx >= 0 && array[leftIdx] < array[leftIdx + 1]) leftIdx -= 1;

    let rightIdx = i + 2;
    while (rightIdx < array.length && array[rightIdx] < array[rightIdx - 1])
      rightIdx += 1;

    // (left, ... right): right - left - 1
    const currentPeakLength = rightIdx - leftIdx - 1;

    // update
    longestPeakLength = Math.max(longestPeakLength, currentPeakLength); // update

    // new start index
    i = rightIdx;
  }

  return longestPeakLength;
}
