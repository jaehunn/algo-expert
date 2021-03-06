/**
 * Given a non-empty string of lowercase letters and a non-negative integer representing a key,
 * write a function that returns a new string obtained by shifting every letter in the input string by k positions in the alphabet, where k is the key.
 *
 * Note that letters should "wrap" around the alphbet; in other words, the letter z shifted by one returns the letter a.
 */

// 아스키코드표의 끝은 127 이다.
// key 를 한정된 범위로(1-25) 정규화시켜야 넘치는 범위를 판단하고 조정할 수 있다.
// 가령 key 를 정규화시키지 않고, 26의 배수 그대로를 가져간다면, 넘치는 순간을 예측하지 못한다.

// "".charCodeAt()
// String.fromCharCode()

// O(n) / O(n)
function caesarCipherEncryptor(string, key) {
  const newLetters = [];
  const newKey = key;

  for (const letter of string) {
    newLetters.push(getNewLetter(letter, newKey));
  }

  return newLetters.join("");
}

function getNewLetter(letter, key) {
  const newLetterCode = letter.charCodeAt() + key;

  return newLetterCode <= 122
    ? String.fromCharCode(newLetterCode)
    : String.fromCharCode(96 + (newLetterCode % 122));
}

// O(n) / O(n)
function _caesarCipherEncryptor(string, key) {
  const newLetters = [];
  const newKey = key % 26;
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

  for (const letter of string) {
    newLetters.push(_getNewLetter(letter, newKey, alphabet));
  }

  return newLetters.join("");
}

function _getNewLetter(letter, key, alphabet) {
  const newLetterCode = alphabet.indexOf(letter) + key;

  return alphabet[newLetterCode % 26];
}
