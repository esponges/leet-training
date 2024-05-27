/* 
962. Maximum Width Ramp
Medium
Topics
Companies
A ramp in an integer array nums is a pair (i, j) for which i < j and nums[i] <= nums[j]. The width of such a ramp is j - i.

Given an integer array nums, return the maximum width of a ramp in nums. If there is no ramp in nums, return 0.

 

Example 1:

Input: nums = [6,0,8,2,1,5]
Output: 4
Explanation: The maximum width ramp is achieved at (i, j) = (1, 5): nums[1] = 0 and nums[5] = 5.
Example 2:

Input: nums = [9,8,1,0,1,9,4,0,4,1]
Output: 7
Explanation: The maximum width ramp is achieved at (i, j) = (2, 9): nums[2] = 1 and nums[9] = 1.
 

Constraints:

2 <= nums.length <= 5 * 104
0 <= nums[i] <= 5 * 104
Seen this question in a real interview before?
1/5
Yes
No
Accepted
47.2K
Submissions
94.4K
Acceptance Rate
50.0%

https://leetcode.com/problems/maximum-width-ramp/description/
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxWidthRamp = function (nums) {
  const ordered = new Array(Math.max(...nums) + 1)
    .fill(undefined)
    .map((val) => new Array(0));

  for (let i = 0; i < nums.length; i++) {
    ordered[nums[i]].push(i);
  }

  let maxRamp = 0;
  for (let i = 0; i < nums.length; i++) {
    const actual = nums[i];
    const toCompare = ordered.slice(actual); 
    for (comp of toCompare) {
      for (val of comp) {
        if (val - i > maxRamp) {
          maxRamp = val - i
        };
      }
    }
  }

  return maxRamp;
};

const cases = [
  [1, 0, 0, 3, 5],
  [6, 0, 8, 2, 1, 5],
  [9, 8, 1, 0, 1, 9, 4, 0, 4, 1],
];

cases.forEach((c) => {
  console.log(maxWidthRamp(c));
});
