/**
 * Write a function that takes in a Binary Tree and inverts it.
 * In other words, the function should swap every left node in the tree for its corresponding right node.
 *
 * Each BinaryTree node has an integer value, a left child node, and a right child node.
 * Children nodes can either be BinaryTree nodes themselves or None / null
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

// BFS
// O(n) / O(n)
function invertBinaryTree(tree: BinaryTree) {
  const queue = [tree];

  while (queue.length) {
    const current = queue.shift();

    if (!current) continue;

    [current.left, current.right] = [current.right, current.left];

    queue.push(current.left);
    queue.push(current.right);
  }
}

// O(n) / O(d)
function _invertBinaryTree(tree) {
  if (!tree) return;

  [tree.left, tree.right] = [tree.right, tree.left];

  _invertBinaryTree(tree.left);
  _invertBinaryTree(tree.right);
}
