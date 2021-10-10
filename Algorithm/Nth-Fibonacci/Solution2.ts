interface Memo {
  [key: number]: number;
}

// T: O(n)
// S: O(n)
function Solution2(n: number, memoize: Memo = { 1: 0, 2: 1 }) {
  if (n in memoize) return memoize[n];

  return (memoize[n] = Solution2(n - 1, memoize) + Solution2(n - 2, memoize));
}
