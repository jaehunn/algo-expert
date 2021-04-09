// [1, 2, 3]
//  [2, 3] => [1]
//   [3] => [1, 2]
//    x => [1, 2, 3]
//   [2] => [1, 3]
//    x => [1, 3, 2]

//  [1, 3] => [2]
//    ...

// items를 앞에서부터 순차적으로 잘라내어 붙힌다.

// function permutation(items) {
//   const resItems = [];

//   getPermutation(items, [], resItems);

//   return resItems;
// }

// function getPermutation(items, curItems, resItems) {
//   if (!items.length && curItems.length) {
//     resItems.push(curItems);

//     return;
//   }

//   for (let i = 0; i < items.length; i += 1) {
//     const newItems = items.slice(0, i).concat(items.slice(i + 1)); // items[i] 제외
//     const newCurItems = curItems.concat([items[i]]);

//     getPermutation(newItems, newCurItems, resItems);
//   }
// }

// [1, 2, 3]
// ...

function permutation(items) {
  const resItems = [];

  getPermutation(0, items, resItems);

  return resItems;
}

function getPermutation(startI, items, resItems) {
  if (startI === items.length - 1) {
    resItems.push([...items]); // clone

    return;
  }

  for (let i = startI; i < items.length; i += 1) {
    [items[i], items[startI]] = [items[startI], items[i]];

    getPermutation(startI + 1, items, resItems);

    [items[i], items[startI]] = [items[startI], items[i]]; // recover
  }
}
