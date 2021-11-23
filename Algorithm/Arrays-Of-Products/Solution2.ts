// T: O(n)
// S: O(n)

export function Solution2(array: number[]) {
  const products: number[] = new Array(array.length).fill(1);
  const leftProducts: number[] = new Array(array.length).fill(1);
  const rightProducts: number[] = new Array(array.length).fill(1);

  // 기준점으로부터 좌우에서 값 얻어오기
  let leftRunningProduct = 1;
  for (let i = 0; i < array.length; i += 1) {
    leftProducts[i] = leftRunningProduct;
    leftRunningProduct *= array[i];
  }

  let rightRunningProduct = 1;
  for (let i = array.length - 1; i >= 0; i -= 1) {
    rightProducts[i] = rightRunningProduct;
    rightRunningProduct *= array[i];
  }

  for (let i = 0; i < array.length; i += 1) {
    products[i] = leftProducts[i] * rightProducts[i];
  }

  return products;
}
