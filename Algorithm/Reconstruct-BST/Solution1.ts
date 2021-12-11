export class BST {
  value: number;
  left: BST | null;
  right: BST | null;

  constructor(
    value: number,
    left: BST | null = null,
    right: BST | null = null
  ) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

// pre-order: visit -> left -> right
// [first Index]: root
// [last Index]: right root

// T: O(n^2)
// S: O(n)
export function Solution1(preOrderTraversalValues: number[]): BST | null {
  if (preOrderTraversalValues.length === 0) return null;

  const rootNodeValue = preOrderTraversalValues[0];
  let rightSubTreeRootNodeIdx = preOrderTraversalValues.length;

  for (let i = 1; i < preOrderTraversalValues.length; i += 1) {
    const currentNodeValue = preOrderTraversalValues[i];

    // find right sub-tree root node
    if (currentNodeValue >= rootNodeValue) {
      rightSubTreeRootNodeIdx = i;

      break;
    }

    const leftSubTree = Solution1(
      preOrderTraversalValues.slice(1, rightSubTreeRootNodeIdx)
    );
    const rightSubTree = Solution1(
      preOrderTraversalValues.slice(rightSubTreeRootNodeIdx)
    );

    return new BST(rootNodeValue, leftSubTree, rightSubTree);
  }
}
