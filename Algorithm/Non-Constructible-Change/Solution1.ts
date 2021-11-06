// T: O(nlog(n)), n is the number of coins.
// S: O(1)

export function Solution1(coins: number[]) {
  coins.sort((a, b) => a - b);

  // 순회하다가 next 가 sum + 1 보다 크면 break
  let currentChangeCreated = 0;
  for (const coin of coins) {
    if (coin > currentChangeCreated + 1) return currentChangeCreated + 1;

    currentChangeCreated += coin;
  }

  return currentChangeCreated + 1;
}
