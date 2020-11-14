// wip
// O(depth) / O(1)
class AncestralTree {
  constructor(name) {
    this.name = name;
    this.ancestor = null;
  }
}

// 1. 높이가 다른 자손의 높이를 맞춘다.
// 2. 부모가 일치할 때까지 거슬러 올라간다. 루트 Ancestor 로 수렴한다.

// lower 한 높이를 가진 자손을 higer 높이의 자손에 맞춘다. (최소 공배수 개념과 비슷)

function getYoungestCommonAncestor(topAncestor, descendantOne, descendantTwo) {
  const depthOne = getDescendantDepth(descendantOne, topAncestor);
  const depthTwo = getDescendantDepth(descendantTwo, topAncestor);

  if (depthOne > depthTwo) {
    return backtrackAncestralTree(
      descendantOne,
      descendantTwo,
      depthOne - depthTwo
    );
  }

  return backtrackAncestralTree(
    descendantTwo,
    descendantOne,
    depthTwo - depthOne
  );
}

function getDescendantDepth(descendant, topAncestor) {
  let depth = 0;

  while (descendant !== topAncestor) {
    depth++;

    descendant = descendant.ancestor;
  }

  return depth;
}

function backtrackAncestralTree(lowerDescendant, higherDescendant, diff) {
  while (diff > 0) {
    lowerDescendant = lowerDescendant.ancestor;

    diff--;
  }

  while (lowerDescendant !== higherDescendant) {
    lowerDescendant = lowerDescendant.ancestor;

    higherDescendant = higherDescendant.ancestor;
  }

  return lowerDescendant;
}
