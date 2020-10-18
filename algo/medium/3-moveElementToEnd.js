function moveElementToEnd(array, toMove) {
  let l = 0;
  let r = array.length - 1;
  while (l < r) {
    while (array[l] !== toMove) l += 1;
    while (array[r] === toMove) r -= 1;

    if (l < r) [array[l], array[r]] = [array[r], array[l]];
  }

  return array;
}

// console.time("moveElementToEnd");
moveElementToEnd([2, 1, 2, 2, 2, 3, 4, 2], 2);
// console.timeEnd("moveElementToEnd"); // 0.146ms

// while 은 확실히 비용이 많이든다.
// 두개의 포인터를 모두 움직일 필요가 없다.

function _moveElementToEnd(array, toMove) {
  let i = 0;
  let j = array.length - 1;

  while (i < j) {
    while (i < j && array[j] === toMove) j--;

    if (array[i] === toMove) [array[i], array[j]] = [array[j], array[i]];

    i += 1;
  }

  return array;
}
// console.time("_moveElementToEnd");
_moveElementToEnd([2, 1, 2, 2, 2, 3, 4, 2], 2);
// console.timeEnd("_moveElementToEnd"); // 0.033ms
