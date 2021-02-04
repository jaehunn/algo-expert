// @see https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/math/bits

function isPositive(number) {
  if (!number) return false;

  return !((number >> 31) & 1);
}
