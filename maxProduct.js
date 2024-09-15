/* 152. Maximum Product Subarray
Medium
Topics
Companies
Given an integer array nums, find a 
subarray
 that has the largest product, and return the product.

The test cases are generated so that the answer will fit in a 32-bit integer.

 

Example 1:

Input: nums = [2,3,-2,4]
Output: 6
Explanation: [2,3] has the largest product 6.
Example 2:

Input: nums = [-2,0,-1]
Output: 0
Explanation: The result cannot be 2, because [-2,-1] is not a subarray.
 

Constraints:

1 <= nums.length <= 2 * 104
-10 <= nums[i] <= 10
The product of any subarray of nums is guaranteed to fit in a 32-bit integer.
Seen this question in a real interview before?
1/5
Yes
No
Accepted
1.4M
Submissions
4.1M
Acceptance Rate
33.9%

https://leetcode.com/problems/maximum-product-subarray/description/
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
  if (nums.lenght === 1) return nums[0];

  let max = 0;
  function recursion(acc, index, count) {
      if (index == nums.length - 1) {
          return;
      }
      max = Math.max(max, acc);

      const actual = nums[index];
      const calc = count == 0 ? actual : acc * actual;
      // continue actual recursion line
      recursion(calc, index + 1, count + 1);
      // start next sequence
      recursion(0, index + 1, 0);
  }

  recursion(0, 0, 0);

  return max;
};

const cases = [
  [[2,3,-2,4]],
  [[-2,0,-1]],
];

cases.forEach(c => console.log(maxProduct(c)));
