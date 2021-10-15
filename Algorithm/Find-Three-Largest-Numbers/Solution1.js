"use strict";
exports.__esModule = true;
exports.shiftAndUpdate = exports.helper = exports.Solution1 = void 0;
// test
Solution1([141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7]);
// T: O(n)
// S: O(1)
function Solution1(array) {
    var threeLargest = [null, null, null];
    for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
        var num = array_1[_i];
        helper(threeLargest, num);
    }
    return threeLargest;
}
exports.Solution1 = Solution1;
function helper(threeLargest, num) {
    if (threeLargest[2] === null || num > threeLargest[2]) {
        shiftAndUpdate(threeLargest, num, 2);
    }
    else if (threeLargest[1] === null || num > threeLargest[1]) {
        shiftAndUpdate(threeLargest, num, 1);
    }
    else if (threeLargest[0] === null || num > threeLargest[0]) {
        shiftAndUpdate(threeLargest, num, 0);
    }
}
exports.helper = helper;
function shiftAndUpdate(array, num, idx) {
    for (var i = 0; i <= idx; i += 1) {
        if (i === idx) {
            array[i] = num;
        }
        else {
            array[i] = array[i + 1];
        }
    }
}
exports.shiftAndUpdate = shiftAndUpdate;
