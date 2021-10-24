// T: O(n * log(n)), n is the length of the input array
// S: O(n)

export function Solution1(array: number[]) {
  const sortedSquares = new Array(array.length).fill(0);

  for (let i = 0; i < array.length; i += 1) {
    const value = array[i];

    sortedSquares[i] = value * value;
  }

  sortedSquares.sort((a, b) => a - b); // mutable

  return sortedSquares;
}
