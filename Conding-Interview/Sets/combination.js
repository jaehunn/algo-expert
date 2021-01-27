// with repitition
function r_combination(items, l = items.length) {
  if (l === 1) return items.map((item) => [item]);

  const res = [];

  items.forEach((item, index) => {
    const smallers = r_combination(items.slice(index), l - 1);

    smallers.forEach((smaller) => {
      res.push([item].concat(smaller));
    });
  });

  return res;
}

// without repetition
function combination(items, l = items.length) {
  if (l === 1) return items.map((item) => [item]);

  const res = [];

  items.forEach((item, index) => {
    const smallers = combination(items.slice(index + 1), l - 1);

    smallers.forEach((smaller) => {
      res.push([item].concat(smaller));
    });
  });

  return res;
}
