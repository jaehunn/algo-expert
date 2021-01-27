// combination
function r_combination(items, l = items.length) {
  if (l === 1) return items.map((item) => [item]);

  let r = [];

  items.forEach((item, i) => {
    let smallers = r_combination(items.slice(i), l - 1);

    smallers.forEach((smaller) => {
      r.push([item].concat(smaller));
    });
  });

  return r;
}

function combination(items, l = items.length) {
  if (l === 1) return items.map((item) => [item]);

  let r = [];

  items.forEach((item, i) => {
    let smallers = combination(items.slice(i + 1), l - 1);

    smallers.forEach((smaller) => {
      r.push([item].concat(smaller));
    });
  });

  return r;
}
