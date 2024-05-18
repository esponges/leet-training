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
  if (grid.length <= 1) return 0;

  // make unidimensional 
  const nums = [...grid[0], ...grid[1]];

  // check if they are divisible by x
  // otherwise they can't be equaled
  if (x > 1) {
    const remainder = nums[0] % x;
    for (n of nums) {
      if (n % x !== remainder) return -1;
    }
  }

  /**
   * 
   * @param {number[]} arr 
   * @param {number} left 
   * @param {number} right 
   * @returns {number[]}
   */
  function bubbleSort (arr, left, right) {
    if (left === right) return arr;

    for (let i = 0; i < right; i++) {
      const left = arr[i];
      const right = arr[i + 1];

      if (left > right) {
        arr[i] = right;
        arr[i + 1] = left;
      }
    }

    return bubbleSort(arr, 0, right - 1);
  }

  const sorted = bubbleSort(nums, 0, nums.length);

  // find median
  let median;

  const len = sorted.length;
  if (len / 2 !== 0) {
    // odd length, just get the middle value
    median = sorted[Math.floor(len/2)];
  } else {  
    // even length, calculate avg value of two mid values
    const left = Math.floor(len/2) - 1;
    const right = Math.ceil(len/2) - 1;
    median = (left + right) / 2;
  }

  let moves = 0;
  for (n of sorted) {
    if (n !== median) {
      moves += Math.abs(((n - median) / x));
    }
  }

  return moves;
}

const cases = [
  [[[2,4],[6,8]], 2],
  [[[1,5],[2,3]], 1],
  [[[1,2],[3,4]], 2]

];

cases.forEach(c => {
  console.log(minOperationsToMultiGrid(c[0], c[1]));
});
