function levenshteinDistance(str1, str2) {
  // create matrix (str1.length x str2.length)
  const edits = [];
  for (let i = 0; i < str2.length + 1; i += 1) {
    const row = [];

    for (let j = 0; j < str1.length + 1; j += 1) {
      row.push(j);
    }

    row[0] = i;
    edits.push(row);
  }

  // 레번스타인 알고리즘

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
