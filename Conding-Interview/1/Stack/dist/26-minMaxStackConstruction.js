/**
 * Write a MinMaxStack class for a Min Max Stack. The class should support:
 * - Pushing and popping values on and off the stack.
 * - Peeking at the value at the top of the stack.
 * - Getting both the minimum and the maximum values in the stack at any given point in time.
 *
 * All class methods, when considered independently, should run in constant time and with constant space.
 */
var MinMaxStack = /** @class */ (function () {
    function MinMaxStack() {
        this.minMaxStack = [];
        this.stack = [];
    }
    // O(1) / O(1)
    MinMaxStack.prototype.peek = function () {
        return this.stack[this.stack.length - 1];
    };
    // O(1) / O(1)
    MinMaxStack.prototype.pop = function () {
        this.minMaxStack.pop(); // 동기화
        return this.stack.pop();
    };
    // O(1) / O(1)
    MinMaxStack.prototype.push = function (number) {
        var newMinMax = { min: number, max: number };
        if (this.minMaxStack.length) {
            var lastMinMax = this.minMaxStack[this.minMaxStack.length - 1];
            newMinMax.min = Math.min(lastMinMax.min, number);
            newMinMax.max = Math.max(lastMinMax.max, number);
        }
        this.minMaxStack.push(newMinMax);
        this.stack.push(number);
    };
    // O(1) / O(1)
    MinMaxStack.prototype.getMin = function () {
        return this.minMaxStack[this.minMaxStack.length - 1].min;
    };
    // O(1) / O(1)
    MinMaxStack.prototype.getMax = function () {
        return this.minMaxStack[this.minMaxStack.length - 1].max;
    };
    return MinMaxStack;
}());
