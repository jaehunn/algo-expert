/**
 * You're given three inputs, all of which are instances of an AncestralTree class that have an ancestor property pointing to their youngest ancestor.
 * The first inputs is the top ancestor in an ancestral tree (i.e., the only instance that has no ancestor--its ancestor property points to None / null),
 * and the other two inputs are descendants in the ancestral tree.
 *
 * Write a function that returns the youngest common ancestor to the two descendants.
 *
 * Note that a descendant is considered its own ancestor.
 * So in the simple ancestral tree below, the youngest common ancestor to nodes A and B is node A.
 */

// 1. depth 를 맞춘다
// 2. 같은 부모가 될때까지 추적한다

class AncestralTree {
  name: string;
  ancestor: AncestralTree | null;

  constructor(name: string) {
    this.name = name;
    this.ancestor = null;
  }
}

// O(d) / O(1)
function getYoungestCommonAncestor(
  topAncestor: AncestralTree,
  descendantOne: AncestralTree,
  descendantTwo: AncestralTree
) {
  const depthOne = getDescendantDepth(descendantOne, topAncestor);
  const depthTwo = getDescendantDepth(descendantTwo, topAncestor);

  return depthOne > depthTwo
    ? backtrackAncestralTree(descendantOne, descendantTwo, depthOne - depthTwo)
    : backtrackAncestralTree(descendantTwo, descendantOne, depthTwo - depthOne);
}

function getDescendantDepth(
  descendant: AncestralTree,
  topAncestor: AncestralTree
) {
  let depth = 0;
  while (descendant !== topAncestor) {
    depth++;

    descendant = descendant.ancestor!;
  }

  return depth;
}

function backtrackAncestralTree(
  lowerDescendant: AncestralTree,
  higherDescendant: AncestralTree,
  diff: number
) {
  while (diff > 0) {
    lowerDescendant = lowerDescendant.ancestor!;

    diff--;
  }

  while (lowerDescendant !== higherDescendant) {
    lowerDescendant = lowerDescendant.ancestor!;

    higherDescendant = higherDescendant.ancestor!;
  }

  return lowerDescendant;
}
