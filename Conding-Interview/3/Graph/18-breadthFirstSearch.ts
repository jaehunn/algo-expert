/**
 * You're given a Node class that has a name and an array of optional children nodes.
 * When put together, nodes form an acyclic tree-like structure
 *
 * Implement the breadthFirstSearch method on the Node class, which takes in an empty array,
 * traverses the tree using the Breath-first Search approach (specifically navigating the tree from left to right),
 * stores all of the nodes' names in the input array, and returns it.
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

  // O(v + e) / O(v)
  breadthFirstSearch(array: string[]) {
    const queue: Node[] = [this]; // start root
    while (queue.length) {
      const currentNode = queue.shift(); // dequeue

      // store
      array.push(currentNode.name);

      // enqueue childrens
      for (const children of currentNode.children) {
        queue.push(children);
      }
    }

    return array;
  }
}
