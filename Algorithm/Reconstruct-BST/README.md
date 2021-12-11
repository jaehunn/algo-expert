- later on...

The pre-order traverseal of a Binary Tree is a traversal technique that starts at the tree's root node and visits nodes in the following order:

1. Current node
2. Left subtree
3. Right subtree

Given a non-empty array of integers representing the pre-order traversal of a Binary Search Tree (BST), write a function that creates the relevant BST and returns its root node.

The input array will contain the values of BST nodes in the order in which these nodes would be visited with a pre-order traversal.

Sample Input
preOrderTraversalValues = [10, 4, 2, 1, 5, 17, 19, 18]

Sample Output
10
4 17
2 5 x 19
1 x x x x x 18 x
