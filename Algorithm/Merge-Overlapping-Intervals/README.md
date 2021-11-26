Write a function that takes in a non-empty array of arbitrary intervals, merges any overlappings intervals, and returns the new intervals in no particular order.

Each interval `interval` is an array of two integers, with `integers[0]` as the start of the interval and `intervals[1]` as the end of the interval.

Note that back-to-back intervals aren't considered to overlapping.
For example, [1, 5] and [6, 7] aren't overlapping; however, [1, 6] and [6, 7] are indeed overlapping.

Also note that the start of any particular interval will always be less than or equal to the end of that interval.

Sample Input
[[1, 2], [3, 5], [4, 7], [6, 8], [9, 10]]

Sample Output
[[1, 2], [3, 8], [9, 10]]
