function selectionSort(array) {
  for (let i = 0; i < array.length; i += 1) {
    let minI = i;

    for (let j = i + 1; j < array.length; j += 1) {
      if (array[minI] > array[j]) minI = j;
    }

    if (minI !== i) [array[i], array[minI]] = [array[minI], array[i]];
  }

  return array;
}

// Best: O(n ^ 2) / O(1)
// Average: O(n ^ 2) / O(1)
// Worst: O(n ^ 2) / O(1)
function _selectionSort(array) {
  let startIdx = 0;

  while (startIdx < array.length - 1) {
    let smallestIdx = startIdx;

    for (let i = startIdx + 1; i < array.length; i += 1) {
      if (array[smallestIdx] > array[i]) smallestIdx = i;
    }

    swap(startIdx, smallestIdx, array);

    startIdx += 1;
  }

  return array;
}

function _swap(i, j, array) {
  let temp = array[j];
  array[j] = array[i];
  array[i] = temp;
}
