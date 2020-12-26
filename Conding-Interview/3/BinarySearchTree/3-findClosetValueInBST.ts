/**
 * Write a function that takes in a Binary Search Tree (BST) and a target integer value and
 * returns the closest value to that target value contained in the BST.
 *
 * You can assume that there will only be one closest value.
 *
 * Each BST node has an integer value, a left child node, and a right child node.
 * A node is said to be a vaild BST node if and only if it satisfies the BST property:
 * its value is strictly greater than the values of every node to its left;
 * its value is less than or equal to the values of every node to its right;
 * and its children nodes are either valid BST nodes themselves or None / null.
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

// Average: O(log n) / O(log n)
// Worst: O(n) / O(n)
function findClosestValueInBst(
  tree: BST,
  target: number,
  closest: number = tree.value
) {
  if (!tree) return closest;
  if (tree.value === target) return tree.value; // Do not return 'closest'

  // update
  if (Math.abs(target - closest) > Math.abs(target - tree.value))
    closest = tree.value;

  // recur
  return target < tree.value
    ? findClosestValueInBst(tree.left, target, closest)
    : findClosestValueInBst(tree.right, target, closest);
}

// Average: O(log n) / O(1)
// Worst: O(n) / O(1)
function _findClosestValueInBst(
  tree: BST,
  target: number,
  closest: number = tree.value
) {
  let currentNode = tree;

  while (currentNode) {
    if (currentNode.value === target) return currentNode.value;

    // update
    if (Math.abs(target - closest) > Math.abs(target - currentNode.value))
      closest = currentNode.value;

    // next
    currentNode.value > target
      ? (currentNode = currentNode.left)
      : (currentNode = currentNode.right);
  }

  return closest;
}
