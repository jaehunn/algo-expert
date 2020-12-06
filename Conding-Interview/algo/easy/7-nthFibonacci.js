function getNthFib(n) {
  if (n < 1) return;

  const map = new Map();

  return helper(n);

  function helper(n) {
    if (n < 3) return n - 1;
    if (map.has(n)) return map.get(n);

    const value = helper(n - 1) + helper(n - 2);

    map.set(n, value);

    return value;
  }
}

// 함수 오버로드를 구현하고 싶으면 디폴트 파라미터를 원함수에 추가하자

function _getNthFib(n) {
  if (n === 2) return 1;
  if (n === 1) return 0;

  return _getNthFib(n - 1) + _getNthFib(n - 2);
}

// map 과 object in 의 성능차이는 어떨까
// 1. 잦은 데이터 갱신 적은 데이터 출력은 오브젝트
// 2. 드문 데이터 갱신 많은 데이터 출력은 맵

function __getNthFib(n, memoize = { 1: 0, 2: 1 }) {
  if (n in memoize) return memoize[n];

  return (memoize[n] =
    __getNthFib(n - 1, memoize) + __getNthFib(n - 2, memoize));
}

// 재귀와 이터레이션 성능 차이는 어떨까, 재귀가 더 느리다

function ___getNthFib(n) {
  const lastTwo = [0, 1];
  let counter = 3;
  while (counter <= n) {
    const nextFib = lastTwo[0] + lastTwo[1];

    lastTwo[0] = lastTwo[1];
    lastTwo[1] = nextFib;

    counter++;
  }

  return n > 1 ? lastTwo[1] : lastTwo[0];
}
