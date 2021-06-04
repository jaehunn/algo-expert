function quickSort(items) {
  if (items.length <= 1) return items;

  const leftItems = [];
  const rightItems = [];

  const pivotItem = items.shift(); // front item
  const centerItems = [pivotItem];

  while (items.length) {
    const targetItem = items.shift();

    if (targetItem < pivotItem) leftItems.push(targetItem);
    else if (targetItem > pivotItem) rightItems.push(targetItem);
    else centerItems.push(targetItem);
  }

  // 1. -> divide + sort
  const leftSortedItems = quickSort(leftItems);
  const rightSortedItems = quickSort(rightItems);

  // 2. combine
  return [...leftSortedItems, ...centerItems, ...rightSortedItems];
}

console.log(quickSort([6, 1, 4, 2, 3]));
