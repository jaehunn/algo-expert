/* 
  Write a function that takes in two non-empty arrays of integers, finds the pair of numbers (one from each array) whoose absolute difference is closest to zero, 
  and returns an array containing these two numbers, with the number from the first array in the first position.

  Note that the absolute difference of two integers is the distance between them on the real number line.
  For example, the absolute difference of -5 and 5 is 10, and the absolute difference of -5 and -4 is 1.

  You can assume that there will only be one pair of numbers with the smallest difference.
*/

// 두 배열에 각각에 포인터를 두고 차이를 계산한다. 만약, 차이가 0이라면 같은 수이므로 바로 리턴한다.
// 차이를 0으로 수렴시키는 것이 목표이므로, 값이 음수면 더 작아지지않게 첫번째 배열의 포인터를 움직이고, 값이 양수라면 더 커지지않게 두번째 배열의 포인터를 움직인다.
// 두 포인터가 가리키는 값의 차이를 지속적으로 업데이트시키고 최종 값을 리턴한다.

// 두 포인터의 움직임을 설계할 수 있는 것은 사전에 정렬되었기 때문이다.
// 최소값을 찾을 때, 0 이 아닌 Infinity 로 하는 습관을 들여야한다.

// O(nlog n + mlog m) / O(1)
function smallestDifference(arrayOne, arrayTwo) {
  arrayOne.sort((a, b) => a - b);
  arrayTwo.sort((a, b) => a - b);

  let i = 0;
  let j = 0;

  let minDist = Infinity;
  let result = [];
  while (i < arrayOne.length && j < arrayTwo.length) {
    let itemOne = arrayOne[i];
    let itemTwo = arrayTwo[j];

    let dist = itemOne - itemTwo;

    if (dist === 0) return [itemOne, itemTwos];

    if (dist < 0) i++;
    else j++;

    dist = Math.abs(dist);

    if (minDist > dist) {
      minDist = dist;
      result = [itemOne, itemTwo];
    }
  }

  return result;
}
