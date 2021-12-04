Write three functions that take in a Binary Search Tree (BST) and an empty array, traverse the BST, add its nodes` values to the input array, and return that array.

Thre three functions should traverse the BST using the in-order, pre-order, and post-order tree-traversal techniques, respectively.

Sample Input
10
5 15
2 5 x 22
1 x x x x x x x

Sample Output
inOrderTraverse: [1, 2, 5, 5, 10, 15, 22]
preOrderTraverse: [10, 5, 2, 1, 5, 15, 22]
postOrderTraverse: [1, 2, 5, 5 22, 15, 10]
