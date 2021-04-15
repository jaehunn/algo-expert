/**
 * Write a function that takes in an array of unique integers and returns its powerset.
 * The powerset P(X) of a set X is the set all subsets of X.
 *
 * For example, the powerset of [1, 2] is [[], [1], [2], [1, 2]].
 *
 * Note that the sets in the powerset do not need to be in any particular order.
 */

// O(n * 2^n) / O(n * 2^n)
function powerset(array: number[], idx = array.length - 1) {
  if (idx < 0) return [[]]; // { ø }

  const subSets = powerset(array, idx - 1); // 끌어내린다
  const elem = array[idx];
  const length = subSets.length;

  for (let i = 0; i < length; i += 1) {
    subSets.push(subSets[i].concat(elem)); // 부분집합들을 순회하며 해당 원소를 푸시

    // 주의) i < subSets.length 시 동적으로 배열을 평가해 무한루프에 빠진다.
  }

  return subSets;
}

// O(n* 2^n) / O(n * 2^n)
function _powerset(array: number[]) {
  const subSets: number[][] = [[]]; // { ø }

  for (const elem of array) {
    const length = subSets.length;

    for (let i = 0; i < length; i += 1) {
      subSets.push(subSets[i].concat(elem));
    }
  }

  return subSets;
}

function _powerSet() {}
