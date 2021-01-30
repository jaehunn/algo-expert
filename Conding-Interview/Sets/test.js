// longest increasing subsequence
// ls[i] = 0 부터 i 까지의 증가 부분배열
function lis(items, l = items.length) {
  let ls = Array(l).fill(1);

  let i = 0;
  let j = 1;
  while (j < l) {
    if (items[i] < items[j]) {
      if (ls[i] + 1 > ls[j]) ls[j] = ls[i] + 1;
    }

    i += 1;

    if (i === j) {
      j += 1;
      i = 0;
    }
  }

  return Math.max(...ls);
}
