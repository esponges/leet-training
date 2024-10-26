/* 
47. Permutations II
Solved
Medium
Topics
Companies
Given a collection of numbers, nums, that might contain duplicates, return all possible unique permutations in any order.

 

Example 1:

Input: nums = [1,1,2]
Output:
[[1,1,2],
 [1,2,1],
 [2,1,1]]
Example 2:

Input: nums = [1,2,3]
Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
 

Constraints:

1 <= nums.length <= 8
-10 <= nums[i] <= 10

https://leetcode.com/problems/permutations-ii/description/
*/


/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
  const perms = new Set();

  function backtrack(p, used) {
      if (p.length == nums.length) {
          const string = p.join('.');
          perms.add(string);
          return;
      }

      for (let i = 0; i < nums.length; i++) {
          if (!used[i]) {
              used[i] = true;
              backtrack([...p, nums[i]], used);
              used[i] = false;
          }
      }
  }

  const memo = new Array(nums.length).fill(false);

  backtrack([], memo);

  return Array
      .from(perms)
      .map(p => p.split('.')
      .map(n => parseInt(n)));
};

const cases = [
  [1, 1, 2],
  [1, 2, 3],
];

cases.forEach(c => console.log(permuteUnique(c)));
