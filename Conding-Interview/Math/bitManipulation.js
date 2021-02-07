// @see https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/math/bits

function fullAdder(a, b) {
  let result = 0;
  let carry = 0;

  for (let i = 0; i < 32; i += 1) {
    let aI = getBit(a, i);
    let bI = getBit(b, i);

    let carryIn = carry;

    let bitSum = aI ^ bI;

    let sum = bitSum ^ carryIn;

    let carryOut = (bitSum & carrayIn) | (aI & bI);

    carry = carryOut;

    result |= sum << i;
  }

  return result;
}

console.log(multiplyUnsigned(12, 7));
