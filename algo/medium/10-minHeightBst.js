// 1 2 5 7 (10) 13 14 15 22
// 1 (2) 5 7 | 13 (14) 15 22
// 1 | (5) 7 | 13 | (15) 22
// min-height
function minHeightBst(array) {
  if (!array.length) return null;

  let mid = (array.length / 2) << 0;
  let bst = new BST(array[mid]);

  bst.left = minHeightBst(array.slice(0, mid));
  bst.right = minHeightBst(array.slice(mid + 1, array.length));

  return bst;
}

// other WIP

class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    if (value < this.value) {
      if (this.left === null) {
        this.left = new BST(value);
      } else {
        this.left.insert(value);
      }
    } else {
      if (this.right === null) {
        this.right = new BST(value);
      } else {
        this.right.insert(value);
      }
    }
  }
}
