// wip

// O(w * n * log n * w * log w) / O(wn)
// w: number of words
// n: length of longest word
function groupAnagrams(words) {
  if (words.length === 0) return [];

  const sortedWords = words.map((word) => word.split("").sort().join());
  const indices = [...Array(words.length).keys()];

  indices.sort((a, b) => {
    if (sortedWords[a] === sortedWords[b]) return 0;

    return sortedWords[a] < sortedWords[b] ? -1 : 1;
  });

  const result = [];
  let currentAnagramGroup = [];
  let currentAnagram = sortedWords[indices[0]];

  for (const index of indices) {
    const word = words[index];
    const sortedWord = sortedWords[index];

    if (sortedWord === currentAnagram) {
      currentAnagramGroup.push(word);

      continue;
    }

    result.push(currentAnagramGroup);
    currentAnagramGroup = [word];
    currentAnagram = sortedWord;
  }

  result.push(currentAnagramGroup);

  return result;
}

// 인자없이 sort() 는 오름차순된다.

// anagram word 은 문자 정렬시 같은 word 가 된다.
// 객체를 짜고 Object.values 로 값들을 추출해 배열을 만든다.

// O(w * n * log n) / O(w * n)
function _groupAnagrams(words) {
  const anagrams = {};
  for (const word of words) {
    const sortedWord = word.split("").sort().join(""); // hacky

    if (sortedWord in anagrams) {
      anagrams[sortedWord].push(word);
    } else anagrams[sort] = [word];
  }

  return Object.values(anagrams);
}
