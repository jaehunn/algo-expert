const readline = require("readline");

const inputs = [];

(async () => {
  let rl = readline.createInterface({ input: process.stdin });

  rl.on("line", function (line) {
    inputs.push(line);
  }).on("close", function () {
    const [N, k] = inputs.split(" ");

    const window = 7;
    const other = N - window;

    // combination calc

    const result = 1 + combinationCalc(window, 1) + combinationCalc(other + 1, 1);

    console.log(result % (10 ** 9 + 7));

    function combinationCalc(n, r) {
      return factorial(n) / (factorial(n - r) * factorial(r));
    }

    function factorial(n) {
      if (n === 1) return 1;

      return n * factorial(n - 1);
    }

    process.exit();
  });
})();

// 8 2
// 0000000 0 = 1
// 0000000 1 = 1
// 1 0000000 = 1

// ******* 0 = 7

// 0C0 = 1
// windowC1
// other+1C1
