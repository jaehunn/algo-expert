// T: O(n + m)
// S: O(c)

export function Solution3(characters: string, document: string) {
  const characterCounts: { [character: string]: number } = {};

  for (const character of characters) {
    if (!(character in characterCounts)) characterCounts[character] = 0;

    characterCounts[character] += 1;
  }

  // 단어가 없거나, 부족하면 만들지못한다.
  for (const character of document) {
    if (!(character in characterCounts) || characterCounts[character] === 0)
      return false;

    characterCounts[character] -= 1;
  }

  return true;
}
