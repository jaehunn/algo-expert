// top 은 따로 만들 필요없이 length - 1 로 접근한다.

// 복잡하게 생각할 거 없다. 각 인덱스에 해당하는 min max 를 객체형태로 관리한다.
// length 가 있을 때 비교를 수행한다. 즉 첫 push 가 아닐 때
// 비교는 가장 최근의 min max 와 number 를 각각 비교한다. 갱신 후 min max 객체를 배열 필드에 담는다.

// 인덱스에 따라 min max 를 결정지어놓으면, pop 했을 때 min max 갱신 대한 불필요한 로직이 사라진다.
// min 과 max 가 무조건 하나만 존재해야한다는 선입견을 벗어내야한다.

// 매번 min 과 max 를 업데이트시켜갈 수 있다.
// 그러나 pop 을 수행했을 때, min 을 pop 했는지 max 를 pop 했는지 알 도리가 없다.

// 처음에는 단순하고 무식하게 접근해야한다. 그래야 고쳐야할 점이 보인다.
// 처음부터 최적화시키려고하고, 추상화하면 분명한 로직 설계가 어렵다. 또 길을 잃어버린다.

class MinMaxStack {
  constructor() {
    this.minMaxStack = []; // [{min, max}, {min, max}, {min, max}...]
    this.stack = [];
  }

  peek() {
    return this.stack[this.stack.length - 1];
  }

  pop() {
    this.minMaxStack.pop();

    return this.stack.pop();
  }

  push(number) {
    const newMinMax = { min: number, max: number };

    if (this.minMaxStack.length) {
      const lastMinMax = this.minMaxStack[this.minMaxStack.length - 1];

      newMinMax.min = Math.min(lastMinMax.min, number);
      newMinMax.max = Math.max(lastMinMax.max, number);
    }

    this.minMaxStack.push(newMinMax);
    this.stack.push(number);
  }

  getMin() {
    return this.minMaxStack[this.minMaxStack.length - 1].min;
  }

  getMax() {
    return this.minMaxStack[this.minMaxStack.length - 1].max;
  }
}
