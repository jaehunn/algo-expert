// 단일캐릭터 스트링부터 모든 부분스트링을 뽑아 palindrome 한지 판단한다.
// 이때 길이에 대한 max 변수를 따로 만들지말고 문자열의 길이로 비교한다.

// palindrome 판단은 양끝에 포인터를 두고 대칭이되는지를 판단하면된다.
// 만약 다르다면 즉시 false 를 반환한다.

// O(n^3) / O(n)
function longestPalindromicSubstring(string) {
  let longest = "";

  for (let i = 0; i < string.length; i++) {
    for (let j = i; j < string.length; j++) {
      const substring = string.slice(i, j);

      if (substring.length > longest.length && isPalindrome(substring))
        longest = substring;
    }
  }

  return longest;
}

function isPalindrome(string) {
  let leftIdx = 0;
  let rightIdx = string.length - 1;

  while (leftIdx < rightIdx) {
    if (string[leftIdx] !== string[rightIdx]) return false;

    leftIdx += 1;
    rightIdx -= 1;
  }

  return true;
}

// palindrome 한 서브스트링 중 가장 긴 서브스트링 자체를 구하라고 한다면, indices 로 관리하면 된다.

// 불변메서드 slice 는 string 에서 사용가능하다
// aba 같은 구성은 b 를 빼고 palindrome 프로세스 수행해야한다. 이전의 풀이는 모든 서브스트링을 추출해 상관없었다.
// 아래 풀이는 palindrome 의 기준점을 양 끝점으로 하지않고 베이스 시작점으로 둔다. 시작점으로부터 palindrome 이 아닌 순간까지를 검사한다.

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
