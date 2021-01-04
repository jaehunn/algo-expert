/**
 * Write a function that takes in a non-empty array of integers
 * and returns the maximum sum that can be obtained by summing up all of the integers in a non-empty subarray of the input array.
 * A subarray must only contained adjacent numbers (numbers next to each other in the array)
 */

// O(n) / O(1)
function kadanesAlgorithm(array: number[]) {
  let pre = array[0];
  let cur = array[0];

  for (let i = 1; i < array.length; i += 1) {
    pre = Math.max(pre + array[i], array[i]); // restart?
    cur = Math.max(cur, pre); // update
  }

  return cur;
}

// in-place
function _kadanesAlgorithm(array: number[]) {
  for (let i = 1; i < array.length; i += 1) {
    array[i] = Math.max(array[i - 1] + array[i], array[i]);
  }

  return Math.max(...array);
}
