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
export function Solution2(array: number[]) {
  return constructMinHeightBST(array);
}

// 노드를 만들어서 현재 bst 기준으로 왼쪽에 붙힐지 오른쪽에 붙힐지를 정한다.
// 생성하고 붙힌 노드를 기준으로 왼쪽 bst 오른쪽 bst 를 기준으로 다시 돌린다.

function constructMinHeightBST(
  array: number[],
  bst: BST | null = null,
  startIdx = 0,
  endIdx = array.length - 1
) {
  if (endIdx < startIdx) return;

  const midIdx = Math.floor((startIdx + endIdx) / 2);
  const valueToAdd = array[midIdx];
  const newBst = new BST(array[midIdx]);

  if (!bst) {
    bst = newBst;
  } else {
    // BST 클래스의 insert 로직을 직접 구현
    if (valueToAdd < bst.value) {
      bst.left = newBst; // add
      bst = bst.left; // move
    } else {
      bst.right = newBst;
      bst = bst.right;
    }
  }

  // 하위 bst 를 넘긴다.
  constructMinHeightBST(array, bst, startIdx, midIdx - 1);
  constructMinHeightBST(array, bst, midIdx + 1, endIdx);

  return bst;
}
