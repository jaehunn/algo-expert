/**
 * Write a DoublyLinkedList class that has a head and a tail, both of which point to either a linked list Node or None / null.
 * The class should support:
 *  - Setting the head and tail of the linked list.
 *  - Inserting nodes before and after other nodes as well as at given positions (the position of the head node is 1).
 *  - Removing given nodes and removing nodes with given values.
 *  - Searching for nodes with given values.
 *
 * Note that the setHead, setTail, insertBefore, insertAfter, insertAtPosition, and remove methods all take in actual Nodes as input parameters
 * -- not integers (except for insretAtPosition, which also takes in an integer representing the position);
 * this means that you don't need to create any new Nodes in these methods.
 *
 * The input nodes can be either stand-alone nodes or nodes that are already in the linked list.
 * If they're nodes that are already in the linked list, the methods will effectively be moving the nodes within the linked list.
 * You won't be told if the input nodes are already in the linked list,
 * so your code will have to defensively handle this scenario.
 *
 * If you're doing this problem in an untyped language like Python or JavaScript,
 * you may want to look at the various function signatures in a typed language like Java or TypeScript to get a better idea of what each input parameter is.
 *
 * Each Node has an integer value as well as a prev node and a next node, both of which can point to either another node or None / null.
 */

export class Node {
  value: number;
  prev: Node | null;
  next: Node | null;

  constructor(value: number) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

export class DoublyLinkedList {
  head: Node | null;
  tail: Node | null;

  constructor() {
    this.head = null;
    this.tail = null;
  }

  // O(1) / (1)
  setHead(node: Node) {
    if (!this.head) {
      this.head = node;
      this.tail = node;

      return;
    }

    // delegation
    this.insertBefore(this.head, node);
  }

  // O(1) / O(1)
  setTail(node: Node) {
    if (!this.tail) {
      this.setHead(node);

      return;
    }

    // delegation
    this.insertAfter(this.tail, node);
  }

  // O(1) / O(1)
  insertBefore(node: Node, nodeToInsert: Node) {
    // !single
    if (nodeToInsert === this.head && nodeToInsert === this.tail) return;

    // remove
    this.remove(nodeToInsert);

    // node: 6
    // nodeToInsert: 3
    // 4 1 2 3 5 6
    // -> 4 1 2 5 3 6

    // link
    // node.prev <- nodeToInsert -> node
    // node.prev -> nodeToInsert <- node

    // add
    nodeToInsert.prev = node.prev;
    nodeToInsert.next = node;
    if (node.prev) node.prev.next = nodeToInsert;
    else this.head = nodeToInsert; // node is head
    node.prev = nodeToInsert;
  }

  // O(1) / O(1)
  insertAfter(node: Node, nodeToInsert: Node) {
    // !single
    if (nodeToInsert == this.head && nodeToInsert === this.tail) return;

    this.remove(nodeToInsert);

    nodeToInsert.prev = node;
    nodeToInsert.next = node.next;
    if (node.next) node.next.prev = nodeToInsert;
    else this.tail = nodeToInsert;
    node.next = nodeToInsert;
  }

  // O(p) / O(1)
  insertAtPosition(position: number, nodeToInsert: Node) {
    if (position === 1) {
      this.setHead(nodeToInsert);

      return;
    }

    let node = this.head;
    let currentPosition = 1;

    // find
    while (node && currentPosition !== position) {
      node = node.next;

      currentPosition += 1;
    }

    if (node) this.insertBefore(node, nodeToInsert);
    else this.setTail(nodeToInsert);
  }

  // O(n) / O(1)
  removeNodesWithValue(value: number) {
    let node = this.head;

    while (node) {
      const nodeToRemove = node;

      node = node.next;

      if (nodeToRemove.value === value) this.remove(nodeToRemove);
    }
  }

  // O(1) / O(1)
  remove(node: Node) {
    if (node === this.head) this.head = this.head.next;
    if (node === this.tail) this.tail = this.tail.prev;

    this.removeNodeBindings(node);
  }

  // O(n) / O(1)
  containsNodeWithValue(value: number) {
    let node = this.head;

    // find
    while (node && node.value !== value) node = node.next;

    return !!node;
  }

  removeNodeBindings(node: Node) {
    if (node.prev) node.prev.next = node.next;
    if (node.next) node.next.prev = node.prev;

    node.prev = null;
    node.next = null;
  }
}
