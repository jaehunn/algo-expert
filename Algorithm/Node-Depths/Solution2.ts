import BinaryTree from "./BinaryTree";

function Solution2(root: BinaryTree) {
  return helper(root);
}

function helper(node: BinaryTree | null, depth: number = 0): number {
  if (!node) return 0;

  return depth + helper(node.left, depth + 1) + helper(node.right, depth + 1);
}
