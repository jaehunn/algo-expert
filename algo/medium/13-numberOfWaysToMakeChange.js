// f0 = 1
// f1 += f(1 - ...x)
// f2 += f(2 - ...x)
// f3 += f(3 - ...x)
// fn += f(n - ...x)
// wip
function numberOfWaysToMakeChange(n, denoms) {
  if (n === 0) return 1;

  let res = [1];
  for (let i = 0; i < denoms.length; i += 1) {
    const denom = denoms[i];

    for (let j = 1; j <= n; j += 1) {
      // if (j >= n) res[j] += res[j - denom];
    }
  }

  return res[n];
}
