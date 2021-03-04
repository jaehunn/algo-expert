// 5x5 게임판에서 (x, y) 좌표부터 특정단어를 찾을 수 있는지 확인하라.

// 문제의 핵심은 특정 좌표에 대해 어느 방향으로 가야할지 알 수 없다는 점이다. 따라서 완전 탐색을 통해 모든 인접한 경로(8개) 를 모두 검사해야한다.

// 1. 복잡도 생각하기
// 복잡도는 인접한 경로 8개를 매 단어마다 시행하므로 최악의 경우 8의 지수승이 된다. 따라서 단어 길이가 길다면 완점탐색이 아닌 다른 패러다임을 사용해야한다.

// 2. 답의 후보를 만드는 과정을 여러 선택(경로를 선택) 으로 나눈다. 을 생각한다.
// 인접한 자신을 제외한 8개의 좌표로 이동할 수 있다. -> 특정 좌표를 기준으로 방향성을 부여한 상대좌표를 이용하자.
// 계속 넘기지말고 재귀 내부함수를 따로 만들고 외부함수에서 렉시컬로 관리할 수도 있음

// (-1,-1) (-1,0) (-1,1)
// (0,-1)  (0,0)  (0,1)
// (1,-1)  (1,0)  (1,1)

// 3. 답의 후보 중에서 하나의 조각(매번 글자 하나를 검사한다.) 을 답의 일부로 만들고 나머지를 재귀호출한다.

// 4. 조각이 하나가 되는 경우를 기저사례로 택한다.
// (0) 재귀 첫부분에 입력범위를 검사하면 함수 재호출 지점에서 따로 범위를 검사할 필요가 없어진다.
// (1) 좌표의 글자와 첫 글자가 다른 경우 실패
// (2) 통과한 (1) 에서, 단어가 한 글자인 경우 성공

function hasWord(board, x, y, word) {
  const dx = [-1, -1, -1, 1, 1, 1, 0, 0];
  const dy = [-1, 0, 1, -1, 0, 1, -1, 1];

  return helper(x, y, word);

  function helper(x, y, word) {
    if (x < 0 || y < 0 || x > 4 || y > 4) return false;
    if (board[x][y] !== word[0]) return false;
    if (word.length === 1) return true;

    for (let direction = 0; direction < 8; direction += 1) {
      let nextX = x + dx[direction];
      let nextY = y + dy[direction];

      if (hasWord(nextX, nextY, word.substr(1))) return true;
    }

    return false;
  }
}

// 이 문제에서 정의는 (x, y) 좌표에서부터 주어진 단어를 찾을 수 있는가로 정의된다. 그러면 현재 좌표를 포함해 인접한 8개의 경로에 대한 정보가 필요하다.
// 인접한 8개의 경로에 대한 정보를 알아내는 것은 본 문제와 형식이 같은 또 다른 문제를 푸는 것이다. 따라서 부분 문제라고 한다.
