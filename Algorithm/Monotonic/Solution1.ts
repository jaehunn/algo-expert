// T: O(n)
// S: O(1)

export function Solution1(array: number[]) {
  if (array.length < 2) return true;

  let prevDirection = array[1] - array[0];
  for (let i = 2; i < array.length; i += 1) {
    if (prevDirection === 0) {
      prevDirection = array[i] - array[i - 1];

      continue;
    }

    const curDirection = array[i] - array[i - 1];
    if (isChangeDirection(prevDirection, curDirection)) return false;
  }

  return true;
}

function isChangeDirection(prevDirection: number, curDirection: number) {
  if (prevDirection > 0) return curDirection < 0;

  return curDirection > 0;
}
