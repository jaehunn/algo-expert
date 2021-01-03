/**
 * You're given a Node class that has a name and an array of optional children nodes.
 * When put together, nodes form an acyclic tree-like structure.
 *
 * Implement the depthFirstSearch method on the Node class, which takes in an empty array, traverses the tree using the Depth-first Search approach (specifically navigating the tree from left to right),
 * stores all of the nodes' names in the input array, and return it.
 */
export class Node {
  name: string;
  children: Node[];

  constructor(name: string) {
    this.name = name;
    this.children = [];
  }

  addChild(name: string) {
    const newNode = new Node(name);

    this.children.push(newNode);

    return this;
  }

  // O (v + e) / O(v)
  depthFirstSearch(array: string[]) {
    array.push(this.name);

    for (const child of this.children) {
      child.depthFirstSearch(array);
    }

    return array;
  }
}
