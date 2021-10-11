type SpecialArray = Array<number | SpecialArray>;

// T: O(n), where n is the total number of elements in the array.
// S: O(d), including sub-elements, and d is the greatest depth of "special" arrays in the array.
function Solution1(array: SpecialArray, multiplier = 1) {
  let sum = 0;
  for (const elem of array) {
    if (Array.isArray(elem)) {
      // recursive
      sum += Solution1(elem, multiplier + 1);
    } else {
      sum += elem;
    }
  }

  return sum * multiplier;
}
