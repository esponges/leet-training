/* 
2033. Minimum Operations to Make a Uni-Value Grid
Medium
Topics
Companies
Hint
You are given a 2D integer grid of size m x n and an integer x. In one operation, you can add x to or subtract x from any element in the grid.

A uni-value grid is a grid where all the elements of it are equal.

Return the minimum number of operations to make the grid uni-value. If it is not possible, return -1.

 

Example 1:


Input: grid = [[2,4],[6,8]], x = 2
Output: 4
Explanation: We can make every element equal to 4 by doing the following: 
- Add x to 2 once.
- Subtract x from 6 once.
- Subtract x from 8 twice.
A total of 4 operations were used.
Example 2:


Input: grid = [[1,5],[2,3]], x = 1
Output: 5
Explanation: We can make every element equal to 3.
Example 3:


Input: grid = [[1,2],[3,4]], x = 2
Output: -1
Explanation: It is impossible to make every element equal.
 

Constraints:

m == grid.length
n == grid[i].length
1 <= m, n <= 105
1 <= m * n <= 105
1 <= x, grid[i][j] <= 104
Seen this question in a real interview before?
1/5
Yes
No
Accepted
22.6K
Submissions
42.6K
Acceptance Rate
53.2%

https://leetcode.com/problems/minimum-operations-to-make-a-uni-value-grid/description/
*/

/**
 * @param {number[][]} grid
 * @param {number} x
 * @returns {number}
 */
function minOperationsToMultiGrid (grid, x) {
  // make unidimensional 
  const nums = [...grid[0], ...grid[1]];

  function bubbleSort (arr, left, right) {
    console.log({ arr });
    if (left === right) return arr;

    // left 0 
    // right 3
    const subArray = arr.slice(left, right + 1);
    for (let i = 0; i < subArray.length; i++) {
      const left = subArray[i];
      const right = subArray[i + 1];

      if (left > right) {
        subArray[i] = right;
        subArray[i + 1] = left;
      }
    }

    return bubbleSort([...subArray.slice(0, right), ...arr.slice(right)], 0, right - 1);
  }

  const sorted = bubbleSort(nums, 0, nums.length - 1);
}

const cases = [
  [[[2,4],[6,8]], 2]
];

cases.forEach(c => {
  console.log(minOperationsToMultiGrid(c[0], c[1]));
});
