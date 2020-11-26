// parentheses-valid 문제는 stack 으로 풀린다.

// string 은 iterable 하므로 곧바로 for-of 로 돌려도된다. Array.from 으로 바꿀필요가없다.
// 보통 괄호 타당성문제는 괄호만 들어오는 것이 전제지만, 이 문제는 일반 문자열도 들어온다.

// ([]}) 의 경우에 일반 문자열과 스택에 포함되지 않은 닫는 괄호를 같이 무시하면 true 가 된다. (주의)
// 애초에 괄호에 대해서만 처리하도록 validation wrapping 하자.
// 다시 상기하지만, 우아하게 풀려고하지말자. 정확하고 철저한 논리로 접근하는 것이 중요하다.

// O(n) / O(n)
function balancedBrackets(string) {
  const openingBrackets = "([{";
  const closingBrackets = ")]}";

  const matchingBrackets = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  const stack = [];
  for (const char of string) {
    if (openingBrackets.includes(char)) {
      stack.push(char);
    } else if (closingBrackets.includes(char)) {
      // empty
      if (stack.length === 0) return false;

      // top
      if (stack[stack.legnth - 1] === matchingBrackets[char]) {
        stack.pop();
      } else false;
    }
  }
}
