export class Node {
  name: string;
  children: Node[];

  constructor(name: string) {
    this.name = name;
    this.children = [];
  }

  addChild(name: string) {
    this.children.push(new Node(name));

    return this;
  }

  // T: O(v + e), v is the number of nodes and e is the number of edges
  // S: O(v)
  depthFirstSearch(array: string[]) {
    array.push(this.name);

    for (const child of this.children) {
      child.depthFirstSearch(array);
    }

    return array;
  }
}
