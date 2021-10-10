You're given a Node class that has name and an array of optional children nodes.
When put together, nodes form a acyclic tree-like structure.

Implement the depthFirstSearch method on the Node class, which takes in an empty array, traverses the tree using the Depth-First-Search (specifically navigating the tree from left to right), stores all of the node's names in the input array, and returns it.

Sample Input
A
B C D
E F x x G H
x x I J x K x x

Sample Output
[A, B, E, F, I, J, C, D, G, K, H]
