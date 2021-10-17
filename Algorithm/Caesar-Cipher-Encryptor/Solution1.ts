// T: O(n)
// S: O(n)
export function Solution1(string: string, key: number) {
  const newLetters = [];
  const newKey = key % 26;

  for (const letter of string) {
    newLetters.push(helper(letter, newKey));
  }

  return newLetters.join("");
}

export function helper(letter: string, key: number) {
  const newLetterCode = letter.charCodeAt(0) + key;

  return newLetterCode <= 122
    ? String.fromCharCode(newLetterCode)
    : String.fromCharCode(96 + (newLetterCode % 122));
}
