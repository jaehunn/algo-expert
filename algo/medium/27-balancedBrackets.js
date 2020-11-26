// parentheses-valid 문제는 stack 으로 풀린다.

// 매번 괄호를 매칭하기 번거로우므로 hash table 로 괄호를 관리하면 편하다
// split 보다 Array.from() 을 사용하자 (더 명시적이다)

// 여는 괄호에 대해서는 매칭되는 값을 stack 에 집어넣는다. 여는 괄호와 닫는 괄호는 hash table 에서 키와 값이 바뀌어도 상관없다
// 닫는 괄호 조건을 탔을 때, guard 로 처리하면 깔끔하다. 여기서 주의할 점이 있다.
// guard 를 하지않으면 ([]}) 와 같은 구성을 만났을때 } 를 무시하고 [ 와 매칭되는 ] 을 만나 결국 valid 처리가 되므로 주의한다.

// 괄호가 아닌 문자열과 구별되도록 닫는 괄호를 판단해야한다.
// 괄호아닌 문자열과 여는 괄호에 포함되지 않는 닫는 괄호를 구분지어야한다.*wip

function balancedBrackets(string) {
  const h = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  const list = Array.from(string);
  const stk = [];
  while (list.length) {
    const brk = list.shift();

    // open
    if (brk in h) stk.push(h[brk]);

    // close
    // wip
    if (stk.incldues(brk) && brk !== stk.pop()) return false;
  }

  return !stk.length;
}
