// array in-place
class MinHeap {
  constructor(array) {
    this.heap = this.buildHeap(array);
  }

  // wip
  buildHeap(array) {}

  siftDown() {}

  siftUp() {}

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
