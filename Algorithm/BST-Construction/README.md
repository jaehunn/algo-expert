Write a `BST` class for a Binary Search Tree.
The class should support:

- Inserting values with the `insert` method.
- Removing values with the `remove` method; this method should only remove the first instance of a given value.
- Searching for values with the `contains` method.

Note that can't remove values from a single-node tree. In other words, calling the `remove` method on a single-cnode tree should simply not do anything.

Sample Input
10
5 15
2 5 13 22
1 x x x x 14 x x

Sample Output
`insert`(12):
10
5 15
2 5 13 22
1 x x x 12 14 x x

`remove`(10):
12
5 15
2 5 13 22
1 x x x x 14 x x

`contains`(15): true
