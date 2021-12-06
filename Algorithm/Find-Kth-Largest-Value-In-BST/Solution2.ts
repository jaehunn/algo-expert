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

// BST 자체에 대한 정보를 담는 클래스를 정의한다.
export class TreeInfo {
  numberOfNodesVisited: number;
  latestVisitedNodeValue: number;

  constructor(numberOfNodesVisited: number, latestVisitedNodeValue: number) {
    this.numberOfNodesVisited = numberOfNodesVisited;
    this.latestVisitedNodeValue = latestVisitedNodeValue;
  }
}

// T: O(h + k), h is the hieght of the tree, k is the input param
// S: O(h)
export function Solution2(tree: BST, k: number) {
  const treeInfo = new TreeInfo(0, -1);

  reverseInOrderTraverse(tree, k, treeInfo);

  return treeInfo.latestVisitedNodeValue;
}

function reverseInOrderTraverse(
  node: BST | null,
  k: number,
  treeInfo: TreeInfo
) {
  if (!node) return;
  if (treeInfo.numberOfNodesVisited >= k) return;

  // desc 하려면, 재귀적으로 left 대신 right 를 넘기면 된다.
  // right -> node -> left 식
  reverseInOrderTraverse(node.right, k, treeInfo);

  // >= k 일때 가드처리했는데 왜 또 이런식으로 처리할까? (빼면 테스트 실패)
  // 재귀마다 k 를 증가, 하나의 함수에 재귀가 두번 호출된다 따라서 k의 증가를 가드절 하나로 보장할 수 없다.
  if (treeInfo.numberOfNodesVisited < k) {
    // k번째를 찾으면 즉시 리턴한다.
    treeInfo.numberOfNodesVisited += 1;
    treeInfo.latestVisitedNodeValue = node.value;
    reverseInOrderTraverse(node.left, k, treeInfo);
  }
}
