// array in-place
class MinHeap {
  constructor(array) {
    this.heap = this.buildHeap(array);
  }

  // parent = [0 ... (endIndex - 1) / 2]
  // O(n) / O(1)
  buildHeap(array) {
    const rootIndex = ((array.length - 2) / 2) << 0;

    for (let parentIndex = rootIndex; parentIndex >= 0; parentIndex -= 1) {
      this.siftDown(parentIndex, array);
    }

    return array;
  }

  // O(log n) / O(1)
  siftDown(parentIndex, heap) {
    let leftChildIndex = parentIndex * 2 + 1;
    while (leftChildIndex < heap.length) {
      // child
      let rightChildIndex =
        parentIndex * 2 + 2 < heap.length ? parentIndex * 2 + 2 : -1;

      let childIndex;
      if (
        rightChildIndex !== -1 &&
        heap[leftChildIndex] < heap[rightChildIndex]
      )
        childIndex = rightChildIndex;
      else childIndex = leftChildIndex;

      // parent
      if (heap[childIndex] < heap[parentIndex]) {
        // swap
        [heap[childIndex], heap[parentIndex]] = [
          heap[parentIndex],
          heap[childIndex],
        ];

        // move
        parentIndex = childIndex;
        leftChildIndex = parentIndex * 2 + 1;
      } else return;
    }
  }

  // O(log n) / O(1)
  siftUp(childIndex, heap) {
    // parent
    let parentIndex = ((childIndex - 1) / 2) << 0;

    while (childIndex && heap[childIndex] < heap[parentIndex]) {
      // swap
      [heap[childIndex], heap[parentIndex]] = [
        heap[parentIndex],
        heap[childIndex],
      ];

      // move
      childIndex = parentIndex;
      parentIndex = ((childIndex - 1) / 2) << 0;
    }
  }

  peek() {
    return this.heap[0];
  }

  // O(log n) / O(1)
  remove() {
    const leaf = this.heap.pop();

    // swap(root, leaf)
    this.heap[0] = leaf;

    // heapifyDown()
    this.siftDown();

    return leaf;
  }

  // O(log n) / O(1)
  insert(node) {
    this.heap.push(node);

    // heapifyUp()
    this.siftUp();
  }
}
