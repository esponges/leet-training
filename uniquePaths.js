/* 
  62. Unique Paths
Attempted
Medium
Topics
Companies
There is a robot on an m x n grid. The robot is initially located at the top-left corner (i.e., grid[0][0]). The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]). The robot can only move either down or right at any point in time.

Given the two integers m and n, return the number of possible unique paths that the robot can take to reach the bottom-right corner.

The test cases are generated so that the answer will be less than or equal to 2 * 109.

 

Example 1:


Input: m = 3, n = 7
Output: 28
Example 2:

Input: m = 3, n = 2
Output: 3
Explanation: From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
1. Right -> Down -> Down
2. Down -> Down -> Right
3. Down -> Right -> Down

https://leetcode.com/problems/unique-paths/description/
*/

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  if (m == 1 || n == 1) return 1;

  let paths = 0;

  function getPath(x, y) {
    if (x == m && y == n) {
      paths++;
      return;
    }

    if (x < m) getPath(x + 1, y);
    if (y < n) getPath(x, y + 1);
  }

  // 1-indexed table
  getPath(2, 1);
  getPath(1, 2);

  console.log({ m, n });
  return paths;
};

const cases = [
  { m: 2, n: 1 },
  { m: 2, n: 2 },
  { m: 3, n: 2 },
  { m: 3, n: 3 },
  { m: 3, n: 4 },
  { m: 3, n: 5 },
  { m: 3, n: 6 },
  { m: 3, n: 7 },
];

cases.forEach((c) => {
  console.log(uniquePaths(c.m, c.n));
})

// DP still RTL

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  function dp(x, y) {
      if (x == 1 || y == 1) return 1;

      return dp(x - 1, y) + dp(x, y - 1);
  }

  return dp(n, m);
};
