/**
 * Write a MinMaxStack class for a Min Max Stack. The class should support:
 * - Pushing and popping values on and off the stack.
 * - Peeking at the value at the top of the stack.
 * - Getting both the minimum and the maximum values in the stack at any given point in time.
 *
 * All class methods, when considered independently, should run in constant time and with constant space.
 */

interface MinMaxItem {
  min: number;
  max: number;
}

class MinMaxStack {
  minMaxStack: MinMaxItem[]; // [{ min, max }, ...]
  stack: number[];

  constructor() {
    this.minMaxStack = [];
    this.stack = [];
  }

  // O(1) / O(1)
  peek() {
    return this.stack[this.stack.length - 1];
  }

  // O(1) / O(1)
  pop() {
    this.minMaxStack.pop(); // 동기화

    return this.stack.pop();
  }

  // O(1) / O(1)
  push(number: number) {
    const newMinMax = { min: number, max: number };

    if (this.minMaxStack.length) {
      const lastMinMax = this.minMaxStack[this.minMaxStack.length - 1];

      newMinMax.min = Math.min(lastMinMax.min, number);
      newMinMax.max = Math.max(lastMinMax.max, number);
    }

    this.minMaxStack.push(newMinMax);
    this.stack.push(number);
  }

  // O(1) / O(1)
  getMin() {
    return this.minMaxStack[this.minMaxStack.length - 1].min;
  }

  // O(1) / O(1)
  getMax() {
    return this.minMaxStack[this.minMaxStack.length - 1].max;
  }
}
