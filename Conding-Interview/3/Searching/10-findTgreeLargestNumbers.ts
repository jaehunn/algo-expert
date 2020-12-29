/**
 * Write a function that takes in an array of at least three integers and, without sorting the input array,
 * returns a sorted array of the three largest integers in the input array.
 *
 * The function should return duplicate integers if necessary; for example, it should return [10, 10, 12] for an input array of [10, 5, 9, 10, 12].
 */

// O(n) / O(1)
function findThreeLargestNumbers(array: number[]) {
  const threeLargest: Array<number | null> = [null, null, null];

  for (const num of array) {
    updateLargest(threeLargest, num);
  }

  return threeLargest;
}

// wip
function updateLargest(threeLargest: Array<number | null>, num: number) {
  if (threeLargest[2] === null || num > threeLargest[2]) {
    shiftAndUpdate(threeLargest, num, 2);
  } else if (threeLargest[1] === null || num > threeLargest[1]) {
    shiftAndUpdate(threeLargest, num, 1);
  } else if (threeLargest[0] === null || num > threeLargest[0]) {
    shiftAndUpdate(threeLargest, num, 0);
  }
}

function shiftAndUpdate(array: Array<number | null>, num: number, idx: number) {
  for (let i = 0; i <= idx; i += 1) {
    if (i === idx) array[i] = num;
    else array[i] = array[i + 1];
  }
}

function _findThreeLargestNumbers(array: number[]) {
  let newArray: number[] = [...array];
  let flag: boolean;

  for (let i = 1; i < 4; i += 1) {
    flag = false;

    for (let j = 0; j < newArray.length - i; j += 1) {
      if (newArray[j] > newArray[j + 1]) {
        [newArray[j], newArray[j + 1]] = [newArray[j + 1], newArray[j]];

        flag = true;
      }
    }

    if (!flag) return newArray.slice(newArray.length - 3, newArray.length);
  }

  return newArray.slice(newArray.length - 3, newArray.length);
}
