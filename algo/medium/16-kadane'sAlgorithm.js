// O(n) / O(1)
function kadanesAlgorithm(array) {
  let pre = (cur = array[0]);

  for (let i = 1; i < array.length; i += 1) {
    pre = Math.max(pre + array[i], array[i]); // add or reset
    cur = Math.max(cur, pre);
  }

  return cur;
}

// in-place
function _kadanesAlgorithm(array) {
  for (let i = 1; i < array.length; i += 1) {
    array[i] = Math.max(array[i - 1] + array[i], array[i]);
  }

  return Math.max(...array);
}
