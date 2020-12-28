/**
 * Write a function that takes in the heada of a Singly Linked List and an integer k and removes the kth node from the end of the list.
 *
 * The removal should be done in place, meaning that the original data structure should be mutated (no new structure should be created).
 *
 * Futhermore, the input head of the linked list should remain the head of the linked list after the removal is done,
 * even if the head is the node that's supposed to be removed.
 * In other words, if the head is the node that's supposed to be removed, your function should simply mutate its value and next pointer.
 *
 * Note that your function doesn't need to return anything.
 *
 * You can assume that the input Linked List will always have at least two nodes and, more specifically, at least k nodes.
 *
 * Each LinkedList node has an integer value as well as a next node pointing to the next node in the list or to None / null if it's the tail of the list.
 */

class LinkedList {
  value: number;
  next: LinkedList | null;

  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}

// O(n) / O(1)
function removeKthNodeFromEnd(head: LinkedList, k: number) {
  let ptrA = head;
  let ptrB = head;

  // gap
  let diff = 0;
  while (diff < k) {
    ptrB = ptrB.next;

    diff += 1;
  }

  // first node
  if (!ptrB) {
    head = head.next;

    return;
  }

  // to end
  while (ptrB.next) {
    ptrB = ptrB.next;
    ptrA = ptrA.next;
  }

  // 삭제할 노드와 연결을 끊는다.
  ptrA.next = ptrA.next.next;
}
