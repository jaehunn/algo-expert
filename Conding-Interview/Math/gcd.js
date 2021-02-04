// @see https://github.com/trekhleb/javascript-algorithms/blob/master/src/algorithms/math/euclidean-algorithm/euclideanAlgorithm.js
function euclidean(a, b) {
  if (!b) return a;

  return euclidean(b, a % b);
}

function _euclidean(a, b) {
  while (a && b && a !== b) {
    [a, b] = a > b ? [a - b, b] : [a, b - a];
  }

  return a || b;
}
