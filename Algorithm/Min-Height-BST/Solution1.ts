export class BST {
  value: number;
  left: BST | null;
  right: BST | null;
  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  // node range: a < x <= b
  insert(value: number) {
    if (value < this.value) {
      if (!this.left) this.left = new BST(value);
      else this.left.insert(value);
    } else {
      if (!this.right) this.right = new BST(value);
      else this.right.insert(value);
    }
  }
}

// T: O(nlog(n))
// S: O(n)

// '최소 높이를 가지는' BST 를 만드는 것은, BST 를 만드는 로직과 무엇이 다르지?
export function Solution1(array: number[]) {
  return constructMinHeightBST(array);
}

function constructMinHeightBST(
  array: number[],
  bst: BST | null = null,
  startIdx = 0,
  endIdx = array.length - 1
) {
  if (endIdx < startIdx) return;

  const midIdx = Math.floor((startIdx + endIdx) / 2);
  const valueToAdd = array[midIdx];

  if (!bst) bst = new BST(valueToAdd);
  else bst.insert(valueToAdd);

  // 누적 bst 를 넘긴다?
  constructMinHeightBST(array, bst, startIdx, midIdx - 1);
  constructMinHeightBST(array, bst, midIdx + 1, endIdx);

  return bst;
}
