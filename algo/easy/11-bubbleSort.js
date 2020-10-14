function bubbleSort(array) {
  let newArray = [...array];
  let flag;

  for (let i = 1; i < newArray.length; i += 1) {
    flag = false;

    for (let j = 0; j < newArray.length - i; j += 1) {
      if (newArray[j] > newArray[j + 1]) {
        [newArray[j], newArray[j + 1]] = [newArray[j + 1], newArray[j]];

        flag = true;
      }
    }

    if (!flag) return newArray;
  }

  return newArray;
}

// Best O(n) / O(1)
// Average O(n^2) / O(1)
// Worst O(n^2) / O(1)
function _bubbleSort(array) {
  let isSorted;
  let counter = 0;

  while (!isSorted) {
    isSorted = true;

    for (let i = 0; i < array.length - 1 - counter; i += 1) {
      if (array[i] > array[i + 1]) swap(i, i + 1, array);

      isSorted = false;
    }

    counter += 1;
  }
}

function swap(i, j, array) {
  let temp = array[j];
  array[j] = array[i];
  array[i] = temp;
}
