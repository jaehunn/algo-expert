/**
 * Write BST class for a Binary Search Tree. The class should support:
 *  - Inserting values with the insert method.
 *  - Removing values with the remove method; this method should only remove the first instance of a given value.
 *  - Searching for values with the contains method.
 *
 * Note that you can't remove values from a single-node tree.
 * In other words, calling the remove method on a single-node tree should simply not do anything.
 *
 * Each BST node has an integer value, a left child node, and a right child node.
 * A node is said to be a valid BST node if and only if it satisfies the BST property:
 * its value is strictly greater than the values of every node to its left;
 * its value is less than or equal to the values of every node to its right;
 * and its children nodes are either valid BST nodes themselves or None / null.
 */

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

  // Average: O(log n) / O(log n)
  // Worst: O(n) / O(n)
  remove(value, parent = null) {
    // find
    if (value < this.value) {
      if (this.left) this.left.remove(value, this);
    } else if (value > this.value) {
      if (this.right) this.right.remove(value, this);

      // this.value === value
    } else {
      if (this.left && this.right) {
        this.value = this.right.getLeftLeaf();

        this.right.remove(this.value, this);
      } else if (!parent) {
        // unbalanced tree + root
        if (this.left) {
          this.value = this.left.value;
          this.right = this.left.right;
          this.left = this.left.left;
        } else if (this.right) {
          this.value = this.right.value;
          this.left = this.right.left;
          this.right = this.right.right;
        }
        // no children(single node): NOOP
      } else {
        // unbalanced tree + no root
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

  // Average: O(log n) / O(1)
  // Worst: O(n) / O(1)
  remove(value, parentNode = null) {
    let currentNode = this;

    while (currentNode) {
      if (value < currentNode.value) {
        parentNode = currentNode;

        currentNode = currentNode.left;
      } else if (value > currnetNode.value) {
        parentNode = currentNode;

        currentNode = currentNode.right;
      } else {
        // 1. both
        // 2. one (root, no-root)
        if (currentNode.left && currentNode.right) {
          currentNode.value = currentNode.right.getMinValue();

          currentNode.right.remove(currentNode.value, currentNode);
        } else if (!parentNode) {
          if (currentNode.left) {
            currentNode.value = currentNode.left.value;

            // currentNode.left 를 먼저 설정하면 부수효과가 일어난다
            currentNode.right = currentNode.left.right;
            currentNode.left = currentNode.left.left;
          } else if (currentNode.right) {
            currentNode.value = currentNode.right.value;

            currentNode.left = currentNode.right.left;
            currentNode.right = currentNode.right.right;
          }

          // single node: NOOP
        } else if (parentNode.left === currentNode) {
          parentNode.left = currentNode.left
            ? currentNode.left
            : currentNode.right;
        } else if (parentNode.right === currentNode) {
          parentNode.right = currentNode.left
            ? currentNode.left
            : currentNode.right;
        }
      }
    }

    return this;
  }

  getMinValue() {
    let currentNode = this;

    while (currentNode.left) {
      currentNode = currentNode.left;
    }

    return currentNode.value;
  }
}
