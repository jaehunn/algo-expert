function powerset(items, len = items.length - 1) {
  if (len < 0) return [[]];

  const elem = items[len];
  const subSets = powerset(items, len - 1);
  const subSetsLen = subSets.length;

  for (let i = 0; i < subSetsLen; i += 1) {
    const currentSubSets = subSets[i];

    subSets.push([...currentSubSets, elem]);
  }

  return subSets;
}

function powerset(items) {
  const subSets = [[]];
  for (const elem of items) {
    const subSetsLen = subSets.length;

    for (let i = 0; i < subSetsLen; i += 1) {
      const currentSubSets = subSets[i];

      subSets.push([...currentSubSets, elem]);
    }
  }

  return subSets;
}
