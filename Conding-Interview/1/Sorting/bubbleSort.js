function bubbleSort(items, length = items.length) {
  let isSwap;
  for (let i = 1; i < length; i += 1) {
    isSwap = false; // reset

    for (let j = 0; j < length - i; j += 1) {
      if (items[j] > items[j + 1]) {
        [items[j], items[j + 1]] = [items[j + 1], items[j]];

        isSwap = true; // set flag
      }
    }

    if (!isSwap) return items; // already completed
  }

  return items;
}

console.log(bubbleSort([6, 1, 4, 2, 3]));
