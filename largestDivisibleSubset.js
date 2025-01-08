/* 
368. Largest Divisible Subset
Medium
Topics
Companies
Given a set of distinct positive integers nums, return the largest subset answer such that every pair (answer[i], answer[j]) of elements in this subset satisfies:

answer[i] % answer[j] == 0, or
answer[j] % answer[i] == 0
If there are multiple solutions, return any of them.

 

Example 1:

Input: nums = [1,2,3]
Output: [1,2]
Explanation: [1,3] is also accepted.
Example 2:

Input: nums = [1,2,4,8]
Output: [1,2,4,8]
 

Constraints:

1 <= nums.length <= 1000
1 <= nums[i] <= 2 * 109
All the integers in nums are unique.
Seen this question in a real interview before?
1/5
Yes
No
Accepted
327.3K
Submissions
714.9K
Acceptance Rate
45.8%

https://leetcode.com/problems/largest-divisible-subset/description/
*/

// naïve approach for base cases
// this mostly requires DP as this solution is O(n^2)


/**
 * @param {number[]} nums
 * @return {number[]}
 */
var largestDivisibleSubset = function(nums) { // nums sorted asc?
  const combs = [];
  for (let i = nums.length - 1; i >= 0; i--) {
      const c = [nums[i]];
      for (let j = 0; j < nums.length; j++) {
          if (i == j) continue;
          if (nums[i] % nums[j] == 0) {
              c.push(nums[j]);
          }
      }
      combs.push(c);
  }

  return combs.sort((a, b) => b.length - a.length)[0];
};
