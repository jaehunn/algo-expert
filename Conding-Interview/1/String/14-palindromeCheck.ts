/**
 * Write a function that takes in a non-empty string and that returns a boolean representing whether the string is a palindrome.
 *
 * A plindrome is defined as a string that's written the same forward and backward.
 * Note that single-character strings are palindromes.
 */

// reverse 해서 비교하기
// O(n^2) / O(n)
function isPalindrome(string: string) {
  let reverseString = "";

  for (let i = string.length - 1; i >= 0; i -= 1) {
    reverseString += string[i];
  }

  return string === reverseString;
}

// 다이나믹 배열이용하기
// O(n) / O(n)
function _isPalindrome(string: string) {
  const reverseChars: string[] = [];

  for (let i = string.length - 1; i >= 0; i -= 1) {
    reverseChars.push(string[i]);
  }

  return string === reverseChars.join("");
}

// 각 포인터가 범위를 벗어났다면 정상적으로 작동했음을 의미한다
// O(n) / O(n)
function __isPalindrome(string: string, i = 0) {
  const j = string.length - 1 - i;

  return i >= j
    ? true
    : string[i] === string[j] && __isPalindrome(string, i + 1);
}

// some 방식으로 오류발생 시 바로 탈출
// O(n) / O(1)
function ___isPalindrome(string: string) {
  let leftIdx = 0;
  let rightIdx = string.length - 1;

  while (leftIdx < rightIdx) {
    if (string[leftIdx] !== string[rightIdx]) return false;

    leftIdx += 1;
    rightIdx -= 1;
  }

  return true;
}
