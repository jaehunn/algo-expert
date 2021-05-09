// const h = {
//   zero: "0",
//   one: "1",
//   two: "2",
//   three: "3",
//   four: "4",
//   five: "5",
//   six: "6",
//   seven: "7",
//   eight: "8",
//   nine: "9",
// };

// function solution(s) {
//   let items = Array.from(s);
//   let res = "";

//   const result = helper(items, res);

//   return result;

//   function helper(items, res, cur = "") {
//     if (!items.length) {
//       if (h[cur]) {
//         res += h[cur];

//         cur = "";
//       }

//       if (!isNaN(+cur)) {
//         res += cur;

//         cur = "";
//       }

//       return res;
//     }

//     if (h[cur]) {
//       res += h[cur];

//       cur = "";
//     }

//     if (!isNaN(+cur)) {
//       res += cur;

//       cur = "";
//     }

//     cur += items.shift();

//     return helper(items, res, cur);
//   }
// }

// console.log(solution("one4seveneight"));

// 2
function solution(places) {
  let result = [];

  places.forEach((place) => {
    result.push(helper(place));
  });

  return result;
}

const h = {
  P: 1,
  O: 2,
  X: 0,
};

function helper(place) {
  for (let i = 1; i < 5; i += 1) {
    for (let j = 1; j < 5; j += 1) {
      const cur = place[i][j];

      if (h[cur] === 1) {
        if (h[place[i - 1][j - 1]] === 1) {
          if (h[place[i - 1][j]] >= 1 || h[place[i][j - 1]] >= 1) return 0;
        }

        if (h[place[i - 1][j]] === 1 || h[place[i][j - 1]] === 1) return 0;
      } else if (h[place[i - 1][j - 1]] === 1) {
        if (h[place[i - 1][j]] === 1 || h[place[i][j - 1]] === 1) return 0;
      }
    }
  }

  return 1;
}

console.log(
  solution([
    ["POOOP", "OXXOX", "OPXPX", "OOXOX", "POXXP"],
    ["POOPX", "OXPXP", "PXXXO", "OXXXO", "OOOPP"],
    ["PXOPX", "OXOXP", "OXPXX", "OXXXP", "POOXX"],
    ["OOOXX", "XOOOX", "OOOXX", "OXOOX", "OOOOO"],
    ["PXPXP", "XPXPX", "PXPXP", "XPXPX", "PXPXP"],
  ])
);

// 3.
// function solution(n, k, cmd) {
//   let items = Array(n)
//     .fill()
//     .map((_, i) => i);

//   let backTasks = [];
//   for (let i = 0; i < cmd.length; i += 1) {
//     if (cmd[i].length > 1) {
//       k = cmd[i][0] === "D" ? k + +cmd[i][2] : k - +cmd[i][2];
//     } else {
//       if (cmd[i] === "C") {
//         backTasks.push([k, [...items]]);

//         items.splice(k, 1);

//         if (k === items.length) k -= 1;
//       } else {
//         const [i, newItems] = backTasks.pop();

//         items = newItems;

//         if (i < k) k += 1;
//       }
//     }
//   }

//   let result = "";
//   for (let i = 0; i < n; i += 1) {
//     if (i === items[0]) {
//       result += "O";

//       items.shift();
//     } else result += "X";
//   }

//   return result;
// }

// console.log(solution(8, 2, ["D 2", "C", "U 3", "C", "D 4", "C", "U 2", "Z", "Z", "U 1", "C"]));
