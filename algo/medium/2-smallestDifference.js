function smallestDifference(arrayOne, arrayTwo) {
  let minDist = 99999;
  let result = [-1, -1];
  for (let i = 0; i < arrayOne.length; i += 1) {
    for (let j = 0; j < arrayTwo.length; j += 1) {
      let dist = Math.abs(arrayOne[i] - arrayTwo[j]);

      if (minDist > dist) {
        minDist = dist;
        result = [arrayOne[i], arrayTwo[j]];
      }
    }
  }

  return result;
}

// 최소값을 찾을 때 0 이 아닌 Infinity 로 하는 습관을 들이자. 0 도 답이 될 수 있다.
// 변수를 지정하는 것을 귀찮아하지마라. 이전 상태를 기억하는 유용한 도구다
// 너무 간추리려고 노력하지마라. 처음엔 무식하게 풀어라
// else 대신 guard 를 사용하라

function _smallestDifference(arrayOne, arrayTwo) {
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
