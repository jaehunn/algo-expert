// T: O(n)
// S: O(1)

export function Solution2(array: number[]) {
  let isNonDecreasing = true;
  let isNonIncreasing = true;
  for (let i = 1; i < array.length; i += 1) {
    if (array[i] < array[i - 1]) isNonDecreasing = false;
    if (array[i] > array[i - 1]) isNonIncreasing = false;
  }

  // XOR 되어야하지만, 둘다 변화가 있으면(true 면 false 가 되어야한다.) 안된다.
  // 변화가 없는 초기화값을 true 로 만들어야하는데
  // 그러려면, isIncreasing 보다는 isNonIncreasing 으로 플래그를 가져가는게 효율적이다.

  return isNonDecreasing || isNonIncreasing;
}
