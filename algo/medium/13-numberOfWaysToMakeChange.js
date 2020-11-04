// ex) denoms = [1, 5], n = 6
// denom: 1 -> [1 2 2 2 2 2 2]
// denom: 5 -> [1 2 2 2 2 3 3]

// iteration
function numberOfWaysToMakeChange(n, denoms) {
  // [0, 1, ... n], len = n + 1
  let res = Array(n + 1).fill(0);
  res[0] = 1;
  for (let i = 0; i < denoms.length; i += 1) {
    const denom = denoms[i];

    for (let j = 1; j <= n; j += 1) {
      if (j - denom >= 0) res[j] += res[j - denom];
    }
  }

  return res[n];
}

// 문제 패턴을 정확하게 꿰뚫어야 해답이보인다.
