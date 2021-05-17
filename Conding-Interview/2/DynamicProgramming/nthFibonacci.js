// 1. 일반 재귀 호출 O(n^2) / O(n)
{
  function solve(n) {
    if (n === 0 || n === 1) return 0;
    if (n === 2) return 1;

    return solve(n - 1) + solve(n - 2);
  }
}

// 작은 문제를 쪼개는 탑다운 방식
// 하지만, 중복되는 부분문제가 발생한다. + 부분문제의 결과로 문제의 결과를 도출한다. (DP 이용)

// 2. 메모이제이션 O(n) / O(n)
{
  function solve(n, memo = { 0: 0, 1: 0, 2: 1 }) {
    if (n in memo) return memo[n];

    return (memo[n] = solve(n - 1, memo) + solve(n - 2, memo));
  }
}

// n 을 인덱스로 이용할 수 없기때문에 캐시를 배열로 정의할 수 없다. 객체를 이용한다.
// 문제의 결과를 캐시한다.

// 3. 바텀업 O(n) / O(1)
{
  function solve(n) {
    if (n <= 1) return 0;

    const lastTwo = [0, 1];

    let index = 3;

    // lastTwo 배열을 업데이트하는 방식으로 공간복잡도를 상수시간으로 낮출 수 있다.
    while (index <= n) {
      const next = lastTwo[0] + lastTwo[1];

      [lastTwo[0], lastTwo[1]] = [lastTwo[1], next];

      index += 1;
    }

    return lastTwo[1];
  }
}
