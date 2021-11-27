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
  // S: O(log(n))

  // Worst
  // T: O(n)
  // S: O(n)
  insert(value: number): BST {
    if (value < this.value) {
      if (this.left === null) {
        // new node
        this.left = new BST(value);
      } else {
        // recursive, 왼쪽 트리에서 다시
        this.left.insert(value);
      }
    } else {
      if (this.right === null) {
        this.right = new BST(value);
      } else {
        this.right.insert(value);
      }
    }

    return this;
  }

  // Average
  // T: O(log(n))
  // S: O(log(n))

  // Worst
  // T: O(n)
  // S: O(n)
  contains(value: number) {
    if (value === this.value) return true;

    if (value < this.value) {
      if (this.left === null) {
        return false;
      }

      return this.left.contains(value);
    } else {
      if (this.right === null) {
        return false;
      }

      return this.right.contains(value);
    }
  }

  // Average
  // T: O(log(n))
  // S: O(log(n))

  // Worst
  // T: O(n)
  // S: O(n)
  remove(value: number, parent: BST | null = null) {
    if (value === this.value) {
      if (this.left && this.right) {
        this.value = this.right.getMinValue();

        this.right.remove(this.value, this);
      } else if (parent === null) {
        // root
        if (this.left) {
          // 삭제된 노드의 왼쪽노드가 삭제된 노드의 자리를 차지하고
          // 가지고 있던 자식들을 연결한다.
          this.value = this.left.value;
          this.right = this.left.right;
          this.left = this.left.left;
        } else if (this.right) {
          this.value = this.right.value;
          this.left = this.right.left;
          this.right = this.right.right;
        } else {
          // single node(= only one root node)
        }
      } else {
        // root 가 삭재되는 형태가 아니면, 자신(삭제된 노드)을 참조하는 경로를 추가로 가져야하므로, parent 가 필요하다.
        if (parent.left === this) {
          parent.left = this.left ? this.left : this.right;
        } else if (parent.right === this) {
          parent.right = this.left ? this.left : this.right;
        }
      }
    }

    // recursive, parent 를 같이 넘겨야한다.
    if (value < this.value) {
      if (this.left) {
        this.left.remove(value, this);
      }
    } else {
      if (this.right) {
        this.right.remove(value, this);
      }
    }

    return this;
  }

  getMinValue() {
    // left 부터 채워지는 특성때문에 left 만 검사하고도 child 가 없음을 알 수 있다.
    if (this.left === null) {
      return this.value;
    }

    return this.left.getMinValue();
  }
}
