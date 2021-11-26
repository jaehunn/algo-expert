// T: O(nlog(n)), n is the length of the input array
// S: O(n)

export function Solution1(array: number[][]) {
  const sortedIntervals = array.sort((a, b) => a[0] - b[0]);

  const mergedIntervals: number[][] = [];

  let currentInterval = sortedIntervals[0]; // update
  mergedIntervals.push(currentInterval);
  for (const nextInterval of sortedIntervals) {
    const [_, currentIntervalEnd] = currentInterval;
    const [nextIntervalStart, nextIntervalEnd] = nextInterval;

    if (currentIntervalEnd >= nextIntervalStart) {
      // merged
      currentInterval[1] = Math.max(currentIntervalEnd, nextIntervalEnd);
    } else {
      currentInterval = nextInterval;
      mergedIntervals.push(currentInterval);
    }
  }

  return mergedIntervals;
}
