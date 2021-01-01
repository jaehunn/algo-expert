/**
 * Implement a MinHeap class that supports:
 *  - Building a Min Heap from an input array of integers.
 *  - Inserting integers in the heap
 *  - Removing the heap's minimum / root value.
 *  - Peeking at the heap's minimum / root value.
 *  - Sifting integers up and down the heap, which is to be used when inserting and removing values.
 *
 *  Note that the heap should be represented in the form of an array
 */

class MinHeap {
  heap: number[];

  constructor(array: number[]) {
    this.heap = this.buildHeap(array);
  }

  // O(n) / O(1)
  buildHeap(array: number[]) {
    let lastIndex = array.length - 1;
    let parentIndex = Math.floor((lastIndex - 1) / 2);

    for (let currentIndex = parentIndex; currentIndex >= 0; currentIndex -= 1) {
      this.siftDown(currentIndex, array);
    }

    return array;
  }

  // O(log n) / O(1)
  siftDown(currentIndex: number, heap: number[]) {
    let leftChildIndex = currentIndex * 2 + 1;
    while (leftChildIndex <= heap.length - 1) {
      let rightChildIndex =
        currentIndex * 2 + 2 > heap.length - 1 ? -1 : currentIndex * 2 + 2;

      // left, right
      let childIndex =
        ~rightChildIndex && heap[rightChildIndex] < heap[leftChildIndex]
          ? rightChildIndex
          : leftChildIndex;

      // down
      if (heap[childIndex] < heap[currentIndex]) {
        [heap[childIndex], heap[currentIndex]] = [
          heap[currentIndex],
          heap[childIndex],
        ];
      } else return; // neither
    }
  }

  // O(log n) / O(1)
  siftUp(currentIndex: number, heap: number[]) {
    let parentIndex = Math.floor((currentIndex - 1) / 2);
    while (currentIndex && heap[currentIndex] < heap[parentIndex]) {
      [this.heap[currentIndex], this.heap[parentIndex]] = [
        this.heap[parentIndex],
        this.heap[currentIndex],
      ];

      // move
      currentIndex = parentIndex;
      parentIndex = Math.floor((currentIndex - 1) / 2);
    }
  }

  // O(1) / O(1)
  peek() {
    return this.heap[0];
  }

  // O(log n) / O(1)
  remove() {
    [this.heap[this.heap.length - 1], this.heap[0]] = [
      this.heap[0],
      this.heap[this.heap.length - 1],
    ];

    const removed = this.heap.pop();

    this.siftDown(0, this.heap);

    return removed;
  }

  // O(log n) / O(1)
  insert(value: number) {
    this.heap.push(value);

    this.siftUp(this.heap.length - 1, this.heap);
  }
}
