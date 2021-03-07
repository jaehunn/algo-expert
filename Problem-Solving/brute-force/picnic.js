// 학생의 수가 주어지면 두 학생이 짝을 이뤄서 만들어지는 경우의 개수를 구하라.
// 이때, 서로 짝을 지을 수 있는 지에 대한 여부가 함께 주어진다.

// 조합의 개수를 구하는 가장 직관적인 방법은 완전 탐색이다.
// 재귀의 형태로 만드려면 답의 후보(짝을 이뤄 만들어지는 경우)를 만들어가는 과정을 조각들로 나누어야한다. (조각들로 답의 후보가 만들어진다.)
// 이떄 조각은 짝을 이루지 못한 학생들 중에서 두 학생을 짝을 이뤄주는 것으로 한다.

const areFriends = [
  [0, 1, 1, 1],
  [1, 0, 1, 1],
  [1, 1, 0, 1],
  [1, 1, 1, 0],
];

console.log(picnic(4, areFriends));

// function picnic(students, areFriends) {
//   let isPaired = new Array(students).fill(false);
//   let isFinished = false;

//   return countPairings();

//   function countPairings() {
//     isFinished = !isPaired.filter((pair) => !pair).length;

//     if (isFinished) return 1;

//     let result = 0; // TODO) 왜 외부 렉시컬에서 관리하면 안될까?
//     for (let i = 0; i < students; i += 1) {
//       for (let j = 0; j < students; j += 1) {
//         if (!isPaired[i] && !isPaired[j] && areFriends[i][j]) {
//           isPaired[i] = isPaired[j] = true;

//           result += countPairings();

//           isPaired[i] = isPaired[j] = false;
//         }
//       }
//     }

//     return result;
//   }
// }

// 위 코드의 문제: 짝의 순서를 다르게 인식해 중복이 발생한다. (0, 1) -> (2, 3) != (2, 3) -> (0, 1)
// 해결: 순서를 강제해야한다. -> 남아있는 학생들 중 가장 번호가 빠른 학생들을 짝을 이루도록 강제한다.

function picnic(students, areFriends) {
  let isPaired = new Array(students).fill(false);

  return countPairings();

  function countPairings() {
    let first = isPaired.indexOf(false);

    if (!~first) return 1; // -1 이면, 모두 짝을 이뤄 false 가 없다는 의미이므로 답의 후보가 완성된 것이다.

    let result = 0;

    for (let i = first + 1; i < students; i += 1) {
      // TODO) 외부 렉시컬로 first 를 관리하면 -1 를 잡아 areFriends[-1][i] 로 잡는다.

      // 짝을 이룰 수 있는 가장 빠른 학생을 찾는다.
      if (!isPaired[i] && areFriends[first][i]) {
        isPaired[first] = isPaired[i] = true;

        result += countPairings();

        isPaired[first] = isPaired[i] = false;
      }
    }

    return result;
  }
}

// 완전 탐색 알고리즘을 설계하기 이전에 답의 후보가 상한으로 얼마까지 나오는지 예상해야한다.
// 만약 10명의 학생이 짝을 이룰 수 있으면, 첫 학생은 9명과 짝을 이루고 (남아있는 학생 중에서)두번째 학생은 7 명과 짝을 이룬다.
// 9 x 7 x 5 x 3 x 1 = 945 가 되는 것을 알 수 있다.
