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

export function Solution1(tree: BST, k: number) {
  const sortedNodeValues: number[] = [];

  // bst 에서 in-order traversing 하면 asc 탐색한다.
  inOrderTraverse(tree, sortedNodeValues);

  return sortedNodeValues[sortedNodeValues.length - k];
}

function inOrderTraverse(node: BST | null, sortedNodeValue: number[]) {
  if (!node) return;

  inOrderTraverse(node.left, sortedNodeValue);
  sortedNodeValue.push(node.value);
  inOrderTraverse(node.right, sortedNodeValue);
}
