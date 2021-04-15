{
  function staircaseTraversal(height, maxSteps) {
    return numberOfWaysToTop(height, maxSteps);
  }

  function numberOfWaysToTop(height, maxSteps) {
    if (height <= 1) return 1;

    let numberOfWays = 0;
    for (let step = 1; step <= Math.min(height, maxSteps); step += 1) {
      numberOfWays += numberOfWaysToTop(height - step, maxSteps);
    }

    return numberOfWays;
  }
}

{
  function staircaseTraversal(height, maxSteps) {
    return numberOfWaysToTop(height, maxSteps, { 0: 1, 1: 1 });
  }

  function numberOfWaysToTop(height, maxSteps, memoize) {
    if (height in memoize) return memoize[height];

    let numberOfWays = 0;
    for (let step = 1; step <= Math.min(height, maxSteps); step += 1) {
      numberOfWays += numberOfWaysToTop(height - step, maxSteps, memoize);
    }

    memoize[height] = numberOfWays;

    return numberOfWays;
  }
}

// 1 1 2 3 5 ... fibonacci

{
  function staircaseTraversal(height, maxSteps) {
    const waysToTop = new Array(height + 1).fill(0);

    waysToTop[0] = 1;
    waysToTop[1] = 1;

    for (let currentHeight = 2; currentHeight <= height; currentHeight += 1) {
      let step = 1;

      while (step <= maxSteps && step <= currentHeight) {
        waysToTop[currentHeight] += waysToTop[currentHeight - step];

        step += 1;
      }
    }

    return waysToTop[height];
  }
}

{
  // wip
  function staircaseTraversal(height, maxSteps) {
    let currentNumberOfWays = 0;

    const waysToTop = [1];

    for (let currentHeight = 1; currentHeight <= height; currentHeight += 1) {
      const startOfWindow = currentHeight - maxSteps - 1;
      const endOfWindow = currentHeight - 1;

      if (startOfWindow >= 0) currentNumberOfWays -= waysToTop[startOfWindow];

      currentNumberOfWays += waysToTop[endOfWindow];
      waysToTop.push(currentNumberOfWays);
    }

    return waysToTop[height];
  }
}
