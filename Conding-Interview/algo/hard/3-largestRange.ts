/**
 * Write a function that takes in an array of integers and returns an array of length 2 representing the largest range of integers contained in that array.
 *
 * The first number in the output array sohuld be the first number in the range, while the second number should be the last number in the range.
 *
 * A range of numbers is defined as a set of numbers that come right after each other in the set of real integers.
 * For instance, the output array [2, 6] represents the range {2, 3, 4, 5, 6}, which is a range of length 5.
 *
 * Note that numbers don't need to be sorted or adjacent in the input array in order to form a range.
 *
 * You can assume that there will only be one largest range.
 */

function largestRange(array: number[]): [number, number] {
  let newArray = [...array].sort((a, b) => a - b);

  for (let i = 1; i < newArray.length; i += 1) {}

  return res;
}

// [1, 11, 3, 0, 15, 5, 2, 4, 10, 7, 12, 6]
// [0, 1, 2, 3, 4, 5, 6, 7, 10, 11, 12, 15]

// sort -> diff break -> max length
