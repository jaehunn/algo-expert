export function Solution1(string: string) {
  const encodedStringCharacters: string[] = [];

  let currentRunLength = 1;
  for (let i = 1; i < string.length; i += 1) {
    const previousCharacter = string[i - 1];
    const currentCharacter = string[i];

    if (currentCharacter !== previousCharacter || currentRunLength === 9) {
      encodedStringCharacters.push(
        `${currentRunLength.toString()}${previousCharacter}`
      );

      currentRunLength = 1;
    } else currentRunLength += 1;
  }

  // last
  encodedStringCharacters.push(
    `${currentRunLength.toString()}${string[string.length - 1]}`
  );

  return encodedStringCharacters.join("");
}
