// T: O(n)
// S: O(1)
export function Solution1(array: number[]) {
  const threeLargest: Array<number> = [null, null, null];

  for (const num of array) {
    helper(threeLargest, num);
  }

  return threeLargest;
}

export function helper(threeLargest: Array<number>, num: number) {
  if (threeLargest[2] === null || num > threeLargest[2]) {
    shiftAndUpdate(threeLargest, num, 2);
  } else if (threeLargest[1] === null || num > threeLargest[1]) {
    shiftAndUpdate(threeLargest, num, 1);
  } else if (threeLargest[0] === null || num > threeLargest[0]) {
    shiftAndUpdate(threeLargest, num, 0);
  }
}

// makes idx place
export function shiftAndUpdate(array: Array<number>, num: number, idx: number) {
  for (let i = 0; i <= idx; i += 1) {
    if (i === idx) {
      array[i] = num;
    } else {
      array[i] = array[i + 1];
    }
  }
}
