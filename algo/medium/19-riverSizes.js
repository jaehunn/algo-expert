// wip
// O(wh) / O (wh)
function riverSizes(matrix) {
  const sizes = []; // result
  const visited = matrix.map((row) => row.map(() => false)); // visited matrix

  for (let i = 0; i < matrix.length; i += 1) {
    for (let j = 0; j < matrix[0].length; j += 1) {
      if (visited[i][j]) continue; // guard

      traverseNode(i, j, matrix, visited, sizes);
    }
  }

  return sizes;
}

function traverseNode(i, j, matrix, visited, sizes) {
  let currentSize = 0;
  const nodes = [[i, j]];

  while (nodes.length) {
    const currentNode = nodes.pop();

    i = currentNode[0];
    j = currentNode[1];

    // guard
    if (visited[i][j]) continue;
    visited[i][j] = true;

    if (matrix[i][j] === 0) continue;
    currentSize++;

    // vertical + horizontal nodes
    const unvisitedNodes = getUnvisitedNodes(i, j, matrix, visited);
    for (const node of unvisitedNodes) {
      nodes.push(node);
    }
  }

  // > 0
  if (currentSize > 0) sizes.push(currentSize);
}

function getUnvisitedNodes(i, j, matrix, visited) {
  const unvisitedNodes = [];

  // up down
  if (i > 0 && !visited[i - 1][j]) unvisitedNodes.push([i - 1, j]);
  if (i < matrix.length - 1 && !visited[i + 1][j])
    unvisitedNodes.push([i + 1, j]);

  // left right
  if (j > 0 && !visited[i][j - 1]) unvisitedNodes.push([i, j - 1]);
  if (j < matrix[0].length - 1 && !visited[i][j + 1])
    unvisitedNodes.push([i][j + 1]);

  return unvisitedNodes;
}
