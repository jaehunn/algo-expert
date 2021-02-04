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
function permutation(items, length = items.length) {
  if (length === 1) return items.map((item) => [item]);

  let result = [];

  const smallers = permutation(items.slice(1), length - 1);

  const firstItem = items[0];

  for (let i = 0; i < smallers.length; i += 1) {
    const smaller = smallers[i];

    for (let j = 0; j <= smaller.length; j += 1) {
      const prefix = smaller.slice(0, j);
      const suffix = smaller.slice(j);

      result.push(prefix.concat([firstItem], suffix));
    }
  }

  return result;
}

console.log(permutation([1, 2, 3], 1));
