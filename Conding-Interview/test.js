// 1
const readline = require("readline");

let inputs = [];

(async () => {
  let rl = readline.createInterface({ input: process.stdin });

  for await (const line of rl) {
    inputs.push(line);

    rl.close();
  }

  let times = inputs.slice(1);

  // common range
  let maxStart = 0;
  let minEnd = 0;

  let _times = times.map((time) => time.split(/:| /));

  _times.forEach((_time) => {
    let _start = _time[0] + _time[1];
    let _end = _time[3] + _time[4];

    if (maxStart === 0 || +maxStart < +_start) maxStart = _start;
    if (minEnd === 0 || +minEnd > +_end) minEnd = _end;
  });

  if (+maxStart > +minEnd) {
    console.log("-1");

    process.exit();
  }

  let _maxStart = Array.from(maxStart);
  let _minEnd = Array.from(minEnd);

  // result
  console.log(
    `${_maxStart[0] + _maxStart[1]}:${_maxStart[2] + _maxStart[3]} ~ ${_minEnd[0] + _minEnd[1]}:${
      _minEnd[2] + _minEnd[3]
    }`
  );

  process.exit();
})();

// 2
const readline = require("readline");

let inputs = [];
let o = {};

(async () => {
  let rl = readline.createInterface({ input: process.stdin });

  rl.on("line", function (line) {
    inputs.push(line);
  }).on("close", function () {
    let _inputs = inputs
      .slice(1)
      .join("")
      .split("0")
      .filter((v) => v !== "1")
      .map((v) => v.length)
      .reduce((res, l) => (res *= helper(l)), 1);

    console.log(_inputs);

    process.exit();
  });
})();

function helper(length) {
  if (o[length]) return o[length];
  if (length === 1 || length === 2) return 1;

  return (o[length] = helper(length - 1) + helper(length - 2));
}

// 3
const readline = require("readline");

let inputs = [];
let board = [];

(async () => {
  let rl = readline.createInterface({ input: process.stdin });

  rl.on("line", function (line) {
    inputs.push(line);
  }).on("close", function () {
    let l = inputs[0];
    inputs.slice(1).forEach((input) => board.push(Array.from(input)));

    let sizeArr = new Array(l + 1).fill(0);
    for (let size = 1; size <= l; size += 1) {
      let count = 0;

      for (let x = 0; x < l; x += 1) {
        for (let y = 0; y < l; y += 1) {
          if (x + size <= l && y + size <= l) {
            if (checkAdj(size, x, y)) count += 1;
          }
        }
      }

      sizeArr[size] = count;
    }

    let total = sizeArr.reduce((r, v) => (r += v), 0);

    if (total > 0) console.log(`total: ${total}`);
    for (let i = 1; i <= l; i += 1) {
      if (sizeArr[i] > 0) console.log(`size[${i}]: ${sizeArr[i]}`);
    }

    process.exit();
  });
})();

function checkAdj(size, x, y) {
  if (board[x][y] === "0") return false;
  if (size === 1) return true;

  return checkAdj(size - 1, x + 1, y) && checkAdj(size - 1, x, y + 1) && checkAdj(size - 1, x + 1, y + 1);
}

// 4
const readline = require("readline");

let inputs = [];

(async () => {
  let rl = readline.createInterface({ input: process.stdin });

  rl.on("line", function (line) {
    inputs.push(line);
  }).on("close", function () {
    let priors = inputs[0].split(" ").reduce((priors, v, i) => {
      priors[String.fromCharCode(i + 65)] = v;

      return priors;
    }, {});

    let [r, c] = inputs[1].split(" ").map((v) => +v);

    let openInfos = [];
    inputs.slice(2, 2 + r).forEach((input) => openInfos.push(input));

    let genreInfos = [];
    inputs.slice(2 + r, 2 + r * 2).forEach((input) => genreInfos.push(input));

    let result = [];

    let p = ["Y", "O"];
    for (let k = 0; k <= p.length; k += 1) {
      let cur = [];

      for (let i = 0; i < r; i += 1) {
        for (let j = 0; j < c; j += 1) {
          if (openInfos[i][j] === p[k]) cur.push([genreInfos[i][j], i, j]);
        }
      }

      result.push(...cur.sort((a, b) => +priors[b[0]] - +priors[a[0]]));
    }

    for (let i = 0; i < result.length; i += 1) {
      console.log(`${result[i][0]} ${priors[result[i][0]]} ${result[i][1]} ${result[i][2]}`);
    }

    process.exit();
  });
})();

// 5.
const readline = require("readline");

let inputs = [];

(async () => {
  let rl = readline.createInterface({ input: process.stdin });

  rl.on("line", function (line) {
    inputs.push(line);
  }).on("close", function () {
    // ...

    process.exit();
  });
})();

const readline = require("readline");

let inputs = [];

(async () => {
  let rl = readline.createInterface({ input: process.stdin });

  rl.on("line", function (line) {
    inputs.push(line);
  }).on("close", function () {
    // HH:MM:SS
    const [playlistsLength, practiceTime] = inputs[0].split(" ");
    const practiceTimeToSec = timeToSec(practiceTime.split(":"));

    // HH:MM
    const playlists = inputs.slice(1);
    const playlistsToTimes = playlists.map((input) => input.split(":"));
    const playlistsToTimesToSec = playlistsToTimes.map((time) => timeToSec(time));

    let plays = new Array(+playlistsLength).fill(0);
    for (let i = 0; i < playlistsToTimesToSec.length; i += 1) {
      let currentPlaylist = i;
      let restTime = practiceTimeToSec;

      if (restTime === 0) continue;

      if (restTime >= playlistsToTimesToSec[i]) {
        restTime -= playlistsToTimesToSec[i];

        plays[currentPlaylist] += 1;
      } else if (restTime > 0) {
        plays[currentPlaylist] += 1;

        continue;
      }

      for (let j = i + 1; j < playlistsToTimesToSec.length; j += 1) {
        if (restTime >= playlistsToTimesToSec[j]) {
          restTime -= playlistsToTimesToSec[j];

          plays[currentPlaylist] += 1;
        } else if (restTime > 0) {
          plays[currentPlaylist] += 1;

          break;
        } else if (restTime === 0) break;
      }
    }

    let maxPlays = Math.max(...plays);
    let maxPlaysIndex = plays.indexOf(maxPlays);

    console.log(`${maxPlays} ${maxPlaysIndex + 1}`);

    process.exit();
  });
})();

function timeToSec(times) {
  let sec = 0;

  if (times.length === 3) {
    if (times[0]) sec += +times[0] * 3600;
    if (times[1]) sec += +times[1] * 60;
    if (times[2]) sec += +times[2];
  } else {
    if (times[0]) sec += +times[0] * 60;
    if (times[1]) sec += +times[1];
  }

  return sec;
}

// 2.
const readline = require("readline");

let inputs = [];
let result = [];

(async () => {
  let rl = readline.createInterface({ input: process.stdin });

  rl.on("line", function (line) {
    inputs.push(line);
  }).on("close", function () {
    const links = inputs.slice(1).map((link) => link.split(" "));
    const citiesLinks = links.map((link) => link.slice(0, 2));
    const allCities = citiesLinks.reduce((allCities, citiesLink) => allCities.concat(...citiesLink), []);
    const cities = new Set(allCities).size;

    // ...

    console.log(citiesLinks);

    process.exit();
  });
})();

// 3.
const readline = require("readline");

let inputs = [];

(async () => {
  let rl = readline.createInterface({ input: process.stdin });

  rl.on("line", function (line) {
    inputs.push(line);
  }).on("close", function () {
    const [N, Q] = inputs[0].split(" ");

    const itemsN = inputs.slice(1, N).map((item) => item.split(" "));
    const itemsQ = inputs.slice(N, N + Q + 1).map((item) => item.split(" "));

    const tree = Array(N).fill(0);
    itemsN.forEach(([parent, child]) => {
      tree[child] = +parent;
    });

    for (let i = 0; i < itemsQ.length; i += 1) {
      const [parent, child] = itemsQ[i];

      if (isParent(parent, child, tree)) console.log("yes");
      else console.log("no");
    }

    function isParent(parent, child) {
      if (+parent === tree[child]) return true;
      if (!tree[child]) return false;

      return isParent(parent, tree[child]);
    }

    process.exit();
  });
})();

// 4.
const readline = require("readline");

let inputs = [];

(async () => {
  let rl = readline.createInterface({ input: process.stdin });

  rl.on("line", function (line) {
    inputs.push(line);
  }).on("close", function () {
    const N = +inputs[0];
    const itemsN = inputs.slice(1, N + 1);

    const Q = +inputs[N + 1];
    const itemsQ = inputs.slice(N + 2);

    for (let i = 0; i < itemsQ.length; i += 1) {
      const text = itemsQ[i];
      let count = 0;

      for (let j = 0; j < itemsN.length; j += 1) {
        const word = itemsN[j];

        if (~word.indexOf(text)) count += 1;
      }

      console.log(count);
    }

    process.exit();
  });
})();
