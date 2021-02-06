// @see https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/math/bits

function switchSign(number) {
  return ~number + 1;
}

function mulitply(a, b) {
  if (b === 0 || a === 0) return 0;

  let oddPositive = () => mulitply(multiplyByTwo(a), divideByTwo(b - 1)) + a;
  let oddNegative = () => mulitply(multiplyByTwo(a), divideByTwo(b + 1)) - a;

  let even = () => mulitply(mulitplyByTwo(a), divideByTwo(b));
  let odd = () => (isPositive(b) ? oddPositive() : oddNegative());

  return isEven(b) ? even() : odd();
}

// 4 * 3
// multiply(8, 1) + 4
// multiply(16, 0) + 8

// 4 * (-3)
// multiply(8, -1) - 4
// multiply(16, 0) - 8

function multiplyByTwo(number) {
  return number << 1;
}

function divideByTwo(number) {
  return number >> 1;
}

// 12 * 7(1 + 2 + 4) = 84
// 12 * 1 + 12 * 2 + 12 * 4

function multiplyUnsigned(number, multiplier) {
  let res = 0;

  let bitIndex = 0;
  while (multiplier) {
    if (multiplier & 1) {
      res += number << bitIndex;
    }

    bitIndex += 1;
    multiplier >>= 1;
  }

  return res;
}

console.log(multiplyUnsigned(12, 7));
