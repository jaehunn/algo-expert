// T: O(n)
// S: O(1)
function solution2(array: number[], sequence: number[]) {
  let seqIdx = 0;
  for (const value of array) {
    if (seqIdx === sequence.length) break;

    if (sequence[seqIdx] === value) seqIdx += 1;
  }

  return seqIdx === sequence.length;
}
