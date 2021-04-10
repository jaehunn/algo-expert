// [1, 2, 3]
//  [2, 3] => [1]
//   [3] => [1, 2]
//    x => [1, 2, 3]
//   [2] => [1, 3]
//    x => [1, 3, 2]

//  [1, 3] => [2]
//    ...

// list 이용하기

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

// pointer 이용하기

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

    console.log(`i: ${i}, startI: ${startI} -> ${items}`);

    getPermutation(startI + 1, items, resItems);

    [items[i], items[startI]] = [items[startI], items[i]]; // recover
  }
}

console.log(permutation([1, 2, 3]));

// startI 가 i 에 위치한다.

// [1, 2, 3] 00
//  -> [1, 2, 3] 11
//  -> [1, 3, 2] 12

// [2, 1, 3] 01
//  -> [2, 1, 3] 11
//  -> {2, 3, 1} 12

// [3, 2, 1] 02
//  -> [3, 2, 1] 11
//  -> [3, 1, 2] 12
