/**
 * Write a function that takes in a string made up of brackets "(, [, {, ), ], and }" and other optional characters.
 * The function should return a boolean representing whether the string is balanced with regards to brackets.
 *
 * A string is said to be balanced if it has as many opening brackets of a certain type as it has closing brackets of that type and if no bracket is unmatched.
 * Note that an opening bracket can't match corresponding closing bracket that comes before it, and similarly, a closing bracket can't match a corresponding opening bracket that comes after it.
 * Also, brackets can't overlap each other as in [(]).
 */

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
    // 조건을 함축시키면 특정 상황을 배제할 수 있다. (괄호아닌 문자열을 논리에 포함시키지 않음)
    if (openingBrackets.includes(char)) {
      stack.push(char);
    } else if (closingBrackets.includes(char)) {
      // empty
      if (stack.length === 0) return false;

      // 닫는 괄호라면 top 부터 여는 괄호를 소거해야한다.
      if (stack[stack.length - 1] === matchingBrackets[char]) {
        stack.pop();
      } else false;
    }
  }
}
