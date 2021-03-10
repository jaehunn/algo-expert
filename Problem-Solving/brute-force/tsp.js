// wip
// 답이 여러개가 아니고 최적의 답 하나를 구하는 문제를 최적화 문제라고 한다.
// 최적화 문제를 해결하는 방법에는 여러 알고리즘이 있다. .그 중 기초인 완전 탐색을 통해 가능한 답을 생성하고 최적의 답을 도출해보자.

// TSP 문제
// n 개의 도시가 있고, 한 도시에서 출발해 모든 도시를 여행하는데 전부 한번씩만 거치고 싶다. 이때, 가능한 경로 중에서 가장 짧은 경로를 어떻게 구할까?

// 먼저, 완전 탐색을 설계하기 전에 시간 안에 답을 구할 수 있는지 검증해야한다.
// 출발지는 어느 도시라도 상관 없으므로 첫번째 도시로 강제해도 답에 변화는 없다. 따라서 출발 도시를 뺀 나머지 (n-1) 개의 도시를 나열하는 방법은 모두 (n-1)!가지가 나온다.
// 도시가 아주 많지 않다면, 그리 많은 답이 나오지는 않는다. 따라서 완전 탐색을 사용해도 좋다.

// 거치지않은 남은 도시 중에서 하나의 도시를 방문하는 것을 문제의 답을 만드는 하나의 조각으로 생각해볼 수 있다.

// paths: 1 -> 2(10) -> 4(10) -> 3(9) -> 1(6)

const N = 4; // 도시 수

// 도시간 비용 행렬
const D = [
  [0, 10, 15, 20],
  [5, 0, 9, 10],
  [6, 13, 0, 12],
  [8, 8, 9, 0],
];

const V = new Array(N).fill(false);

console.log(tsp());

function tsp(paths = [], currentLength = 0) {
  if (paths.length === N) return currentLength + D[paths[0]][paths[paths.length - 1]];

  let result = Infinity;

  for (let next = 0; next < N; next += 1) {
    if (V[next]) continue;

    let start = paths[paths.length - 1] ?? 0;
    V[next] = true;
    paths.push(next);

    let length = tsp(paths, currentLength + D[start][next]);

    result = Math.min(result, length);

    V[next] = false;
    paths.pop();
  }

  return result;
}
