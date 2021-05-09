const log = console.log;

// 1.
// function solution(targetCode, targetDay, data) {
//   let _data = data.map((item) => item.split(" ").map((value) => value.split("=")));

//   let items = [];
//   _data.forEach((item) => {
//     let o = {};
//     item.forEach(([key, value]) => {
//       o[key] = value;
//     });

//     items.push(o);
//   });

//   items.sort((a, b) => {
//     if (a["time"] === b["time"]) return 0;

//     return a["time"] < b["time"] ? -1 : 1;
//   });

//   let res = [];
//   items.forEach(({ price, code, time }) => {
//     const eqCode = targetCode === code;
//     const eqTime = targetDay === time.substring(0, 8);

//     if (eqCode && eqTime) res.push(+price);
//   });

//   return res;
// }

// log(
//   solution("012345", "20190620", [
//     "price=80 code=987654 time=2019062113",
//     "price=90 code=012345 time=2019062014",
//     "price=120 code=987654 time=2019062010",
//     "price=110 code=012345 time=2019062009",
//     "price=95 code=012345 time=2019062111",
//   ])
// );

// 2.
function solution(tickets, priors) {
  const len = Math.max(...tickets);

  let items = tickets.map((ticket, i) => [ticket, priors[i], i]);

  let res = [];
  let q = [];
  for (let i = 0; i <= len; i += 1) {
    q.push(...items.filter(([ticket]) => ticket === i));

    if (q.length === 1) {
      let item = q.shift();

      res.push(item[2]);
    }

    if (q.length > 1) {
      q.sort((a, b) => a[2] - b[2]);
      q.sort((a, b) => a[1] - b[1]);

      let item = q.shift();

      res.push(item[2]);
    }
  }

  while (q.length) {
    let item = q.shift();

    res.push(item[2]);
  }

  return res;
}

log(solution([0, 2, 5, 3, 3], [0, 3, 3, 1, 3]));

// 3.
// function solution(maps, p, r) {
//   // 4, 4
// }

// log(
//   solution(
//     [
//       [1, 28, 41, 22, 25, 79, 4],
//       [39, 20, 10, 17, 19, 18, 8],
//       [21, 4, 13, 12, 9, 29, 19],
//       [58, 1, 20, 5, 8, 16, 9],
//       [5, 6, 15, 2, 39, 8, 29],
//       [39, 7, 17, 5, 4, 49, 5],
//       [74, 46, 8, 11, 25, 2, 11],
//     ],
//     19,
//     6
//   )
// );

// 4. sql...
