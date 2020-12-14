/**
 * An array of integers is said to represent the Binary Search Tree (BST) obtained by inseting each integer in the array, from left to right, into the BST.
 *
 * Write a function that takes in two arrays of integers and determines whether these arrays represent the same BST.
 * Note that you're not allowed to construct any BSTs in your code.
 *
 * A BST is Binary Tree that consists only of BST nodes.
 * A node is said to be a valid BST node if and only if it satisfies the BST property:
 * its value is strictly greater than the values of every node to its left;
 * its vaue is less than or equal to the values of every node to its right;
 * and its children nodes are either valid BST nodes themselves or None / null
 */

// [10, 15, 8, 12, 94, 81, 5, 2, 11]
// [10, 8, 5, 15, 2, 12, 11, 94, 81]

// O(n^2) / O(n^2)
function sameBsts(arrayOne: number[], arrayTwo: number[]) {
  if (arrayOne.length !== arrayTwo.length) return false;
  if (arrayOne.length === 0 && arrayTwo.length === 0) return true;
  if (arrayOne[0] !== arrayTwo[0]) return false;

  const leftOne = getSmaller(arrayOne);
  const leftTwo = getSmaller(arrayTwo);
  const rightOne = getBiggerOrEqual(arrayOne);
  const rightTwo = getBiggerOrEqual(arrayTwo);

  return sameBsts(leftOne, leftTwo) && sameBsts(rightOne, rightTwo);
}

function getSmaller(array: number[]) {
  const smaller: number[] = [];

  for (let i = 1; i < array.length; i += 1) {
    if (array[i] < array[0]) smaller.push(array[i]);
  }

  return smaller;
}

function getBiggerOrEqual(array: number[]) {
  const biggerOrEqual: number[] = [];

  for (let i = 1; i < array.length; i += 1) {
    if (array[i] >= array[0]) biggerOrEqual.push(array[i]);
  }

  return biggerOrEqual;
}

// wip
// O(n^2) / O(d)
function _sameBsts(arrayOne: number[], arrayTwo: number[]) {
  return _areSameBsts(arrayOne, arrayTwo);
}

function _areSameBsts(
  arrayOne: number[],
  arrayTwo: number[],
  rootIdxOne: number = 0,
  rootIdxTwo: number = 0,
  minVal: number = -Infinity,
  maxVal: number = Infinity
) {
  if (rootIdxOne === -1 || rootIdxTwo === -1) return rootIdxOne === rootIdxTwo;

  if (arrayOne[rootIdxOne] !== arrayTwo[rootIdxTwo]) return false;

  const leftRootIdxOne = _getIdxOfFirstSmaller();
  const leftRootIdxTwo = _getIdxOfFirstSmaller();
  const rightRootIdxOne = _getIdxOfFirstBiggerOrEqual();
  const rightRootIdxTwo = _getIdxOfFirstBiggerOrEqual();

  const currentValue = arrayOne[rootIdxOne];

  return _areSameBsts() && _areSameBsts();
}
