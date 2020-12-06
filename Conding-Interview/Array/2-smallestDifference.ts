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
function smallestDifference(arrayOne: number[], arrayTwo: number[]) {
  arrayOne.sort((a, b) => a - b);
  arrayTwo.sort((a, b) => a - b);

  let idxOne = 0;
  let idxTwo = 0;
  let smallest = Infinity;
  let current = Infinity;

  let smallestPair: number[] = [];
  while (idxOne < arrayOne.length && idxTwo < arrayTwo.length) {
    let firstNum = arrayOne[idxOne];
    let secondNum = arrayTwo[idxTwo];

    // 음과 양으로 포인터 조정하기
    if (firstNum < secondNum) {
      current = secondNum - firstNum;

      idxOne++;
    } else if (secondNum < firstNum) {
      current = firstNum - secondNum;

      idxTwo;
    } else return [firstNum, secondNum];

    // update
    if (smallest > current) {
      smallest = current;

      smallestPair = [firstNum, secondNum];
    }
  }

  return smallestPair;
}
