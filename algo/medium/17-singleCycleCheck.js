// wip
function hasSingleCycle(array) {
  let l = array.length;
  let i = 0;
  while (l--) {
    i += array[i];

    if (i === 0) return false;

    // normalize
    while (i < 0) i += array.length;
    while (i >= array.length) i -= array.length;
  }

  return i === 0;
}

// [1, 2, 3, 4, -2, 3, 7, 8, -8]
