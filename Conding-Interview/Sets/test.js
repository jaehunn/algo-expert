// power-set
function powerSet(item, l = items.length) {
  let res = [];

  let _l = 2 ** items.length;

  for (let i = 0; i < _l; i += 1) {
    let cur = [];

    for (let j = 0; j < l; j += 1) {
      if (i & (1 << j)) cur.push(items[j]);
    }
  }

  return res;
}
