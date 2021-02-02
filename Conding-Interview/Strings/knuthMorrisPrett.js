// @see https://www.youtube.com/watch?v=GTJr8OvyEVQ

// wip

// Brute-force: O(W * H)
// KMP: O(W + H)

// 1. A 와 B 를 매칭시킨다.
// 2. 다른 문자가 나왔을 때 B 의 prefix, suffix 테이블을 보고,
//  prefix 다음 문자와 매칭되는지 확인한다.
// 3. 같다면 이어서 진행, 다르다면 새로 시작한다.

function buildPatternTable(word) {
  const patternTable = [0];
  let prefixIndex = 0;
  let suffixIndex = 1;

  while (suffixIndex < word.length) {
    if (word[prefixIndex] === word[suffixIndex]) {
      patternTable[suffixIndex] = prefixIndex + 1;
      suffixIndex += 1;
      prefixIndex += 1;
    } else if (prefixIndex === 0) {
      patternTable[suffixIndex] = 0;
      suffixIndex += 1;
    } else {
      prefixIndex = patternTable[prefixIndex - 1];
    }
  }

  return patternTable;
}

function knuthMorrisPratt(text, word) {
  if (word.length === 0) {
    return 0;
  }

  let textIndex = 0;
  let wordIndex = 0;

  const patternTable = buildPatternTable(word);

  while (textIndex < text.length) {
    if (text[textIndex] === word[wordIndex]) {
      // basecase
      if (wordIndex === word.length - 1) return textIndex - word.length + 1;

      wordIndex += 1;
      textIndex += 1;
    } else if (wordIndex > 0) {
      wordIndex = patternTable[wordIndex - 1]; // restart (next index of 'word' prefix)
    } else {
      // reset
      wordIndex = 0;
      textIndex += 1;
    }
  }

  return -1;
}

console.log(knuthMorrisPratt("ABABBABABCABB", "ABABC"));
