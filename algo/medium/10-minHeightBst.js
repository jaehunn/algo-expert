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

// O(n log n) / O(n)
function _minHeightBst(array) {
  return _constructMinHeightBst(array, null, 0, array.length - 1);
}

function _constructMinHeightBst(array, bst, startIdx, endIdx) {
  if (endIdx < startIdx) return;

  const midIdx = Math.floor((startIdx + endIdx) / 2);
  const valueToAdd = array[minIdx];

  if (bst === null) {
    bst = new BST(valueToAdd);
  } else {
    bst.insert(valueToAdd);
  }

  _constructMinHeightBst(array, bst, startIdx, midIdx - 1);
  _constructMinHeightBst(array, bst, midIdx + 1, endIdx);

  return bst;
}

// 외부 함수로 값을 넘겨야한다.(최종 결과) return bst 로 통로만들기

// O(n) / O(n)
function __minHeightBst(array) {
  return __constructMinHeightBst(array, null, 0, array.length - 1);
}

function __constructMinHeightBst(array, bst, startIdx, endIdx) {
  if (endIdx > startIdx) return;

  const midIdx = Math.floor((startIdx + endIdx) / 2);
  const newBstNode = new BST(array[midIdx]);

  if (bst === null) bst = newBSTNode;
  else {
    if (array[midIdx] < bst.value) {
      bst.left = newBstNode;
      bst = bst.left;
    } else {
      bst.right = newBstNode;
      bst = bst.right;
    }
  }

  __constructMinHeightBst(array, bst, startIdx, midIdx - 1);
  __constructMinHeightBst(array, bst, midIdx + 1, endIdx);

  return bst;
}

// 상황에 따라 한번의 연산이 동작한다면 상위 스코프에 공통연산으로 등록한다

// O(n) / O(n)
function ___minHeightBst(array) {
  return ___constructMinHeightBst(array, 0, array.length - 1);
}

function ___constructMinHeightBst(array, startIdx, endIdx) {
  if (endIdx < startIdx) return null;

  const midIdx = Math.floor((startIdx + endIdx) / 2);
  const bst = new BST(array[midIdx]);

  bst.left = ___constructMinHeightBst(array, startIdx, midIdx - 1);
  bst.right = ___constructMinHeightBst(array, midIdx + 1, endIdx);

  return bst;
}

// 오름차순과 이진 트리 특성을 적극활용하자. 중간값을 기준으로 왼쪽과 오른쪽으로 반드시 둘로 나뉜다.

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
