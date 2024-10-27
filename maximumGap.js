/* 
  164. Maximum Gap
Medium
Topics
Companies
Given an integer array nums, return the maximum difference between two successive elements in its sorted form. If the array contains less than two elements, return 0.

You must write an algorithm that runs in linear time and uses linear extra space.

 

Example 1:

Input: nums = [3,6,9,1]
Output: 3
Explanation: The sorted form of the array is [1,3,6,9], either (3,6) or (6,9) has the maximum difference 3.
Example 2:

Input: nums = [10]
Output: 0
Explanation: The array contains less than 2 elements, therefore return 0.
 

Constraints:

1 <= nums.length <= 105
0 <= nums[i] <= 109
Seen this question in a real interview before?
1/5
Yes
No
Accepted
238.2K
Submissions
500.7K
Acceptance Rate
47.6%

https://leetcode.com/problems/maximum-gap/description/
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
// accepted 80%/20%
var maximumGap = function (nums) {
  if (nums.length < 2) return 0;

  const vals = {};

  nums.forEach((v) => (vals[v] = true));

  let max = 0;
  let prev;
  Object.keys(vals).forEach((v) => {
    if (i == 0) prev = v;
    const diff = Math.abs(v - prev);
    if (diff > max) max = diff;
    prev = v;
  });

  return max;
};

const cases = [
  [3, 6, 9, 1],
  [10],
];

cases.forEach((c) => {
  console.log(maximumGap(c));
});
