// iterate 로 풀기
export default class BST {
  value: number;
  left: BST | null;
  right: BST | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  // Average
  // T: O(log(n))
  // S: O(1)

  // Worst
  // T: O(n)
  // S: O(1)
  insert(value: number): BST {
    let currentNode: BST = this;
    while (true) {
      if (value < currentNode.value) {
        if (currentNode.left === null) {
          // new node
          currentNode.left = new BST(value);

          break;
        }

        // next
        currentNode = currentNode.left;
      } else {
        if (currentNode.right === null) {
          currentNode.right = new BST(value);

          break;
        }

        currentNode = currentNode.right;
      }
    }

    // break 대신 바로 리턴하는 형식을 쓰면 출구가 나뉘어서 보기가 힘들 수도 있을듯하다.
    return this;
  }

  // Average
  // T: O(log(n))
  // S: O(1)

  // Worst
  // T: O(n)
  // S: O(1)
  contains(value: number) {
    let currentNode: BST | null = this;
    while (currentNode) {
      if (value === currentNode.value) return true;

      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }

    return false;
  }

  // Average
  // T: O(log(n))
  // S: O(1)

  // Worst
  // T: O(n)
  // S: O(1)
  remove(value: number, parentNode: BST | null = null): BST {
    let currentNode: BST | null = this;
    while (currentNode) {
      if (value === currentNode.value) {
        if (currentNode.left && currentNode.right) {
          // left 와 right 가 둘 다 있으면, 삭제할 노드를 대체할 노드는 right의 제일 작은 노드를 선정해야한다.
          currentNode.value = currentNode.right.getMinValue();

          // 대체된 노드는 지워준다.
          currentNode.right.remove(currentNode.value, currentNode);
        } else if (parentNode === null) {
          // root
          if (currentNode.left) {
            currentNode.value = currentNode.left.value;

            // current.left 를 먼저 설정하면 right 달 때, current.left 의 source 를 잃어버린다.
            currentNode.right = currentNode.left.right;
            currentNode.left = currentNode.left.left;
          } else if (currentNode.right) {
            currentNode.value = currentNode.right.value;
            currentNode.left = currentNode.right.left;
            currentNode.right = currentNode.right.right;
          } else {
            // single node(=root node)
          }
        } else {
          if (parentNode.left === currentNode) {
            // 항상 순서는 삭제된 노드의 left node 를 체크한다. (bst 특성상 제일 작다.)
            parentNode.left = currentNode.left
              ? currentNode.left
              : currentNode.right;
          } else if (parentNode.right === currentNode) {
            parentNode.right = currentNode.left
              ? currentNode.left
              : currentNode.right;
          }

          break;
        }
      }

      if (value < currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else {
        parentNode = currentNode;
        currentNode = currentNode.right;
      }
    }

    return this;
  }

  getMinValue() {
    // 트리의 제일 최소값 노드는 좌측 리프노드다.
    let currentNode: BST = this;
    if (currentNode.left) {
      currentNode = currentNode.left;
    }

    return currentNode.value;
  }
}
