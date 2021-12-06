Write a function that takes in a Binary Search Tree (BST) and a positive integer `k` and returns the kth largest integer contained in the BST.

You can assume that there will only be integer values in the BST and that `k` is less than or equal to the nubmer of nodes in the tree.

Also, for the purpose of this question, duplicate integers will be tested as distinct values. In other words, the second largest value in a BST containing values `{5, 7, 7}` will be `7` --not `5`.

Sample Input
tree=
15
5 20
2 5 17 22
1 3 x x x x x x

k = 3

Sample Output
17
