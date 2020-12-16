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

// 직선경로거나 삼각형경로거나

// wip
// O(n) / O(log n)
function maxPathSum(tree: BinaryTree) {
  // ...
}
