function longestCommonSubsequence(set1, set2) {
  let matrix = Array(set2.length + 1)
    .fill(0)
    .map(() => Array(set1.length + 1).fill(0));

  for (let i = 1; i <= set2.length; i += 1) {
    for (let j = 1; j <= set1.length; j += 1) {
      // diagonal + 1
      if (set1[j - 1] === set2[i - 1]) matrix[i][j] = matrix[i - 1][j - 1] + 1;
      else matrix[i][j] = Math.max(matrix[i - 1][j], matrix[i][j - 1]); // max(left, top)
    }
  }

  if (!matrix[set2.length][set1.length]) return [""]; // no-common

  let result = [];
  let i = set2.length;
  let j = set1.length;

  // find common
  while (j > 0 || i > 0) {
    if (set1[j - 1] === set2[i - 1]) {
      result.unshift(set1[j - 1]);

      // move diagonal
      j -= 1;
      i -= 1;
    } else if (matrix[i][j] === matrix[i][j - 1]) {
      j -= 1; // move top
    } else {
      i -= 1; // move left
    }
  }

  return result;
}
