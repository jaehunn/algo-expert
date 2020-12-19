/**
 * Write a function that takes in a "special" array and returns its product sum.
 *
 * A "special" array is a non-empty array that contains either integer or other "special" arrays.
 * The product sum of a "special" array is the sum of its elements, where "speical" array inside it are summed themselves and then multiplied by their level of depth.
 *
 * The depth of a "special" array is how far nested it is.
 * For instance, the depth of [] is 1; the depth of the inner array in [[]] is 2;
 * the dept of the innermost array in [[[]]] is 3.
 *
 * Therefore, the product sum of [x, y] is x + y;
 * the product sum of [x, [y, z]] is x + 2 * (y + z);
 * the product sum of [x, [y, [z]]] is x + 2 * (y + 3z).
 */

type SpecialArray = Array<number | SpecialArray>;

// O(n) / O(d)
function productSum(array: SpecialArray, multiplier = 1) {
  let sum = 0;

  for (const element of array) {
    if (Array.isArray(element)) sum += productSum(element, multiplier + 1);
    else sum += element;
  }

  return sum * multiplier;
}

productSum([5, 2, [7, -1], 3, [6, [-13, 8], 4]]);
