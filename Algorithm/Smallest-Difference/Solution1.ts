// T: O(nlogn + mlogm), n, m is the number of array length
// S: O(1)

export function Solution1(arrayOne: number[], arrayTwo: number[]) {
  arrayOne.sort((a, b) => a - b);
  arrayTwo.sort((a, b) => a - b);

  let arrayOneIndex = 0;
  let arrayTwoIndex = 0;

  let currentDifference = Infinity;
  let smallestDifference = Infinity;

  // mutate (update)
  let result: number[] = [];
  while (arrayOneIndex < arrayOne.length && arrayTwoIndex < arrayTwo.length) {
    const arrayOneValue = arrayOne[arrayOneIndex];
    const arrayTwoValue = arrayTwo[arrayTwoIndex];

    // guard
    if (arrayOneValue === arrayTwoValue) return [arrayOneValue, arrayTwoValue];

    arrayOneValue < arrayTwoValue ? (arrayOneIndex += 1) : (arrayTwoIndex += 1);

    currentDifference = Math.abs(arrayOneValue - arrayTwoValue);

    // update (difference, values)
    if (smallestDifference > currentDifference) {
      smallestDifference = currentDifference;

      result = [arrayOneValue, arrayTwoValue];
    }
  }

  return result;
}
