/**
 * Write a function that takes in two strings and returns the minimum number of edit operations that need to be performed on the first string to obtain the second string.
 *
 * There are three edit operations: insertion of a character, deletion of a character, and substitution of a character for another.
 */

// O(nm) / O(nm)
function levenshteinDistance(str1, str2) {
  // create two dimensional array
  const edits = [];
  for (let i = 0; i < str2.length + 1; i += 1) {
    const row = [];

    for (let j = 0; j < str1.length + 1; j += 1) {
      row.push(j);
    }

    row[0] = i;
    edits.push(row);
  }

  // 레번스타인 알고리즘 (다이나믹 프로그래밍)
  // 1. 끝 글자가 같으면 대각 요소를 그대로 가져간다. (a, ya)
  // 2. 그렇지 않다면, 대각요소, 상, 하 요소 중 최소값에 연산 하나를 더한다

  for (let i = 1; i < str2.length + 1; i += 1) {
    for (let j = 1; j < str1.length + 1; j += 1) {
      if (str2[i - 1] === str1[j - 1]) edits[i][j] = edits[i - 1][j - 1];
      else
        edits[i][j] =
          1 + Math.min(edits[i - 1][j - 1], edits[i - 1][j], edits[i][j - 1]);
    }
  }

  return edits[str2.length][str1.length];
}
