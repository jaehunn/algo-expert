// 재귀

// [1, 2, 3], i = null
//  [1, 2, 3], i = 2 -> return [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]
//   [1, 2, 3], i = 1 -> return [[], [1], [2], [1, 2]]
//    [1, 2, 3], i = 0 -> return [[], [1]]
//     [1, 2, 3], i = -1 -> return [[]]

function powerSet(items, i = items.length - 1) {
  if (i < 0) return [[]];

  const elem = items[i];
  const subSets = powerSet(items, i - 1); // 맨 밑으로 내려가기
  const subSetsLen = subSets.length;

  // 현재 subSets 를 순회하며 elem 붙히기
  for (let j = 0; j < subSetsLen; j += 1) {
    const currentSubset = subSets[j];

    subSets.push(currentSubset.concat(elem));
  }

  return subSets;
}

console.log(powerSet([1, 2, 3]));

// 순회하기

function _powerSet(items) {
  const subSets = [[]];

  for (const elem of items) {
    const subSetsLen = subSets.length;

    for (let i = 0; i < subSetsLen; i += 1) {
      const currentSubset = subSets[i];

      subSets.push(currentSubset.concat(elem));
    }
  }

  return subSets;
}
