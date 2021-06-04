function selectionSort(items, length = items.length) {
  for (let i = 0; i < length; i += 1) {
    let minI = i; // position index

    // find min item
    for (let j = i + 1; j < length; j += 1) {
      // update
      if (items[minI] > items[j]) minI = j;
    }

    if (i !== minI) [items[i], items[minI]] = [items[minI], items[i]];
  }

  return items;
}

console.log(selectionSort([6, 1, 4, 2, 3]));
