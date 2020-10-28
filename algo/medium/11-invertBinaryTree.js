function invertBinaryTree(tree) {
  if (!tree) return;

  invertBinaryTree(tree.left);
  invertBinaryTree(tree.right);

  let temp = tree.right;
  tree.right = tree.left;
  tree.left = temp;
}

function _invertBinaryTree(tree) {
  if (!tree) return null;
  if (!tree.left && !tree.right) return tree;

  let left = _invertBinaryTree(tree.left);
  let right = _invertBinaryTree(tree.right);

  tree.left = right;
  tree.right = left;

  return tree;
}

// null 과 특정 값을 가지는 노드도 스왑해야한다. (문제 잘 읽을 것)
// 재귀를 통해 값을 이끌어낼 때 반환파트를 잘 짜야한다. (재귀 플로우 파악 제대로할 것)

// BFS
// O(n) / O(n)
function __invertBinaryTree(tree) {
  const queue = [tree];

  while (queue.length) {
    const current = queue.shift();

    if (current === null) continue;

    swapLeftAndRight(current);

    queue.push(current.left);
    queue.push(current.right);
  }
}

// 재귀에만 치우치지말고 DFS BFS 를 고려하기

// O(n) / O(d)
function ___invertBinaryTree(tree) {
  if (tree === null) return;

  swapLeftAndRight(tree);
  invertBinaryTree(tree.left);
  invertBinaryTree(tree.right);
}

function swapLeftAndRight(tree) {
  const left = tree.left;
  tree.left = tree.right;
  tree.right = left;

  // Enable: [tree.left, tree.right] = [tree.right, tree.left];
}

// 재귀를 일단 걸고 로직을 생각하는 고정관념 탈피하기, 추상화에 능수능란해지기

// 레퍼런스의 부수효과는 유용하지만 꼭 반환해야하는 상황(외부함수(재귀)에서 최종 결과를 메인함수에 반환해야하는 상황)을 생각하기

class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
