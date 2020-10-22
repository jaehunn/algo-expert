// 1 2 3 = 3 break next
// 3 4 0 < 10 break push prev
// 0 10 6 5 -1 -3 < 2 break push prev
// -3 2 3 = end break push
function longestPeak(array) {
  let longestPeakLength = 0;
  let i = 1;

  // triplet [i - 1, i, i + 1]
  while (i < array.length - 1) {
    const isPeak = array[i - 1] < array[i] && array[i + 1] < array[i];

    if (!isPeak) {
      i += 1;
      continue;
    }

    let leftIdx = i - 2;
    while (leftIdx >= 0 && array[leftIdx] < array[leftIdx + 1]) leftIdx -= 1;

    let rightIdx = i + 2;
    while (rightIdx < array.length && array[rightIdx] < array[rightIdx - 1])
      rightIdx += 1;

    // right - left + 1 (- 2: out of range)
    const currentPeakLength = rightIdx - leftIdx - 1;
    longestPeakLength = Math.max(longestPeakLength, currentPeakLength); // update

    // new index
    i = rightIdx; // move
  }

  return longestPeakLength;
}
