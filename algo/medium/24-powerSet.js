// wip
// recursion
// O(n * 2^n) / O(n * 2^2)
function powerset(array, idx = array.length - 1) {
  if (idx < 0) return [[]]; // { ø }

  const subSets = powerset(array, idx - 1);
  const elem = array[idx];
  const length = subSets.length;

  // i < subSets.length 시 동적으로 배열을 평가해 무한루프에 빠진다.

  for (let i = 0; i < length; i += 1) {
    subSets.push(subSets[i].concat(elem));
  }

  return subSets;
}

// [[]]

// 1
// [[], [1]]

// 2
// [[], [1], [2], [1, 2]]

// 3
// [[], [1], [2], [3], [1, 3], [2, 3], [1, 2, 3]]

// iteration
// O(n* 2^n) / O(n * 2^n)
function powerset(array) {
  const subSets = [[]]; // { ø }

  for (const elem of array) {
    const length = subSets.length;

    for (let i = 0; i < length; i += 1) {
      subSets.push(subSets[i].concat(elem));
    }
  }

  return subSets;
}
