/* 75. Sort Colors
Medium
Topics
Companies
Hint
Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

You must solve this problem without using the library's sort function.

 

Example 1:

Input: nums = [2,0,2,1,1,0]
Output: [0,0,1,1,2,2]
Example 2:

Input: nums = [2,0,1]
Output: [0,1,2]
 

Constraints:

n == nums.length
1 <= n <= 300
nums[i] is either 0, 1, or 2.
 

Follow up: Could you come up with a one-pass algorithm using only constant extra space?

Seen this question in a real interview before?
1/5
Yes
No
Accepted
2.3M
Submissions
3.6M
Acceptance Rate
64.7%

https://leetcode.com/problems/sort-colors/description/
*/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// base cases bubble sort O(n^2)
var sortColors = function (nums) {
  function sort(limit) {
    if (limit == 0) return;

    for (let i = 0; i < limit; i++) {
      const actual = nums[i]; // 2 2
      const next = nums[i + 1]; // 0 1
      if (actual > next) {
        nums[i + 1] = actual;
        nums[i] = next;
      }
    }

    sort(limit - 1);
  }

  sort(nums.length - 1);
};

const cases = [
  [2, 0, 2, 1, 1, 0],
  [2, 0, 1],
];

cases.forEach(c => console.log(sortColors(c)));
