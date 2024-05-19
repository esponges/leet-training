/* 198. House Robber
Medium
Topics
Companies
You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.

 

Example 1:

Input: nums = [1,2,3,1]
Output: 4
Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
Total amount you can rob = 1 + 3 = 4.
Example 2:

Input: nums = [2,7,9,3,1]
Output: 12
Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
Total amount you can rob = 2 + 9 + 1 = 12.
 

Constraints:

1 <= nums.length <= 100
0 <= nums[i] <= 400
Seen this question in a real interview before?
1/5
Yes
No
Accepted
2.2M
Submissions
4.3M
Acceptance Rate
51.0% 

https://leetcode.com/problems/house-robber/description/
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  function traverse(arr) {
      if (arr.length <= 1) return arr[0] || 0;
      
      let max = 0;
      const occs = {};

      for (let i = 0; i < arr.length; i++) {
          const actual = arr[i];

          if (!occs[actual]) occs[actual] = [i];
          else occs[actual].push(i);

          if (actual > max) max = actual;
      }

      const maxVal = max;
      const sums = [];

      for (repIdx of occs[maxVal]) {
          const left = arr.slice(0, repIdx - 1);
          const right = arr.slice(repIdx + 2);

          const res = maxVal + traverse(left) + traverse(right);
          sums.push(res);
      }

      return Math.max(sums);
  }

  return traverse(nums);
};

const cases = [
  [1,2,3,1],
  [2,7,9,3,1],
];

cases.forEach(c => console.log(rob(c))); 
