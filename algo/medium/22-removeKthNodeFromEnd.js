class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
// presumption: at least two nodes

// 연결리스트 특성상, 특정 i 노드에 접근하기 위해서는 i 번 움직여야한다. O(i)
// 즉, 이 문제에서 연결리스트의 길이를 구하기 위해서는 어쩔 수 없이 전체노드를 순회해야한다.

// 포인터 노드를 두개 생성하고 k 만큼의 Gap 을 유지한채 한 쪽 노드를 끝에 맞추면 끝에서부터 k 번째 노드에 접근할 수 있다.

// O(n) / O(1)
function removeKthNodeFromEnd(head, k) {
  let ptrA = head;
  let ptrB = head;

  // gap 을 벌린다.
  let diff = 0;
  while (diff < k) {
    ptrB = ptrB.next;

    diff += 1;
  }

  // first node
  if (ptrB === null) {
    head = head.next;

    return;
  }

  // 한 쪽 노드를 끝에 맞춘다.
  while (ptrB.next !== null) {
    ptrB = ptrB.next;
    ptrA = ptrA.next;
  }

  // 삭제할 노드와 연결을 끊는다.
  ptrA.next = ptrA.next.next;
}
