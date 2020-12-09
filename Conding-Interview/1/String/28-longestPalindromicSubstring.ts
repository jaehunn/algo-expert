/**
 * Write a function that, given a string, returns its longest palindromic substring.
 *
 * A palindrome is defined as a string that's written the same forward and backward.
 *
 * Note that single-character strings are palindromes.
 *
 * You can assume that there will only be one longest palindromic substring.
 */

// O(n^3) / O(n)
function longestPalindromicSubstring(string: string) {
  let longest = "";

  for (let i = 0; i < string.length; i++) {
    for (let j = i; j < string.length; j++) {
      const substring = string.slice(i, j);

      // 모든 substring 을 평가한다
      if (substring.length > longest.length && isPalindrome(substring))
        longest = substring;
    }
  }

  return longest;
}

function isPalindrome(string: string) {
  let leftIdx = 0;
  let rightIdx = string.length - 1;

  while (leftIdx < rightIdx) {
    if (string[leftIdx] !== string[rightIdx]) return false;

    leftIdx += 1;
    rightIdx -= 1;
  }

  return true;
}

// O(n^2) / O(n)
function _longestPalindromicSubstring(string) {
  let currentLongest = [0, 1, 1]; // left right length

  for (let i = 1; i < string.length; i += 1) {
    const odd = _getLongestPalindromeFrom(string, i - 1, i + 1);
    const even = _getLongestPalindromeFrom(string, i - 1, i);

    const longest = odd[2] > even[2] ? odd : even;

    currentLongest = currentLongest[2] > longest[2] ? currentLongest : longest;
  }

  return string.slice(currentLongest[0], currentLongest[1]);
}

function _getLongestPalindromeFrom(string, leftIdx, rightIdx) {
  while (leftIdx >= 0 && rightIdx < string.length) {
    if (string[leftIdx] !== string[rightIdx]) break;

    leftIdx -= 1;
    rightIdx += 1;
  }

  return [leftIdx + 1, rightIdx, rightIdx - leftIdx + 1];
}
