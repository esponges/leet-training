/*
64. Minimum Path Sum
Medium
Topics
Companies
Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right, which minimizes the sum of all numbers along its path.

Note: You can only move either down or right at any point in time.

 

Example 1:


Input: grid = [[1,3,1],[1,5,1],[4,2,1]]
Output: 7
Explanation: Because the path 1 → 3 → 1 → 1 → 1 minimizes the sum.
Example 2:

Input: grid = [[1,2,3],[4,5,6]]
Output: 12
 

Constraints:

m == grid.length
n == grid[i].length
1 <= m, n <= 200
0 <= grid[i][j] <= 200
Seen this question in a real interview before?
1/5
Yes
No
Accepted
1.3M
Submissions
2M
Acceptance Rate
64.7%

https://leetcode.com/problems/minimum-path-sum/description/
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */

var minPathSum = function (grid) {
  let sums = Infinity;

  function backtrack(arr, row, col, acc) {
    if (row == arr.length - 1 && col == arr[0].length - 1) {
      if (acc + arr[row][col] < sums) {
        sums = acc + arr[row][col];
      }
      return;
    }
  
    for (let i = 0; i < 2; i++) {
      const actual = arr[row][col];
      if (i == 0 && col < arr[0].length - 1) {
        // go right
        backtrack(arr, row, col + 1, acc + actual, sums);
      } else if (i == 1 && row < arr.length - 1) {
        backtrack(arr, row + 1, col, acc + actual, sums);
      }
    }
  }

  backtrack(grid, 0, 0, 0);

  return sums;
};

const cases = [
  [
    [1, 3, 1],
    [1, 5, 1],
    [4, 2, 1],
  ],
  [
    [1, 2, 3],
    [4, 5, 6],
  ],
];

cases.forEach((case1) => console.log(minPathSum(case1)));
