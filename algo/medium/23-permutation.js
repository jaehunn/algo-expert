// 3P3 = 3! = 3 * 2 * 1
// [1, 2 ,3]

// 1
// 2 3 -> 1 2 3
// 3 2 -> 1 3 2

// 2
// 1 3 -> 2 1 3
// 3 1 -> 2 3 1

// 3
// 1 2 -> 3 1 2
// 2 1 -> 3 2 1

// upper bound: O(n^2 * n!) / O(n * n!)
// roughly: O(n * n!) / O(n * n!)
function getPermutations(array) {
  const permutations = [];

  permutationsHelper(array, [], permutations);

  return permutations;
}

// permutation 과 combination 그리고 각각의 repetition 까지 전부 이해하고 스스로 구현할 줄 알아야한다.
// 가급적이면 함수를 분리해서 혹시모를 공유 변수 오염에 대비한다.

// 변수를 사용하지않고 파라미터로 바로 넘길때는 객체에 대해서는 immutable 한 연산 (새로운 객체가 생성되는) 을 써야한다. (주의!)

function permutationsHelper(array, currentPermutation, permutations) {
  if (!array.length && currentPermutation.length) {
    permutations.push(currentPermutation);
  } else {
    for (let index = 0; index < array.length; index += 1) {
      // exclude array[index]
      const prefix = array.slice(0, index);
      const suffix = array.slice(index + 1);

      // recur
      permutationsHelper(
        prefix.concat(suffix),
        currentPermutation.concat([array[index]]),
        // push 는 mutate 다.
        permutations
      );
    }
  }
}

// another answer LMTP

// O(n * n!) / O(n * n!)
function _getPermutations(array) {
  const permutations = [];

  _permutationsHelper(0, array, permutations);

  return permutations;
}

function _permutationsHelper(startIndex, array, permutations) {
  if (startIndex === array.length - 1) {
    permutations.push(array.slice()); // slice() 는 clone 이다.
  } else {
    for (let index = startIndex; index < array.length; index += 1) {
      [array[index], array[startIndex]] = [array[startIndex], array[index]];

      _permutationsHelper(index + 1, array, permutations);

      // revert
      [(array[index], array[startIndex])] = [array[startIndex], array[index]];
    }
  }
}
