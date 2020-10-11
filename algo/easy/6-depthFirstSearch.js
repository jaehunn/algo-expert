class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }

  //  [A B C D E F G H I J K]
  depthFirstSearch(array) {
    const searchedItems = [this.name];

    helper(this.children);

    return searchedItems;

    function helper(nodes) {
      if (!nodes.length) return;

      // why do not 'for statement'?
      for (let i = 0; i < nodes.length; i += 1) {
        const currentNode = nodes[i];
        searchedItems.push(currentNode.name);
        helper(currentNode.children);
      }
    }
  }

  // 1. children 이 dfs-stack
  // 2. shift 로 멤버를 손상시키면 안된다.

  // O (v + e) / O(v)
  _depthFirstSearch(array) {
    array.push(this.name);
    for (const child of this.children) {
      child._depthFirstSearch(array);
    }

    return array;
  }
}
