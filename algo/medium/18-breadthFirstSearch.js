class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }

  breadthFirstSearch(array) {
    const queue = [this];
    while (queue.length) {
      const currentNode = queue.shift(); // dequeue

      array.push(currentNode.name); // search value

      // children enqueue
      for (const children of currentNode.children) {
        queue.push(children);
      }
    }

    return array;
  }
}
