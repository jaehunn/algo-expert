// brute-force
function powerSet(items, set = [[]], subSet = [], startIndex = 0) {
  for (let index = startIndex; index <= items.length; index += 1) {
    subSet.push(items[index]);

    set.push(subSet);

    powerSet(items, set, subSet, index + 1);

    subSet.pop();
  }

  return set;
}

// bitwise
function powerSet(items) {
  let set = [];

  const length = 2 ** items.length;
  for (let i = 0; i < length; i += 1) {
    let subSet = [];

    for (let j = 0; j < items.length; j += 1) {
      if (i & (1 << j)) subSet.push(items[j]);

      console.log(j);
    }

    set.push(subSet);
  }

  return set;
}

console.log(_powerSet([1, 2, 3, 4]));
