// T: O(n)
// S: O(1)

export function Solution3(array: number[]) {
  // set 을 들이지 않고 풀 수 있을까?
  // 이 값을 봤다라는 것을 어디에, 어떻게 표시해서 또 중복된 값을 어디에있는 표시를 보고 찾아낼 수 있을까?
  // '값 - 1' 인덱스에 표시하면 중복된 값이 동일한 인덱스를 바라볼 수 있게된다.
  // 표시는? 양수만을 취급하는 인풋에 대해 부호를 추가하면 봤다는 것을 표시가 가능하다.
  for (const value of array) {
    const absValue = Math.abs(value);

    if (array[absValue - 1] < 0) return absValue;

    array[absValue - 1] *= -1;
  }

  return -1;
}
