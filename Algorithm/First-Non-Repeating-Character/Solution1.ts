// T: O(n^2), n is the length of the input string
// S: O(1)

export function Solution1(string: string) {
  for (let i = 0; i < string.length; i += 1) {
    let foundDuplicate = false;

    // i next 가 아니라 다시 처음부터 돌아야한다.
    for (let j = 0; j < string.length; j += 1) {
      if (string[i] === string[j] && i !== j) foundDuplicate = true;
    }

    if (!foundDuplicate) return i;
  }

  return -1;
}
