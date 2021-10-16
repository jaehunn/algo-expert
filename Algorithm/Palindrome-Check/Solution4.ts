// T: O(n)
// S: O(1)
export function Solution4(string: string) {
  let leftIdx = 0;
  let rightIdx = string.length - 1;
  while (leftIdx < rightIdx) {
    // guard
    if (string[leftIdx] !== string[rightIdx]) return false;

    leftIdx += 1;
    rightIdx -= 1;
  }

  return true;
}
