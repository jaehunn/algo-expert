// T: O(n), n is the length of the input array
// S: O(1)

export function Solution1(array: number[]) {
  let longestPeakLength = 0;

  let i = 1;
  while (i < array.length - 1) {
    const isPeak = array[i - 1] < array[i] && array[i + 1] < array[i];

    if (!isPeak) {
      i += 1;

      continue;
    }

    // 확장하기
    let leftIdx = i - 2;
    while (leftIdx >= 0 && array[leftIdx] < array[leftIdx + 1]) leftIdx -= 1;

    let rightIdx = i + 2;
    while (rightIdx < array.length && array[rightIdx - 1] > array[rightIdx])
      rightIdx += 1;

    // length = b - a - 1
    const currentPeakLength = rightIdx - leftIdx - 1;

    // update
    longestPeakLength = Math.max(longestPeakLength, currentPeakLength);
    i = rightIdx;
  }

  return longestPeakLength;
}
