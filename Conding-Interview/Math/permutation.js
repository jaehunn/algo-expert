// with repetition
function r_permutation(items, len = items.length) {
  if (len === 1) return items.map((v) => [v]);

  let res = [];

  let smallers = r_permutation(items, len - 1);

  for (let i = 0; i < items.length; i += 1) {
    for (let j = 0; j < smallers.length; j += 1) {
      res.push([items[i]].concat(smallers[j]));
    }
  }

  return res;
}

// without repetition
function permutation(items) {
  if (items.length === 1) return [items];

  let res = [];

  const smallers = permutation(items.slice(1));

  const first = items[0];

  for (let i = 0; i < smallers.length; i += 1) {
    const smaller = smallers[i];

    for (let j = 0; j <= smaller.length; j += 1) {
      const pre = smaller.slice(0, j);
      const suf = smaller.slice(j);

      res.push(pre.concat([first], suf));
    }
  }

  return res;
}

function solve(items) {
  const res = [];

  hlpr(items, [], res);

  return res;
}

function hlpr(items, cur, res) {
  if (!items.length && cur.length) {
    res.push(cur);
  } else {
    for (let i = 0; i < items.length; i += 1) {
      const newItems = items.slice(0, i).concat(items.slice(i + 1));
      const newPermu = cur.concat([items[i]]);

      hlpr(newItems, newPermu, res);
    }
  }
}
