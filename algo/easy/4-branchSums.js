class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function branchSums(root) {
  let result = [];
  let sum = 0;

  helper(root);

  return result;

  function helper(node) {
    if (!node) return;

    sum += node.value;
    helper(node.left);
    helper(node.right);
    if (!node.left && !node.right) result.push(sum);
    sum -= node.value;
  }
}

// O(n) / O(n)
function _branchSums(root) {
  const sums = [];
  calculateBrachSums(root, 0, sums);

  return sums;
}

function _caculateBrachSums(node, runningSum, sums) {
  if (!node) return;

  const newRunningSum = runningSum + node.value;
  if (!node.left && !node.right) {
    sums.push(newRunningSum);
    return;
  }

  _calculateBrachSums(node.left, newRunningSum, sums);
  _calculateBrachSums(node.right, newRunningSum, sums);
}
