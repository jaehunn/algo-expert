function shortestCommonSupersequence(a, b) {
  let lcs = longestCommonSubsequence(a, b);

  if (lcs.length === 1 && lcs[0] === "") return a.concat(b);

  let r = [];

  let aI = 0;
  let bI = 0;
  let lcsI = 0;

  // flag (False: same with the lcs)
  let aF = true;
  let bF = true;

  while (lcsI < lcs.length) {
    if (aI < a.length) {
      if (aF && a[aI] !== lcs[lcsI]) {
        r.push(a[aI]);

        aI += 1;
      } else aF = false; // same word
    }

    if (bI < b.length) {
      if (bF && b[bI] !== lcs[lcsI]) {
        r.push(b[bI]);

        bI += 1;
      } else bF = false;
    }

    if (!aF && !bF) {
      r.push(lcs[lcsI]);

      lcsI += 1;
      aI += 1;
      bI += 1;
      aF = true;
      bF = true;
    }
  }

  // remain
  if (aI < a.length) {
    r = r.concat(a.slice(aI));
  }

  if (bI < b.length) {
    r = r.concat(b.slice(bI));
  }

  return r;
}
