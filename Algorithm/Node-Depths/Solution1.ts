import BinaryTree from "./BinaryTree";

// Average(when the tree is balanced)
// T: O(n), n is the number of nodes in the Binary Tree.
// S: O(h), h is the height of the Binary Tree.
function Solution1(root: BinaryTree) {
  let sumOfDepths = 0;
  const stack: { node: BinaryTree | null; depth: number }[] = [
    { node: root, depth: 0 },
  ];

  while (stack.length > 0) {
    const { node, depth } = stack.pop()!; // !: non-null assertion

    if (node === null) continue;

    sumOfDepths += depth;
    stack.push({ node: node.left, depth: depth + 1 });
    stack.push({ node: node.right, depth: depth + 1 });
  }

  return sumOfDepths;
}
