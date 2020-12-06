/**
 * You're given an array of integers and an integer.
 * Write a function that moves all instances of that integer in the array to the end of the array and returns the array.
 *
 * The function should perform this in place (i.e., it should mutate the input array) and doesn't need to maintain the order of the other integers.
 */

// 입력배열 원소들의 순서를 유지시킬 필요가 없다. (큐의 특성을 따를 필요가 없다.) 원소끼리의 swap 으로 해결할 수 있다.
// 양 끝단에 포인터를 위치시키고, 앞에서부터 toMove 인 원소를 찾으면 끝부터 toMove 가 아닌 원소와 바꾼다.

// O(n) / O(1)
function moveElementToEnd(array, toMove) {
  let i = 0;
  let j = array.length - 1;

  while (i < j) {
    // 뒤에서부터 toMove 가 아닌 원소의 자리를 찾는다
    while (i < j && array[j] === toMove) j--;

    if (array[i] === toMove) [array[i], array[j]] = [array[j], array[i]];

    i += 1;
  }

  return array;
}
