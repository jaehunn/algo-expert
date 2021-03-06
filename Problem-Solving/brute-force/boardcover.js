// 흰 블록과 검은 블록이 존재하는 WxH 크기의 격자에서 흰 블록에만 세칸짜리 L 모양의 블록을 덮고 싶다.
// 블록은 회전가능하지만, 겹치거나 격자를 넘어서는 안된다. 격자를 모두 덮는 방법의 수는 어떻게 구할까?

// 격자의 흰 블록의 개수는 블록 3개로 이루어진 L 모양의 블록의 배수만큼 존재해야 덮을 수 있다. 이는 입력에서 제한한다고 가정한다.

console.log(
  boardCover([
    [1, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 1],
    [1, 1, 0, 0, 1, 1, 1],
  ])
);

// 경우의 수를 구하는 문제로 게임판을 덮는 모든 경우를 완전탐색으로 해결할 수 있다.
// 총 흰 블록의 수를 L 모양의 블록의 수(3) 로 나누면 L 모양의 블록을 내려놓을 수 있는 횟수를 구할 수 있다.
// 남은 횟수에서 L 모양의 블록을 하나씩 내려놓는 것을 답의 후보를 만드는 하나의 조각으로 한다.

// L 모양의 블록을 내려놓는 순서는 답에 영향을 받지않아야한다. 따라서 특정한 방식으로 답을 생성하도록 강제해야한다.
// 최상단 최좌측의 흰 블록부터 채우도록 강제한다. 이렇게 강제하면 중복이 발생하지 않는다.

// L 모양의 블록은 회전이 가능하다. 가능한 모양은 총 4 가지로 한정된다.

// 1. 최상단 최좌측의 횐 블록을 찾는다.
// 2. L 블록을 회전시켜 블록을 놓는다. (블록을 놓는 함수를 재귀적으로 호출한다.)
// 3. 하나의 답을 만들면 이전 단계로 돌아가 L 블록을 다시 들어낸다.

// L 모양의 블록은 회전되어 나타나는 형태를 상대좌표로 관리한다.

function boardCover(board) {
  // |0-1 00 01|
  // |1-1 10 11|

  const coverType = [
    [
      [0, 0],
      [1, 0],
      [0, 1],
    ],
    [
      [0, 0],
      [0, 1],
      [1, 1],
    ],
    [
      [0, 0],
      [1, 0],
      [1, 1],
    ],
    [
      [0, 0],
      [1, 0],
      [1, -1],
    ],
  ];

  return cover();

  function cover() {
    let x = -1;
    let y = -1;

    for (let i = 0; i < board.length; i += 1) {
      for (let j = 0; j < board[0].length; j += 1) {
        if (board[i][j] === 0) {
          x = i;
          y = j;

          break;
        }
      }

      if (x !== -1 && y !== -1) break;
    }

    if (x === -1 && y === -1) return 1; // completed

    let result = 0;
    for (let type = 0; type < 4; type += 1) {
      if (setBlock(x, y, type)) result += cover();

      setBlock(x, y, type, -1);
    }

    return result;
  }

  function setBlock(x, y, type, setCover = 1) {
    let flag = true;

    for (let i = 0; i < 3; i += 1) {
      let _x = x + coverType[type][i][0];
      let _y = y + coverType[type][i][1];

      // failed
      if (_x < 0 || _x >= board.length || _y < 0 || _y >= board[0].length) flag = false;
      else if ((board[_x][_y] += setCover) > 1) flag = false; // success
    }

    return flag;
  }
}
