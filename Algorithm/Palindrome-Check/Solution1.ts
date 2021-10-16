// T: O(n^2)
// S: O(n)
export function Solution1(string: string) {
  let reversedString = "";
  for (let i = string.length - 1; i >= 0; i -= 1) {
    reversedString += string[i]; // O(n)
  }

  return string === reversedString;
}
