// T: O(n)
// S: O(1)
function Solution3(n: number) {
  const lastTwo: [number, number] = [0, 1];

  if (n === 1 || n === 2) return lastTwo[n - 1];

  let counter = 3;
  while (counter <= n) {
    [lastTwo[0], lastTwo[1]] = [lastTwo[1], lastTwo[0] + lastTwo[1]];

    counter += 1;
  }

  return lastTwo[1];
}
