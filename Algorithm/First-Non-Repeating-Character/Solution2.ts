// T: O(n), n is the length of the input string
// S: O(1)

// The constant space is because the input string of the input string English-alphabet letters;
// thus, our hash table will never have more than 26 character frequencies.

export function Solution2(string: string) {
  const characterFrequencies: { [character: string]: number } = {};

  // set
  for (const character of string) {
    if (!(character in characterFrequencies))
      characterFrequencies[character] = 0;

    characterFrequencies[character] += 1;
  }

  // find
  for (let i = 0; i < string.length; i += 1) {
    const character = string[i];

    if (characterFrequencies[character] === 1) return i;
  }

  return -1;
}
