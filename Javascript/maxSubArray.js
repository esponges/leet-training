/* 53. Maximum Subarray
Medium
Topics
Companies
Given an integer array nums, find the 
subarray
 with the largest sum, and return its sum.

 

Example 1:

Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: The subarray [4,-1,2,1] has the largest sum 6.
Example 2:

Input: nums = [1]
Output: 1
Explanation: The subarray [1] has the largest sum 1.
Example 3:

Input: nums = [5,4,-1,7,8]
Output: 23
Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.
 

Constraints:

1 <= nums.length <= 105
-104 <= nums[i] <= 104
 

Follow up: If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle. 

https://leetcode.com/problems/maximum-subarray/
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
function maxSubArray(nums) {
  let max = null;
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length - i; j++) {
      const subArray = nums.slice(j, j + i + 1);
      const sum = subArray.reduce((acc, actual) => {
        return acc + actual;
      }, 0);
      if (sum > max || max === null) max = sum;
    }
  }

  return max;
}

const cases = [
  // [-2,1,-3,4,-1,2,1,-5,4],
  // [1],
  // [5,4,-1,7,8],
  // [-1,0],
  [-1]
];

cases.forEach(c => {
  console.log(maxSubArray(c));
})
