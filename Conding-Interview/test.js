class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    let currentNode = this; // target

    while (currentNode) {
      if (value < currentNode.value) {
        if (!currentNode.left) {
          currentNode.left = new BST(value);

          return this;
        }

        // next
        currentNode = currentNode.left;
      } else {
        if (!currentNode.right) {
          currentNode.right = new BST(value);

          return this;
        }

        // next
        currentNode = currentNode.right;
      }
    }

    return this;
  }

  contains(value) {
    let currentNode = this;

    while (currentNode) {
      if (value === currentNode.value) return true;

      // next
      if (value < currentNode.value) currentNode = currentNode.left;
      else currentNode = currentNode.right;
    }

    return false;
  }

  remove(value, parentNode = null) {
    let currentNode = this;

    while (currentNode) {
      if (value < currentNode.value) {
        parentNode = currentNdde;

        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        parentNode = currentNode;

        currentNode = currentNode.right;
      } else {
        // value === currentNode.value
        if (currentNode.left && currentNode.right) {
          currentNode.value = currentNode.right.getLeftLeaf();

          currentNode.right.remove(currentNode.value, currentNode);
        } else if (!parentNode) {
          if (currentNode.left) {
            currentNode.value = currentNode.left.value;

            currentNode.right = currentNode.left.right;
            currentNode.left = currentNode.left.left;
          } else if (currentNode.right) {
            currentNode.value = currentNode.right.value;

            currentNode.left = currentNode.right.left;
            currentNode.right = currentNode.right.right;
          } else {
            // NOOP
          }
        } else {
          if (parentNode.left === currentNode) {
            parentNode.left = currentNode.left
              ? currentNode.left
              : currentNode.right;
          } else if (parentNode.right === currentNode) {
            parentNode.rigt = currentNode.left
              ? currentNode.left
              : currentNode.right;
          }
        }
      }
    }

    return this;
  }

  getLeftLeaf() {
    let currentNode = this;

    while (currentNode.left) {
      currentNode = currentNode.left;
    }

    return currentNode.value;
  }
}
