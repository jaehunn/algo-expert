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

export class Solution1 {
  constructor() {
    //
  }

  // T: O(n)
  // S: O(n)

  // left -> node -> right
  inOrder(tree: BST | null, items: number[]) {
    if (!tree) return;

    this.inOrder(tree.left, items);
    items.push(tree.value);
    this.inOrder(tree.right, items);

    return items;
  }

  // T: O(n)
  // S: O(n)
  // node -> left -> right
  preOrder(tree: BST | null, items: number[]) {
    if (!tree) return;

    items.push(tree.value);
    this.preOrder(tree.left, items);
    this.preOrder(tree.right, items);

    return items;
  }

  // T: O(n)
  // S: O(n)

  // left -> right -> node
  postOrder(tree: BST | null, items: number[]) {
    if (!tree) return;

    this.postOrder(tree.left, items);
    this.postOrder(tree.right, items);
    items.push(tree.value);

    return items;
  }
}
