class BST {
  value: number;
  left: BST | null;
  right: BST | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// T: O(n)
// S: O(d)
export function Solution1(tree: BST) {
  return validateBstHelper(tree, -Infinity, Infinity);
}

// idea: 노드의 값은 왼쪽 자식 노드보다는 크거나 같아야하고, 오른쪽 자식 노드보다는 작아야한다.
// 이 로직을 반복적으로 노드마다 적용시켜야한다. 그러려면 재귀적으로 트리의 왼쪽과 오른쪽을 파고드는 형식으로 짠다.
// 탈출조건은 해당 노드가 로직의 범위에 속하지 않을때 false, validate 해서 정상적으로 리프노드까지를 확인했을때 true 를 반환한다.

function validateBstHelper(
  tree: BST | null,
  minValue: number,
  maxValue: number
) {
  if (tree === null) return true;
  if (tree.value < minValue || tree.value >= maxValue) return false;

  const leftIsValid = validateBstHelper(tree.left, minValue, tree.value);
  const rightIsValid = validateBstHelper(tree.right, tree.value, maxValue);

  // 왼쪽을 파고들고 오른쪽을 파고들었을때 하나라도 validate 하지않으면 false
  return leftIsValid && rightIsValid;
}
