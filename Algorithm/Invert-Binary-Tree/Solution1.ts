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

// idea: 아래로 내려가면서 좌우를 계속 바꿔주면된다.

// T: O(n)
// S: O(n)
export function Solution1(tree: BT) {
  const q: Array<BT | null> = [tree];
  while (q.length) {
    const currentTree = q.shift(); // dequeue

    if (currentTree === null) continue;

    // swap
    [tree.left, tree.right] = [tree.right, tree.left];

    // enqueue
    q.push(currentTree.left);
    q.push(currentTree.right);
  }
}
