class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// function validateBst(tree) {
//   if (!tree) return true;

//   if (tree.left && tree.left.value >= tree.value) return false;
//   if (tree.right && tree.right.value < tree.value) return false;

//   return validateBst(tree.left) && validateBst(tree.right);
// }

// 단순히 직속 부모 노드의 값으로만 판단하면 안된다.
// 범위를 축소 업데이트하는 방식으로 접근

// O(n) / O(d)
function validateBst(tree) {
  return helper(tree, -Infinity, Infinity);

  // tree.left < tree.value <= tree.right
  function helper(tree, minValue, maxValue) {
    if (!tree) return true;

    console.log(minValue, maxValue);

    // guard
    if (minValue > tree.value || tree.value >= maxValue) return false;

    return (
      helper(tree.left, minValue, tree.value) &&
      helper(tree.right, tree.value, maxValue)
    );
  }
}
