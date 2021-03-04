// 1. 유사한 형태(1부터 k까지의 합을 구한다) 의 조각으로 나눈다.
// 2. 하나의 조각(숫자 n) 을 해결하고, 나머지 조각을 자신을 호출해 해결한다.

// * 숫자 1을 빼면 2부터 n까지의 합으로 1부터 k까지의 합을 구하는 문제와는 다른 형태가된다.
// * 더 이상 쪼개지지않도록 하는 조건이 반드시 포함되어야한다. 이와 같읁 조건은 모든 입력에 대해 이용될 수 있어야한다.

{
  function sum(n) {
    let res = 0;

    for (let i = 1; i <= n; i += 1) {
      res += i;
    }

    return res;
  }

  function rSum(n) {
    if (n === 1) return 1;

    return n + rSum(n - 1); // n 과 1부터 n-1까지의 합
  }
}

// n개의 원소 중 4개를 고르는 모든 경우의 수는? (중복을 허용하지 않는다.)
// 반복문으로 코드를 작성하게되면 4개에 대해 반복문을 작성해야한다. 4은 입력에 따라 달라지므로 반복문의 개수를 예측하지못한다.

// for (let i = 0; i < n; i += 1) {
//   for (let j = i + 1; j < n; j += 1) {
//     for (let k = j + 1; k < n; k += 1) {
//       for (let l = k + 1; l < n; l += 1) {
//         console.log(`${i} ${j} ${k} ${l}`);
//       }
//     }
//   }
// }

// 1. 남은 원소 중에서 하나의 원소를 택하는 형태
// 2. 원소를 하나 선택하고, 나머지를 자기 자신을 호출해 뽑는다. (다음에 뽑을 원소와 뽑은 횟수를 넘겨 기저 사례에 도달하도록 해야한다.)

function select(items, toSelect, selected = []) {
  if (toSelect === 0) {
    console.log(selected);

    return;
  }

  let startIndex = selected.length ? items.indexOf(selected[selected.length - 1]) + 1 : 0;

  for (let index = startIndex; index < items.length; index += 1) {
    selected.push(items[index]);

    select(items, toSelect - 1, selected);

    selected.pop();
  }
}
