function insertionSort(items) {
  for (let i = 1; i < items.length; i += 1) {
    let j = i; // target index

    // find position
    while (j && items[j - 1] > items[j]) {
      [items[j - 1], items[j]] = [items[j], items[j - 1]];

      j -= 1;
    }
  }

  return items;
}

console.log(insertionSort([6, 1, 4, 3, 2]));
