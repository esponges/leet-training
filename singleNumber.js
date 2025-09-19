/* 137. Single Number II
Medium
Topics
Companies
Given an integer array nums where every element appears three times except for one, which appears exactly once. Find the single element and return it.

You must implement a solution with a linear runtime complexity and use only constant extra space.

 

Example 1:

Input: nums = [2,2,3,2]
Output: 3
Example 2:

Input: nums = [0,1,0,1,0,1,99]
Output: 99
 

Constraints:

1 <= nums.length <= 3 * 104
-231 <= nums[i] <= 231 - 1
Each element in nums appears exactly three times except for one element which appears once.
Seen this question in a real interview before?
1/5
Yes
No
Accepted
578.2K
Submissions
923.2K
Acceptance Rate
62.6%

https://leetcode.com/problems/single-number-ii/description/
*/

/**
 * @param {number[]} nums
 * @returns {number}
 */
function singleNumber(nums) {
  const o = {};

  for (n of nums) {
    if (!o[n]) {
      o[n] = 1;
    } else {
      o[n] = o[n] + 1;
      if (o[n] % 3 === 0) {
        delete o[n];
      };
    }
  }

  return Object.keys(o)[0];
}

const cases = [
  [2,2,3,2],
  [0,1,0,1,0,1,99],
];

cases.forEach(c => console.log(singleNumber(c)));
