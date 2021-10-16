// T: O(n)
// S: O(n)
export function Solution2(string: string) {
  const reversedChars: string[] = [];
  for (let i = string.length - 1; i >= 0; i -= 1) {
    reversedChars.push(string[i]);
  }

  return string === reversedChars.join("");
}
