// T: O(n)
// S: O(n)
export function Solution2(string: string, key: number) {
  const alphabet = Array.from("abcdefghijklmnopqrstuvwxyz");

  const newLetters = [];
  const newKey = key % 26;

  for (const letter of string) {
    newLetters.push(helper(letter, newKey, alphabet));
  }

  return newLetters.join("");
}

export function helper(letter: string, key: number, alphabet: string[]) {
  const newLetterCode = alphabet.indexOf(letter) + key;

  return alphabet[newLetterCode % 26];
}
