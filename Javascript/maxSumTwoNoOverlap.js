/* 1031. Maximum Sum of Two Non-Overlapping Subarrays
Medium
2.5K
80
Companies
Given an integer array nums and two integers firstLen and secondLen, return the maximum sum of elements in two non-overlapping subarrays with lengths firstLen and secondLen.

The array with length firstLen could occur before or after the array with length secondLen, but they have to be non-overlapping.

A subarray is a contiguous part of an array.

 

Example 1:

Input: nums = [0,6,5,2,2,5,1,9,4], firstLen = 1, secondLen = 2
Output: 20
Explanation: One choice of subarrays is [9] with length 1, and [6,5] with length 2.
Example 2:

Input: nums = [3,8,1,3,2,1,8,9,0], firstLen = 3, secondLen = 2
Output: 29
Explanation: One choice of subarrays is [3,8,1] with length 3, and [8,9] with length 2.
Example 3:

Input: nums = [2,1,5,6,0,9,5,0,3,8], firstLen = 4, secondLen = 3
Output: 31
Explanation: One choice of subarrays is [5,6,0,9] with length 4, and [0,3,8] with length 3.
 

Constraints:

1 <= firstLen, secondLen <= 1000
2 <= firstLen + secondLen <= 1000
firstLen + secondLen <= nums.length <= 1000
0 <= nums[i] <= 1000 */

/**
 * @param {number[]} nums
 * @param {number} firstLen
 * @param {number} secondLen
 * @return {number}
 */
// TODO: incomplete solution
// checked over existing solutions but they are all hard to understand
var maxSumTwoNoOverlap = function(nums, firstLen, secondLen) {
  function getArraySum (arr) {
    return arr.reduce((a, b) => a + b, 0);
  }
  
  function getSubarrayMaxSum (arr, len) {
    // when array is smaller than len
    // no need to check for combinations
    if (arr.length <= len) return {
      subarrayMaxSum: getArraySum(arr),
      subarray: arr,
      left: [],
      right: []
    };

    let subarrayMaxSum = 0;
    let subarray = [];
    let left = [];
    let right = [];
    for (let i = len; i < nums.length; i++) {
      const prev = arr.slice(i - len, i);
      const sum = getArraySum(prev);
      
      if (sum > subarrayMaxSum) {
        subarrayMaxSum = sum;
        subarray = prev;
        left = arr.slice(0, i - len);
        right = arr.slice(i);
      }
    }

    return {
      subarrayMaxSum,
      subarray,
      left,
      right
    }
  }

  // use above function to determine which len has 
  // the highest sum and pick that combination first
  const first = getSubarrayMaxSum(nums, firstLen);
  const second = getSubarrayMaxSum(nums, secondLen);
  console.log({
    first,
    second
  });

  const max = first.maxPrevSum >= second.maxPrevSum ? first : second;
  const min = first.maxPrevSum >= second.maxPrevSum ? second : first;
  let subArrSums = max.maxPrevSum;

  const leftSum = getSubarrayMaxSum(min.left)
};

const cases = [
  // [[0,6,5,2,2,5,1,9,4], 1, 2],
  [[3,8,1,3,2,1,8,9,0], 3, 2],
];

cases.forEach(c => {
  console.log(maxSumTwoNoOverlap(c[0], c[1], c[2]));
});
