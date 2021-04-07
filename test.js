const log = console.log;

// 1.
function solution(cards, wants) {
  let ok = 0;

  for (let i = 0; i < cards.length; i += 1) {
    if (cards[i] === wants[i]) ok += 1;
    else {
      for (let j = i + 1; j < cards.length; j += 1) {
        if (wants[i] === cards[j]) {
          [cards[i], cards[j]] = [cards[j], cards[i]];

          ok += 1;

          break;
        }
      }
    }
  }

  return cards.length - ok;
}

// solution([5, 4, 5, 4, 5], [1, 2, 3, 5, 4]);

// [4, 5, 3, 2, 1]	[2, 4, 4, 5, 1]
// 0: [2, 5, 3, 4, 1] ok
// 1: [2, 4, 3, 5, 1]
// 2: [2, 4, x, 5, 1]
// 3: ok
// 4: ok
// 5: ok

// [5, 4, 5, 4, 5]	[1, 2, 3, 5, 4]
// [x, 4, 5, 4, 5]
// [x, x, 5, 4, 5]
// [x, x, x, 4, 5]
// [x, x, x, 5, 4]
// [x, x, x, 5, 4]

// 2.
function solution(needs, r) {
  let rCount = Array(needs[0].length)
    .fill(0)
    .map((_, i) => ({ i, v: 0 }));

  for (let i = 0; i < needs.length; i += 1) {
    for (let j = 0; j < needs[0].length; j += 1) {
      if (needs[i][j] === 1) rCount[j].v += 1;
    }
  }

  const maxRIs = rCount
    .sort((a, b) => b.v - a.v)
    .slice(0, r)
    .map((o) => o.i); // [0, 1]

  let result = 0;
  for (let i = 0; i < needs.length; i += 1) {
    let flag = false;
    for (let j = 0; j < needs[0].length; j += 1) {
      if (needs[i][j] === 1) {
        if (!~maxRIs.indexOf(j)) {
          flag = false;

          break;
        } else flag = true;
      }
    }

    if (flag) result += 1;
  }

  return result;
}

// solution(
//   [
//     [1, 0, 0], // 0번 0 필요
//     [1, 1, 0], // 1번 0,1 필요
//     [1, 1, 0], // 2번 0,1 필요
//     [1, 0, 1], // 3번 0,2 필요
//     [1, 1, 0], // 4번 0,1 필요
//     [0, 1, 1], // 5번 1,2 필요
//   ],
//   2
// );

// 3.
let end = 0;
let people = 0;

function _solution(n, P, T) {
  let V = Array(n).fill(false);

  V[0] = true;
  dfs(1, P[0], P, T, V);

  return [end, people];
}

function dfs(start, cur, P, T, V) {
  for (let i = 0; i < T.length; i += 1) {
    let [s, e] = T[i];

    if (!V[e - 1] && s === start) {
      V[e - 1] = true;
      dfs(e, cur + P[e - 1], P, T, V);
    }
  }

  if (people <= cur) {
    people = cur;
    end = start;
  }
}

log(
  _solution(
    5,
    [1, 1, 2, 3, 4],
    [
      [1, 2],
      [2, 3],
      [3, 4],
      [4, 1],
    ]
  )
);
