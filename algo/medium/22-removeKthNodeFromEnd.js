class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// O(n) / O(1)
function removeKthNodeFromEnd(head, k) {
  let counter = 1;
  let first = head;
  let second = head;

  while (counter <= k) {
    second = second.next;
    counter += 1;
  }

  if (second === null) {
    head = head.next;

    return;
  }

  while (second.next !== null) {
    second = second.next;
    first = first.next;
  }

  first.next = first.next.next;
}
