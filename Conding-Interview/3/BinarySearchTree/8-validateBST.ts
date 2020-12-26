/**
 * Write a function that takes in a potentially invalid Binary Search Tree (BST) and returns a boolean representing whether the BST is valid.
 *
 * Each BST node has an integer value, a left child node, and a right child node.
 * A node is said to be a valid BST node if and only if it satisfies the BST property:
 * its value is strictly greater than the values of every node to its left;
 * its value is less than or equal to the values of every node to its right;
 * and its children nodes are either valid BST nodes themselves or None / null.
 *
 * A BST is valid if and only if all of its nodes are valid BST nodes.
 */

class BST {
  value: number;
  left: BST | null;
  right: BST | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// 직속 부모노드만으로 타당성을 검증하면 안된다.

// O(n) / O(d)
function validateBst(tree: BST) {
  return validateBstHelper(tree, -Infinity, Infinity);
}

function validateBstHelper(
  tree: BST | null,
  minValue: number,
  maxValue: number
) {
  if (!tree) return true; // success
  if (tree.value < minValue || tree.value >= maxValue) return false; // error case

  // next
  return (
    validateBstHelper(tree.left, minValue, tree.value) &&
    validateBstHelper(tree.right, tree.value, maxValue)
  );
}
