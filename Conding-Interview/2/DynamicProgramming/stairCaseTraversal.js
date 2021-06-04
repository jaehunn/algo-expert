// 계단 오르기 문제
// n 번째 계단에 오르는 방법은 n-1 에서 올라오는 방법 + n-2 에서 올라오는 방법
// f(n) = f(n - 1) + f(n - 2) => 부분문제의 중복과 최적부분구조를 만족하기 때문에 DP 가 가능하다. O(n) O(1)

// f(1) = 1
// f(2) = 2

// 최소비용으로 계단 오르기
// 계단의 비용이 [10, 20, 30] 일 떄, 꼭대기에 오르기위한 최소비용은? -> 0 10 20 30 n => 답: 20
// f(n) = min(f(n - 1), f(n - 2)) 가 된다.
// f(n - 1) 은 f(n - 1) 까지 오르기위한 최소비용 + n-1 번째 비용이된다.

// [1, 2, 4, 6, 2, 4, 6, 1]
// f(0) = 0, f(1) = 0
// f(2) = min(f(0) + 1, f(1) + 2)
// ...

// [1, 2, 4, 6, 2, 4, 6, 1]
// [0, 0, 1, 2, 5, 7, 7, 11, *12]
// 길이 2인 배열로 공간복잡도를 상수로 만들 수 있다.

// 본 문제

// 탑다운 O(k^n) / O(n)
function staircaseTraversal(height, maxSteps) {
  return numberOfWaysToTop(height, maxSteps);
}

function numberOfWaysToTop(height, maxSteps) {
  if (height <= 1) return 1;

  let numberOfWays = 0;
  for (let step = 1; step <= Math.min(height, maxSteps); step += 1) {
    numberOfWays += numberOfWaysToTop(height - step, maxSteps);
  }

  return numberOfWays;
}

// height: 4,  maxSteps: 2
