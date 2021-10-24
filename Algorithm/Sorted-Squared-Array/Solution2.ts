// T: O(n), n is the length of the input array
// S: O(n)

export function Solution2(array: number[]) {
  const sortedSquares = new Array(array.length).fill(0);

  let smallerIndex = 0;
  let largerIndex = array.length - 1;
  for (let i = array.length - 1; i >= 0; i -= 1) {
    const smallerValue = array[smallerIndex];
    const largerValue = array[largerIndex];

    // 정수 범위에서 제곱수의 크기는 절댓값으로 비교해야한다.
    if (Math.abs(smallerValue) > Math.abs(largerValue)) {
      sortedSquares[i] = smallerValue ** 2;

      smallerIndex += 1;
    } else {
      sortedSquares[i] = largerValue ** 2;

      largerIndex -= 1;
    }
  }

  return sortedSquares;
}
