export class BST {
  value: number;
  left: BST | null;
  right: BST | null;
  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// T: O(n)
// S: O(n)

export function Solution3(array: number[]) {
  return constructMinHeightBst(array);
}

function constructMinHeightBst(
  array: number[],
  startIdx = 0,
  endIdx = array.length - 1
) {
  if (endIdx < startIdx) return null;

  const midIdx = Math.floor((startIdx + endIdx) / 2);
  const valueToAdd = array[midIdx];
  const bst = new BST(valueToAdd);

  // 사실, asc 으로 sorted 된 array 는 단계마다 중간값을 노드로 설정하는 과정이 곧 bst 를 만드는 과정이된다.
  // 따라서, valueToAdd 가 현재 bst 노드보다 큰지 작은지는 중요하지 않다는 것

  // 주의할 점은 분기없이 할당하므로, 반환값은 bst 타입이어야한다(+null)
  bst.left = constructMinHeightBst(array, startIdx, midIdx - 1);
  bst.right = constructMinHeightBst(array, midIdx + 1, endIdx);

  return bst;
}
