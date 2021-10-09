import BinaryTree from "./BinaryTree";

// T: O(n)
// S: O(n) - where n is the number of nodes in the Binary Tree
function Solution1(root: BinaryTree) {
  const sums: number[] = [];
  helper(root, sums);

  return sums;
}

function helper(
  node: BinaryTree | null,
  sums: number[],
  runningSum: number = 0
) {
  if (!node) return;
  if (!node.left && !node.right) {
    sums.push(runningSum + node.value);

    return;
  }

  helper(node?.left, sums, runningSum + node.value);
  helper(node?.right, sums, runningSum + node.value);
}
