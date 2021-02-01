function levenshteinDistance(a, b) {
  const D = Array(b.length + 1)
    .fill(null)
    .map(() => Array(a.length + 1).fill(null));

  for (let i = 0; i <= a.length; i += 1) {
    D[0][i] = i;
  }

  for (let i = 0; i <= b.length; i += 1) {
    D[i][0] = i;
  }

  // D[i][j] = b[i] -> a[j]
  for (let i = 1; i <= b.length; i += 1) {
    for (let j = 1; j <= a.length; j += 1) {
      const indicator = a[i - 1] === b[j - 1] ? 0 : 1;

      D[i][j] = Math.min(
        D[i][j - 1] + 1, // deletion
        D[i - 1][j] + 1, // insertion
        D[i - 1][j - 1] + indicator // substitution
      );
    }
  }

  return D[b.length][a.length];
}
