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

  // 자신을 가리킬 포인터가 필요하다.

  // Average: O(log n) / O(log n)
  // Worst: O(n) / O(n)
  remove(value, parent = null) {
    // find
    if (value < this.value) {
      if (this.left) this.left.remove(value, this);
    } else if (value > this.value) {
      if (this.right) this.right.remove(value, this);

      // find: this.value === value
    } else {
      // swap(this, getLeftLeaf) -> delete(getLeftLeaf)
      if (this.left && this.right) {
        this.value = this.right.getLeftLeaf();

        this.right.remove(this.value, this);
      } else if (!parent) {
        // left || right: unbalanced, root node
        if (this.left) {
          this.value = this.left.value;
          this.right = this.left.right;
          this.left = this.left.left;
        } else if (this.right) {
          this.value = this.right.value;
          this.left = this.right.left;
          this.right = this.right.right;
        }
        // single node: NOOP
      } else {
        // unbalanced, etc or leaf
        if (parent.left === this) {
          parent.left = this.left ? this.left : this.right;
        } else if (parent.right === this) {
          parent.right = this.left ? this.left : this.right;
        }
      }
    }

    return this;
  }

  getLeftLeaf() {
    if (!this.left) return this.value;

    return this.left.getLeftLeaf();
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

  // Average: O(log n) / O(1)
  // Worst: O(n) / O(1)
  insert(value) {
    let currentNode = this;

    while (currentNode) {
      if (value < currentNode.value) {
        if (!currentNode.left) {
          currentNode.left = new BST(value);

          return this;
        }

        currentNode = currentNode.left;
      } else {
        // if these nodes value be same, then add to right child
        if (!currentNode.right) {
          currentNode.right = new BST(value);

          return this;
        }
        currentNode = currentNode.right;
      }
    }

    return this;
  }

  // Average: O(log n) / O(1)
  // Worst: O(n) / O(1)
  contains(value) {
    let currentNode = this;

    while (currentNode) {
      if (value === currentNode.value) return true;

      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else currentNode = currentNode.right;
    }

    return false;
  }

  remove(value, parentNode = null) {
    let currentNode = this;

    while (currentNode) {
      if (value < currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else if (value > currnetNode.value) {
        parentNode = currentNode;
        currentNode = currentnode.right;
      }
    }
  }

  getLeftLeaf() {
    if (!this.left) return this.value;

    return this.left.getLeftLeaf();
  }
}
