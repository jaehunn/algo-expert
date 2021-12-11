export class BST {
  value: number;
  left: BST | null;
  right: BST | null;

  constructor(value: number, left: BST | null, right: BST | null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class TreeInfo {
  rootNodeIdx: number;

  constructor(rootNodeIdx: number) {
    this.rootNodeIdx = rootNodeIdx;
  }
}

// T: O(n)
// S: O(n)
export function Solution2(preOrderTraversalValues: number[]) {
  const treeInfo = new TreeInfo(0);

  return reconstructBstFromRange(
    -Infinity,
    Infinity,
    preOrderTraversalValues,
    treeInfo
  );
}

// bst 특성을 활용한 boundary 설정하기

function reconstructBstFromRange(
  lowerBound: number,
  upperBound: number,
  preOrderTraversalValues: number[],
  currentSubTreeInfo: TreeInfo
): BST | null {
  if (currentSubTreeInfo.rootNodeIdx === preOrderTraversalValues.length)
    return null;

  const rootNodeValue = preOrderTraversalValues[currentSubTreeInfo.rootNodeIdx];

  // out of range
  if (rootNodeValue < lowerBound || rootNodeValue >= upperBound) return null;

  const leftSubTree = reconstructBstFromRange(
    lowerBound,
    rootNodeValue,
    preOrderTraversalValues,
    currentSubTreeInfo
  );
  const rightSubTree = reconstructBstFromRange(
    rootNodeValue,
    upperBound,
    preOrderTraversalValues,
    currentSubTreeInfo
  );

  return new BST(rootNodeValue, leftSubTree, rightSubTree);
}
