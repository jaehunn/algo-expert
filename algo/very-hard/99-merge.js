function mergeSort(array) {
  if (array.length === 1) return array;

  const middle = (array.length / 2) << 0;
  const leftArray = array.slice(0, middle);
  const rightArray = array.slice(middle, array.length);

  return merge(mergeSort(leftArray), mergeSort(rightArray));
}

function merge(leftArray, rightArray) {
  const sortedArray = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < leftArray.length || rightIndex < rightArray.length) {
    if (
      leftIndex >= leftArray.length ||
      leftArray[leftIndex] > rightArray[rightIndex]
    ) {
      sortedArray.push(rightArray[rightIndex++]);
    } else sortedArray.push(leftArray[leftIndex++]);
  }

  return sortedArray;
}
