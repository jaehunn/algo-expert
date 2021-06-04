// const readline = require("readline");

// const inputs = [];

// (async () => {
//   let rl = readline.createInterface({ input: process.stdin });

//   rl.on("line", function (line) {
//     inputs.push(line);
//   }).on("close", function () {
//     const [N, k] = inputs[0].split(" ");
//     const inputItems = inputs[1].split(" ");
//     const items = inputItems.slice(0, inputItems.length - 1).map((item, index) => [index + 1, +item]);
//     const newItems = [...items.slice(k - 1, items.length), ...items.slice(0, k - 1)];

//     const result = [];
//     while (1) {
//       for (let i = 0; i < newItems.length; i += 1) {
//         if (newItems[i][1] > 0) {
//           newItems[i][1] -= 1;

//           if (newItems[i][1] === 0) result.push(newItems[i][0]);
//         }
//       }

//       if (result.length === newItems.length) break;
//     }

//     console.log(result.join(" "));

//     process.exit();
//   });
// })();

const readline = require("readline");

const inputs = [];
let N = 0;
let board = [[]];

(async () => {
  let rl = readline.createInterface({ input: process.stdin });

  rl.on("line", function (line) {
    inputs.push(line);
  }).on("close", function () {
    N = inputs[0];

    const boardPos = inputs.slice(1, N + 1).map((row) => row.split(""));
    board = boardPos.slice(0, boardPos.length - 1);

    const pos = inputs[inputs.length - 1].split(" ");

    const firstPos = [+pos[0], +pos[1]];
    const secondPos = [+pos[2], +pos[3]];

    let firstMinDist = 100;
    let secondMinDist = 100;

    move(firstPos[0], firstPos[1], 0, firstMinDist);
    move(secondPos[0], secondPos[1], 0, secondMinDist);

    console.log(firstMinDist + secondMinDist);

    function move(x, y, cost, result) {
      if (x < 0 && x >= N && y < 0 && y >= N) return;

      if (board[x][y] === "X") return;
      if (board[x][y] === "D") {
        result = Math.min(result, cost);

        return;
      }

      move(x - 1, y, cost + 1, result); // left
      move(x, y + 1, cost + 1, result); // bottom
      move(x + 1, y, cost + 1, result); // right
      move(x, y - 1, cost + 1, result); // top
    }

    process.exit();
  });
})();
