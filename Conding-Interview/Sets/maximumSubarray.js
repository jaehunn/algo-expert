// kadane's
function kadanes(items, l = items.length) {
  let pre = items[0];
  let cur = items[0];

  for (let i = 1; i < l; i += 1) {
    pre = Math.max(pre + items[i], items[i]);
    cur = Math.max(cur, pre);
  }

  return cur;
}

function _kadanes(items, l = items.length) {
  for (let i = 1; i < l; i += 1) {
    items[i] = Math.max(items[i - 1] + items[i], items[i]); // progress or reset
  }

  return Math.max(...items);
}

// bf
function maximumSubarray(items, l = items.length) {
  let mI = 0; // start
  let mL = 0; // length
  let mS = null; // sum

  for (let i = 0; i < l; i += 1) {
    let sS = 0;

    for (let j = 1; j <= l - i; j += 1) {
      sS += items[i + (j - 1)];

      // update
      if (mS === null || sS > mS) {
        mS = sS;
        mI = i;
        mL = j;
      }
    }
  }

  return items.slice(mI, mI + mL);
}

// dp
function _maximumSubarray(items, l = items.length) {
  let mS = -Infinity; // sum
  let mI = 0; // start
  let mL = items.length; // end

  let cS = 0;
  let cI = 0;

  items.forEach((item, cL) => {
    cS += item;

    // update
    if (mS < cS) {
      mS = cS;
      mI = cI;
      mL = cL;
    }

    // reset
    if (cS < 0) {
      cS = 0;
      cI = cL + 1; // next
    }
  });

  return items.slice(mI, mL);
}
