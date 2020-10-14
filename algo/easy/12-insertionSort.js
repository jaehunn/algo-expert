function insertionSort(array) {
  for (let i = 0; i < array.length; i += 1) {
    let c = i;

    while (c && array[c - 1] > array[c]) {
      [array[c - 1], array[c]] = [array[c], array[c - 1]];

      c -= 1;
    }
  }

  return array;
}

// Best: O(n) / O(1)
// Average: O(n ^ 2) / O(1)
// Worst: O(n ^ 2) / O(1)
function _insertionSort(array) {
  for (let i = 1; i < array.length; i += 1) {
    let j = i;

    while (j > 0 && array[j] < array[j - 1]) {
      swap(j, j - 1, array);

      j -= 1;
    }
  }

  return array;
}

function _swap(i, j, array) {
  let temp = array[j];
  array[j] = array[i];
  array[i] = temp;
}
