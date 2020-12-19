/**
 * The Fibonacci sequence is defined as follows: the first number of the sequence is 0,
 * the second number is 1, and the nth number is the sum of the (n-1)th and (n-2)th numbers.
 * Write a function that takes in an integer n and returns the nth Fibonacci number.
 *
 * Important note: the Fibonacci sequence is often defined with its first two numbers ans F0 = 0 and F1 = 1.
 * For the purpose of this question, the first Fibonacci number is F0; therefore, getNthFib(1) is equal to F0, getNthFib(2) is equal to F1, etc...
 */

// O(2^n) / O(n)
function getNthFib(n: number) {
  if (n === 2) return 1;
  if (n === 1) return 0;

  return getNthFib(n - 1) + getNthFib(n - 2);
}

// map 과 object in 의 성능차이는 어떨까
// 1. 잦은 데이터 갱신 적은 데이터 출력은 오브젝트
// 2. 드문 데이터 갱신 많은 데이터 출력은 맵

interface Memo {
  [key: number]: number;
}

// O(n) / O(n)
function _getNthFib(n: number, memoize: Memo = { 1: 0, 2: 1 }) {
  if (n in memoize) return memoize[n];

  return (memoize[n] = _getNthFib(n - 1, memoize) + _getNthFib(n - 2, memoize));
}

// 재귀와 이터레이션 성능 차이는 어떨까, 재귀가 더 느리다

// O(n) / O(1)
function __getNthFib(n: number) {
  const lastTwo: [number, number] = [0, 1];

  let counter = 3;
  while (counter <= n) {
    const nextFib = lastTwo[0] + lastTwo[1];

    lastTwo[0] = lastTwo[1];
    lastTwo[1] = nextFib;

    counter++;
  }

  return n > 1 ? lastTwo[1] : lastTwo[0];
}
