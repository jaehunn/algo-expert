export class LinkedList {
  value: number;
  next: LinkedList | null;

  constructor(value: number) {
    this.value = value;
    this.next = null;
  }

  add(value: number) {
    const node = new LinkedList(value);

    let currentNode: LinkedList = this;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }

    currentNode.next = node;
  }
}

// T: O(n), n is the number of nodes
// S: O(1)
export function Solution1(linkedList: LinkedList) {
  // unique node
  let currentNode: LinkedList | null = linkedList;
  while (currentNode) {
    let nextDistinctNode: LinkedList | null = currentNode.next;

    while (nextDistinctNode && nextDistinctNode.value === currentNode.value) {
      nextDistinctNode = nextDistinctNode.next;
    }

    // link node
    currentNode.next = nextDistinctNode;

    // next node
    currentNode = nextDistinctNode;
  }

  return linkedList;
}
