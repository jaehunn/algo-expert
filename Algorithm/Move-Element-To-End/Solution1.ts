// T: O(n), in place
// S: O(1)

export function Solution1(array: number[], toMove: number) {
  let i = 0;
  let j = array.length - 1;

  while (i < j) {
    while (i < j && array[j] === toMove) j -= 1;

    // array[i] = toMove
    // array[j] != toMove
    if (array[i] === toMove) {
      [array[i], array[j]] = [array[j], array[i]];

      console.log(array);
    }

    i += 1;
  }

  // mutate
  return array;
}
