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
// S: O(1)

// Worst
// T: O(n)
// S: O(1)
function Solution2(tree: BST, target: number) {
  return helper(tree, target, tree.value);
}

// iteration
function helper(tree: BST | null, target: number, closest: number) {
  let currentNode = tree;

  while (currentNode !== null) {
    if (currentNode.value === target) return closest;
    if (Math.abs(target - closest) > Math.abs(target - currentNode.value)) {
      closest = currentNode.value;
    }

    if (currentNode.value > target) {
      currentNode = currentNode.left;
    } else {
      currentNode = currentNode.right;
    }
  }

  return closest;
}
