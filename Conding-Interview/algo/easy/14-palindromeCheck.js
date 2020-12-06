function isPalindrome(string) {
  let len = (string.length / 2) << 0;
  for (let i = 0; i < len; i += 1) {
    const value = string[string.length - i - 1];

    if (string[i] !== value) return false;
  }

  return true;
}

function _isPalindrome(string) {
  let reverseString = "";

  for (let i = string.length - 1; i >= 0; i -= 1) {
    reverseString += string[i];
  }

  return string === reverseString;
}

function __isPalindrome(string) {
  const reverseChars = [];

  for (let i = string.length - 1; i >= 0; i -= 1) {
    reverseChars.push(string[i]);
  }

  return string === reverseChars.join("");
}

// 각 포인터가 범위를 벗어났다면 정상적으로 작동했음을 의미한다

function ___isPalindrome(string, i = 0) {
  const j = string.length - 1 - i;

  return i >= j
    ? true
    : string[i] === string[j] && ___isPalindrome(string, i + 1);
}

function ____isPalindrome(string) {
  let leftIdx = 0;
  let rightIdx = string.length - 1;

  while (leftIdx < rightIdx) {
    if (string[leftIdx] !== string[rigthtIdx]) return false;

    leftIdx += 1;
    rightidx -= 1;
  }

  return true;
}
