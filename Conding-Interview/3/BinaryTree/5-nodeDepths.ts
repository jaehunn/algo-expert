/**
 * The distance between a node in a Binary Tree and the tree's root is called the node's depth.
 *
 * Write a function that takes in a Binary Tree and returns the sum of its nodes' depths.
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

// O(n) / O(h)
function nodeDepth(root: BinaryTree) {
  let sumOfDepths = 0;

  const stack = [{ node: root, depth: 0 }];
  while (stack.length) {
    const { node, depth } = stack.pop();

    if (!node) continue;

    sumOfDepths += depth;
    stack.push({ node: node.left, depth: depth + 1 });
    stack.push({ node: node.right, depth: depth + 1 });
  }

  return sumOfDepths;
}

// // O(n) / O(h)
function _nodeDepth(root, depth = 0) {
  if (!root) return 0;

  return (
    depth + _nodeDepth(root.left, depth + 1) + _nodeDepth(root.right, depth + 1)
  );
}
