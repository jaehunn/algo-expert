// dp
// O(n * n)
// no-adjacency
function longestIncreasingSubsequence(items, l = items.length) {
  const ls = Array(items.length).fill(1); // length array

  let i = 0;
  let j = 1;
  while (j < l) {
    if (items[i] < items[j]) {
      if (ls[i] + 1 > ls[j]) ls[j] = ls[i] + 1;
    }

    i += 1;

    if (i === j) {
      j += 1; // next
      i = 0; // reset
    }
  }

  return Math.max(...ls);
}

console.log(longestIncreasingSubsequence([0, 8, 4, 12, 2, 10])); // 3

// items = [0, 8, 4, 12, 2, 10] / ls = [1, 1, 1, 1, 1, 1]
// [0 8] = [0, 8]
// [0 8 4] = [0, 8], [0, 4]
// [0 8 4 12] = [0, 8, 12], [0, 4, 12]
// [0 8 4 12 2] = [0, 2]
// [0 8 4 12 2 10] = [0, 8, 10], [0, 4, 10], [0, 2, 10]
