export class BT {
  value: number;
  left: BT | null;
  right: BT | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// queue 대신 recursion 을 이용하기

export function Solution2(tree: BT | null) {
  if (tree === null) return;

  // swap
  [tree.left, tree.right] = [tree.right, tree.left];
  Solution2(tree.left);
  Solution2(tree.right);
}
