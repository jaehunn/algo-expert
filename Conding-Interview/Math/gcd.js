// @see https://github.com/trekhleb/javascript-algorithms/blob/master/src/algorithms/math/euclidean-algorithm/euclideanAlgorithm.js
function euclidean(a, b) {
  // a > b
  // 작은 수가 0이 되면 최대 공약수로
  return b ? euclidean(b, a % b) : a;
}

function _euclidean(a, b) {
  while (a && b && a !== b) {
    [a, b] = a > b ? [a - b, b] : [a, b - a];
  }

  return a || b;
}
