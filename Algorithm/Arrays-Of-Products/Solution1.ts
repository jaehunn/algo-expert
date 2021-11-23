// T: O(n^2), n is the length of the input array
// S: O(n)

export function Solution1(array: number[]) {
  const products: number[] = [];

  for (let i = 0; i < array.length; i += 1) {
    let runningProduct = 1;

    for (let j = 0; j < array.length; j += 1) {
      if (i !== j) runningProduct *= array[j];
    }

    products[i] = runningProduct;
  }

  return products;
}
