// 1. 잘라내기
function permutation(items) {
  const resItems = [];

  getPermutation(items, [], resItems);

  return resItems;
}

function getPermutation(items, curItems, resItems) {
  if (!items.length && curItems.length) {
    resItems.push(curItems);

    return;
  }
  for (let i = 0; i < items.length; i += 1) {
    const newItems = items.slice(0, i).concat(items.slice(i + 1, items.length));
    const newCurItems = curItems.concat([items[i]]);

    getPermutation(newItems, newCurItems, resItems);
  }
}

console.log(permutation([1, 2, 3]));

// 2. 위치 스왑
function _permutation(items) {
  const resItems = [];

  _getPermutation(items, 0, resItems);

  return resItems;
}

function _getPermutation(items, startI, resItems) {
  for (let i = startI; i < items.length; i += 1) {
    [items[i], items[startI]] = [items[startI], items[i]];

    _getPermutation(items, startI + 1, resItems);

    [items[i], items[startI]] = [items[startI], items[i]];
  }
}

console.log(_permutation([1, 2, 3]));
