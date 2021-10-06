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

// Average
// T: O(log(n))
// S: O(log(n))

// Worst
// T: O(n)
// S: O(n)
function Solution1(tree: BST, target: number) {
  return helper(tree, target, tree.value);
}

// recursive
function helper(tree: BST | null, target: number, closest: number) {
  if (tree === null) return closest;
  if (tree.value === target) return closest;
  if (Math.abs(target - closest) > Math.abs(target - tree.value)) {
    closest = tree.value;
  }

  if (target < tree.value) {
    helper(tree.left, target, closest);
  } else {
    helper(tree.right, target, closest);
  }
}
