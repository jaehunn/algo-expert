// T: O(n)
// S: O(n)
export function Solution3(string: string, i = 0) {
  const j = string.length - 1 - i;

  return i >= j ? true : string[i] === string[j] && Solution3(string, i + 1);
}
