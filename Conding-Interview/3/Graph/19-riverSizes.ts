/**
 * You're given a two-dimensional array (a matrix) of potentially unequal height and width containing only 0s and 1s.
 * Each 0 represents land, and each 1 represents part of a river.
 *
 * A river consists of any number of 1s that are either horizontally or vertically adjacent (but not diagonally adjacent)
 * The number of adjacent 1s forming a river determine its size.
 *
 * Note that a river an twist. In other words, it doesn't have to be a straight vertical line or a straight horizontal line;
 * it can be L-shaped, for example.
 *
 * Write a function that returns an array of the sizes fo all rivers represented in the input matrix.
 * The sizes don't need to be in any particular order.
 */

// O(wh) / O (wh)
function riverSizes(matrix: number[][]) {
  const sizes: number[] = [];
  const visited: boolean[][] = matrix.map((row) => row.map(() => false));

  for (let i = 0; i < matrix.length; i += 1) {
    for (let j = 0; j < matrix[0].length; j += 1) {
      if (visited[i][j]) continue; // guard

      traverseNode(i, j, matrix, visited, sizes);
    }
  }

  return sizes;
}

function traverseNode(
  i: number,
  j: number,
  matrix: number[][],
  visited: boolean[][],
  sizes: number[]
) {
  let currentSize = 0;
  const nodes = [[i, j]];

  while (nodes.length) {
    const currentNode = nodes.pop();

    i = currentNode[0];
    j = currentNode[1];

    // cond 1
    if (visited[i][j]) continue;

    visited[i][j] = true;

    // cond 2
    if (matrix[i][j] === 0) continue;

    currentSize++;

    const unvisitedNodes = getUnvisitedNodes(i, j, matrix, visited);
    for (const node of unvisitedNodes) {
      nodes.push(node);
    }
  }

  if (currentSize) sizes.push(currentSize);
}

function getUnvisitedNodes(
  i: number,
  j: number,
  matrix: number[][],
  visited: boolean[][]
) {
  const unvisitedNodes: [number, number][] = []; // [[number, number], ...]

  // up down
  if (i > 0 && !visited[i - 1][j]) unvisitedNodes.push([i - 1, j]);
  if (i < matrix.length - 1 && !visited[i + 1][j])
    unvisitedNodes.push([i + 1, j]);

  // left right
  if (j > 0 && !visited[i][j - 1]) unvisitedNodes.push([i, j - 1]);
  if (j < matrix[0].length - 1 && !visited[i][j + 1])
    unvisitedNodes.push([i, j + 1]);

  return unvisitedNodes;
}
