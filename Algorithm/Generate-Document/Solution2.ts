// T: O(c * (n + m)), c is the number of unique characters
// S: O(c)

// 같은 문자가 부족하지않았다는 것을 전에 알았다면, 넘어가도 좋다.

export function Solution2(characters: string, document: string) {
  const alreadyCounted: Set<string> = new Set();

  for (const character of document) {
    if (character in alreadyCounted) continue;

    const documentFrequency = helper(character, document);
    const charactersFrequency = helper(character, characters);

    if (documentFrequency > charactersFrequency) return false;

    alreadyCounted.add(character);
  }

  return true;
}

export function helper(character: string, target: string) {
  let frequency = 0;
  for (const char of target) {
    if (char === character) frequency += 1;
  }

  return frequency;
}
