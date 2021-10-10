// T: O(n^2)
// S: O(n)
function Solution1(n: number): number {
  if (n === 1) return 0;
  if (n === 2) return 1;

  return Solution1(n - 1) + Solution1(n - 2);
}
