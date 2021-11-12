// T: O(nlogn)
// S: O(1)

// 전체가 최대가 나오려면 각각이 최대가 나와야한다. 각각은 gap 이 최대로 벌어저야한다. -> sort

export function Solution1(
  redShirtSpeeds: number[],
  blueShirtSpeeds: number[],
  fastest: boolean
) {
  redShirtSpeeds.sort((a, b) => a - b);
  blueShirtSpeeds.sort((a, b) => a - b);

  // 기울기(오름차순과 내림차순)의 방향을 다르게 할 것인가를 정한다.
  if (fastest) reverseArrayInPlace(redShirtSpeeds);

  let totalSpeed = 0;
  for (let i = 0; i < redShirtSpeeds.length; i += 1) {
    const redRider = redShirtSpeeds[i];
    const blueRider = blueShirtSpeeds[i];

    totalSpeed += Math.max(redRider, blueRider);
  }

  return totalSpeed;
}

function reverseArrayInPlace(array: number[]) {
  let i = 0;
  let j = array.length - 1;
  while (i < j) {
    [array[i], array[j]] = [array[j], array[i]];

    i += 1;
    j -= 1;
  }
}
