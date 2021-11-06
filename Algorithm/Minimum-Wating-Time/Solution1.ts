// T: O(nlog(n))
// S: O(1)

export function Solution1(queries: number[]) {
  queries.sort((a, b) => a - b);

  let totalWaitingTime = 0;
  for (let i = 0; i < queries.length; i += 1) {
    const duration = queries[i];
    const queriesLeft = queries.length - (i + 1); // *

    totalWaitingTime += duration * queriesLeft;
  }

  return totalWaitingTime;
}
