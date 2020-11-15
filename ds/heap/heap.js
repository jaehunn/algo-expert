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

  heapifyUp() {}

  heapifyDown() {}

  extract() {}

  add() {}

  remove() {}

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
