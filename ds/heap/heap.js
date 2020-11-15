class MaxHeap extends Heap {
  pairIsInCorrectOrder(first, second) {
    return first >= second;
  }
}

class MinHeap extends Heap {
  pairIsInCorrectOrder(first, second) {
    return first <= second;
  }
}

class Heap {
  constructor() {
    if (new.target === Heap) {
      throw new TypeError(`Cannot construct Heap instance directly`);
    }

    this.heapContainer = [];
  }

  // Left Child
  getLeftChildIndex(parentIndex) {
    return 2 * parentIndex + 1;
  }

  hasLeftChild(parentIndex) {
    return this.getLeftChildIndex(parentIndex) < this.heapContainer.length;
  }

  getLeftChild(parentIndex) {
    return this.heapContainer[this.getLeftChildIndex(parentIndex)];
  }

  // Right Child
  getRightChildIndex(parent) {
    return 2 * parent + 2;
  }

  hasRightChild(parentIndex) {
    return this.getRightChildIndex(parentIndex) < this.heapContainer.length;
  }

  getRightChild(parentIndex) {
    return this.heapContainer[this.getRightChildIndex(parentIndex)];
  }

  // Parent Child
  getParentIndex(childIndex) {
    return Math.floor((childIndex - 1) / 2);
  }

  hasParent(childIndex) {
    return this.getParentIndex(childIndex) >= 0;
  }

  parent(childIndex) {
    return this.heapContainer[this.getParentIndex(childIndex)];
  }

  heapifyUp(startIndex = this.heapContainer.length - 1) {
    // swap condition
    // Max heap: NOT (parent > child)
    // Min heap: NOT (parent < child)
    while (
      this.hasParent(startIndex) &&
      !this.pairIsInCorrectOrder(
        this.parent(currentIndex),
        this.heapContainer[startIndex]
      )
    ) {
      // swap
      [
        this.heapContainer[startIndex],
        this.heapContainer[this.getParentIndex(startIndex)],
      ] = [
        this.heapContainer[this.getParentIndex(startIndex)],
        this.heapContainer[startIndex],
      ];

      // move
      startIndex = this.getParentIndex(startIndex);
    }
  }

  heapifyDown(startIndex = 0) {
    let childIndex = null;
    while (this.hasLeftChild(startIndex)) {
      // get child
      if (
        this.hasRightChild(startIndex) &&
        this.pairIsInCorrectOrder(
          this.rightChild(startIndex),
          this.leftChild(startIndex)
        )
      ) {
        childIndex = this.getRightChildIndex(startIndex);
      } else {
        childIndex = this.getLeftChildIndex(startIndex);
      }

      // guard condition
      if (
        this.pairIsInCorrectOrder(
          this.heapContainer[startIndex],
          this.heapContainer[childIndex]
        )
      ) {
        break;
      }

      // swap
      [this.heapContainer[startIndex], this.heapContainer[childIndex]] = [
        this.heapContainer[childIndex],
        this.heapContainer[startIndex],
      ];

      // move
      startIndex = childIndex;
    }
  }

  extract() {
    if (this.isEmpty() || this.heapContainer.length === 1) return null;

    const rootNode = this.heapContainer[0];

    // new root <- leaf
    this.heapContainer[0] = this.heapContainer.pop();

    // sort
    this.heapifyDown();

    return rootNode;
  }

  add(node) {
    this.heapContainer.push(node);

    // sort
    this.heapifyUp();

    return this;
  }

  // wip
  remove(node) {}

  find(node) {
    const indices = [];

    for (let index = 0; index < this.heapContainer.length; i += 1) {
      if (node === this.heapContainer[index]) indices.push(index);
    }

    return indices;
  }

  peek() {
    if (this.heapContainer.length === 0) return null;

    return this.heapContainer[0];
  }

  isEmpty() {
    return !this.heapContainer.length;
  }

  toString() {
    return this.heapContainer.toString();
  }

  // Max, Min -> Override
  pairIsInCorrectOrder(first, second) {
    throw new Error(`You have to implement heap pair comparision method`);
  }
}
