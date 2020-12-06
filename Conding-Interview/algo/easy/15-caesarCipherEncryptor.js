function caesarCipherEncryptor(string, key) {
  const BaseKey = "a".charCodeAt(0) - 1;
  const KeyLimit = "z".charCodeAt(0);

  key = key % 26; // nomalize
  let result = "";
  for (let i = 0; i < string.length; i += 1) {
    const currentKey = string[i].charCodeAt(0);

    const updateKey =
      currentKey + key > KeyLimit
        ? currentKey + key - KeyLimit + BaseKey
        : currentKey + key;

    result += String.fromCharCode(updateKey);
  }

  return result;
}

// 아스키코드표의 끝은 127 이다.
// key 를 한정된 범위로(1-25) 정규화시켜야 넘치는 범위를 판단하고 조정할 수 있다.
// 가령 key 를 정규화시키지 않고, 26의 배수 그대로를 가져간다면, 넘치는 순간을 예측하지 못한다.

function _caesarCipherEncryptor(string, key) {
  const newLetters = [];
  const newKey = key;

  for (const letter of string) {
    newLetters.push(_getNewLetter(letter, newKey));
  }

  return newLetters.join("");
}

function _getNewLetter(letter, key) {
  const newLetterCode = letter.charCodeAt() + key;

  console.log(letter, newLetterCode, (newLetterCode % 122) + 96);

  return newLetterCode <= 122
    ? String.fromCharCode(newLetterCode)
    : String.fromCharCode(96 + (newLetterCode % 122));
}

_caesarCipherEncryptor("ovmqkwtujqmfkao", 52);

// 아스키전체 범위에서 모듈러 연산 대신, 한정된 범위 안에서의 모듈러 연산은 유용하다

function __caesarCipherEncryptor(string, key) {
  const newLetters = [];
  const newKey = key % 26;
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

  for (const letter of string) {
    newLetters.push(__getNewLetter(letter, newKey, alphabet));
  }

  return newLetters.join("");
}

function ___getNewLetter(letter, key, alphabet) {
  const newLetterCode = alphabet.indexOf(letter) + key;

  return alphabet[newLetterCode % 26];
}
