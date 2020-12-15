/**
 * Write a function that takes in a Binary Tree and returns its max path sum.
 *
 * A path is a collection of connected nodes in a tree, where no node is connected to more that two other nodes;
 * a path sum is the sum of the values of the nodes in a particular path.
 *
 * Each BinaryTree node has an integer value, a left child node, and a right child node.
 * Children nodes can either be BinaryTree nodes themselves or None / null.
 */

class BinaryTree {
  value: number;
  left: BinaryTree | null;
  right: BinaryTree | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// O(n) / O(log n)
function maxPathSum(tree: BinaryTree) {
  return tree.value + helper(tree.left, 0) + helper(tree.right, 0);
}

function helper(tree: BinaryTree | null, sum: number) {
  if (!tree) return sum;

  return Math.max(
    helper(tree.left, sum + tree.value),
    helper(tree.right, sum + tree.value)
  );
}
