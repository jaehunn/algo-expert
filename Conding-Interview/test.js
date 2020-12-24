class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    if (this.value > value) {
      // next
      if (this.left) return this.left.insert(value);

      this.left = new BST(value);
    } else {
      if (this.right) return this.right.insert(value);

      this.right = new BST(value);
    }

    return this;
  }

  contains(value) {
    if (this.value === value) return true;

    if (this.value > value) {
      // next
      if (this.left) return this.left.contains(value);

      return false;
    } else {
      if (this.right) return this.right.contains(value);

      return false;
    }
  }

  // wip
  remove(value, parent = null) {
    if (this.value > value) {
      if (this.left) this.left.remove(value, this);
    } else if (this.value < value) {
      if (this.right) this.right.remove(value, this);
    } else {
      // find (this.value === value)
      if (this.left && this.right) {
        // update
        this.value = this.right.getLeftLeaf();

        // remove
        this.right.remove(this.value, this);
      } else if (!parent) {
        // (this.left || this.right) && !parent(= root)
        if (this.left) {
          this.value = this.left.value;
          this.right = this.left.right;
          this.left = this.left.left;
        } else if (this.right) {
          this.value = this.right.value;
          this.left = this.right.left;
          this.right = this.right.right;
        } else {
          // NOOP
        }
      } else {
        // (this.left || this.right) && parent
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
    if (!this.left) return this.value; // no-children

    return this.left.getLeftLeaf();
  }
}
