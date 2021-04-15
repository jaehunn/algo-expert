// 1
// -> 1w 1x 1y 1z
// -> 1w0 1x0 1y0 1z0
// -> 1w0 1x0 1y0 1z0

const O = {
  0: ["0"],
  1: ["1"],
  2: ["a", "b", "c"],
  3: ["d", "e", "f"],
  4: ["g", "h", "i"],
  5: ["j", "k", "l"],
  6: ["m", "n", "o"],
  7: ["p", "q", "r", "s"],
  8: ["t", "u", "v"],
  9: ["w", "x", "y", "z"],
};

function phoneNumberMnemonics(phoneNumber) {
  const current = new Array(phoneNumber.length).fill("0");
  const result = [];

  helper(phoneNumber, 0, current, result);

  return result;
}

function helper(phoneNumber, i, current, result) {
  if (i === phoneNumber.length) {
    result.push(current.join(""));

    return;
  }

  const letters = O[phoneNumber.charAt(i)];
  for (const letter of letters) {
    current[i] = letter;

    helper(phoneNumber, i + 1, current, result);
  }
}
