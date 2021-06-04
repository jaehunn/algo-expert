// 1. 무조건 반으로 분할하기
// 2. 정렬시켜 합치기*

function mergeSort(items) {
  if (items.length <= 1) return items;

  let midI = (items.length / 2) << 0;
  const leftSortedItems = items.slice(0, midI);
  const rightSortedItems = items.slice(midI, items.length);

  // 1. divide
  return merge(mergeSort(leftSortedItems), mergeSort(rightSortedItems));
}

// 2. sort + combine
function merge(leftItems, rightItems) {
  const sortedItems = [];

  let leftI = 0;
  let rightI = 0;

  while (leftI < leftItems.length || rightI < rightItems.length) {
    let minItem;

    if (!rightItems[rightI] || leftItems[leftI] <= rightItems[rightI]) {
      minItem = leftItems[leftI];

      leftI += 1;
    } else {
      minItem = rightItems[rightI];

      rightI += 1;
    }

    sortedItems.push(minItem);
  }

  return sortedItems;
}

console.log(mergeSort([6, 1, 4, 2, 3]));
