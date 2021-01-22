function longestCommonSubsequence(set1, set2) {
  // row = set2
  // col = set1
  let matrix = Array(set2.length + 1)
    .fill(0)
    .map(() => Array(set1.length + 1).fill(0));

  // 문자가 같다면 이전 대각요소값을 1 증가시킨다.
  // 문자가 다르다면 좌측과 상단 요소의 최대값을 채택
  for (let i = 1; i <= set2.length; i += 1) {
    for (let j = 1; j <= set1.length; j += 1) {
      if (set1[j - 1] === set2[i - 1]) matrix[i][j] = matrix[i - 1][j - 1] + 1;
      else matrix[i][j] = Math.max(matrix[i - 1][j], matrix[i][j - 1]);
    }
  }

  if (!matrix[set2.length][set1.length]) return [""]; // nothing

  let result = [];
  let i = set2.length;
  let j = set1.length;

  // 좌표에 해당하는 문자인덱스를 삽입한다.
  while (j > 0 || i > 0) {
    if (set1[j - 1] === set2[i - 1]) {
      result.unshift(set1[j - 1]);

      j -= 1;
      i -= 1;
    } else if (matrix[i][j] === matrix[i][j - 1]) {
      j -= 1;
    } else {
      i -= 1;
    }
  }

  return result;
}
