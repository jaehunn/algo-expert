// brute-force
function bfPowerSet(items, res = [[]], cur = [], startI = 0) {
  for (let i = startI; i <= items.length; i += 1) {
    cur.push(items[i]);

    res.push([...cur]);

    bfPowerSet(items, res, cur, i + 1);

    cur.pop();
  }

  return res; // { ø, {1}, {1, 2}, {1, 2, 3}, {1, 3}, {2}, {2, 3}, {3}}
}

// wip
// bitwise
function bwPowerSet(items, l = items.length) {
  let res = [];

  const _l = 2 ** items.length;

  // 000 ø
  // 001 a
  // 010 b
  // 011 ab
  // 100 c
  // 101 ca
  // 110 cb
  // 111 abc

  for (let i = 0; i < _l; i += 1) {
    let cur = [];

    for (let j = 0; j < l; j += 1) {
      if (i & (1 << j)) cur.push(items[j]);
    }

    res.push(cur);
  }

  return res;
}
