class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function findClosestValueInBst(tree, target) {
  let closest = Infinity;

  helper(tree);

  return closest;

  function helper(node) {
    if (node === null) return;
    if (Math.abs(target - closest) > Math.abs(target - node.value)) closest = node.value;

    return target < node.value ? helper(node.left, target) : helper(node.right, target);
  }
}

// 1. 결과 렉시컬로 관리
// 2. 최소 차이를 구하므로, closest 를 큰 값으로 초기화
// 3. Math.min 으로 지속적으로 결과 업데이트 불가능 (차이를 구하는 로직은 부수적인 과정, 최소 차이를 보인 closest 를 반환)

// Average: O(log n) / O(log n)
// Worst: O(n) / O(n)
function _findClosestValueInBst(tree, target) {
  return _findClosestValueInBstHelper(tree, target, tree.value);
}

function _findClosestValueInBstHelper(tree, target, closest) {
  if (tree === null) return closest;
  if (Math.abs(target - closest) > Math.abs(target - tree.value)) {
    closest = tree.value;
  }

  if (target < tree.value) {
    return _findClosestValueInBstHelper(tree.left, target, closest);
  } else if (target > tree.value) {
    return _findClosestValueInBstHelper(tree.right, target, closest);
  } else return closest;
}

// Average: O(log n) / O(1)
// Worst: O(n) / O(1)
function __findClosestValueInBst(tree, target) {
  return __findClosestValueInBstHelper(tree, target, tree.value);
}

function __findClosestValueInBstHelper(tree, target, closest) {
  let currentNode = tree;

  while (currentNode !== null) {
    if (Math.abs(target - closest) > Math.abs(target - currentNode.value)) {
      closest = currentNode.value;
    }

    if (target < currentNode.value) {
      currentNode = currentNode.left;
    } else if (target > currentNode.value) {
      currentNode = currentNode.right;
    } else break;
  }

  return closest;
}
