// bubble
function findThreeLargestNumbers(array) {
  let newArray = [...array];
  let flag;

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

// O(n) / O(1)
function _findThreeLargestNumbers(array) {
  const threeLargest = [null, null, null];

  for (const num of array) {
    _updateLargest(threeLargest, num);
  }

  return threeLargest;
}

function _updateLargest(threeLargest, num) {
  if (threeLargest[2] === null || num > threeLargest[2]) {
    _shiftAndUpdate(threeLargest, num, 2);
  } else if (threeLargest[1] === null || num > threeLargest[1]) {
    _shiftAndUpdate(threeLargest, num, 1);
  } else if (threeLargest[0] === null || num > threeLargest[0]) {
    _shiftAndUpdate(threeLargest, num, 0);
  }
}

function _shiftAndUpdate(array, num, idx) {
  for (let i = 0; i <= idx; i += 1) {
    if (i === idx) array[i] = num;
    else array[i] = array[i + 1];
  }
}
