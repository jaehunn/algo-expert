// recursive approach
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  // Average: O(log n) / O(log n)
  // Worst: O(n) / O(n)
  insert(value) {
    if (value < this.value) {
      if (this.left) return this.left.insert(value);
      this.left = new BST(value);
    } else {
      if (this.right) return this.right.insert(value);
      this.right = new BST(value);
    }

    return this;
  }

  // else 대신 guard 절 적극활용
  // 재귀함수의 반환값을 원함수로 끌어와야 정상적인 결과도출 가능

  // Average: O(log n) / O(log n)
  // Worst: O(n) / O(n)
  contains(value) {
    if (value === this.value) return true;

    if (value < this.value) {
      if (!this.left) return false;

      return this.left.contains(value);
    } else {
      if (!this.right) return false;

      return this.right.contains(value);
    }
  }

  // remove() 로직 정립
  // 1. 삭제할 노드 찾기
  // 2. WIP...

  // Average: O(log n) / O(log n)
  // Worst: O(n) / O(n)
  remove(value, parent = null) {
    if (value < this.value) {
      if (this.left) this.left.remove(value, this);
    } else if (value > this.value) {
      if (this.right) this.right.remove(value, this);
    } else {
      if (this.left && this.right) {
        this.value = this.right.getMinValue();
        this.right.remove(this.value, this);
      } else if (!parent) {
        // root
        if (this.left) {
          this.value = this.left.value;
          this.right = this.left.right;
          this.left = this.left.left;
        } else if (this.right) {
          this.value = this.right.value;
          this.left = this.right.left;
          this.right = this.right.right;
        }
      } else if (parent.left === this) {
        parent.left = this.left ? this.left : this.right;
      } else if (parent.right === this) {
        parent.right = this.left ? this.left : this.right;
      }
    }

    return this;
  }

  getMinValue() {
    if (!this.left) return this.value;

    return this.left.getMinValue();
  }
}

// WIP
// iteration approach
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
