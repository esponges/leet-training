/* 
  The prefix sum is an algorithm that runs in o(n) time and uses o(n) space

  it works by summing the existing index with the cumulative sum of the previous numbers

  we store cumulative sum of the array to be able to retrieve the sum of subarrays from the array

  a = [0, 1, ... n];
  f = [a[0], f[0] + a[1], f[n-1] + a[n]];

  then we can retrieve the sum from a subarray by substracting the right side of the cumulative sum of f
  minus the left side minus 1 of f:

  sum[a to b] = f[r] - f[l-1]; 

  e.g.

  a = [1, 2, 3, 4, 5];
  
  retrieve the cumulative sum from a[3] to a[5];
  
  prefSum = [1, 3, 6, 10, 15];
  subArray = [3, 4, 5]; => 12

  sol = f[5] - f[3-1] = 15 - 3 = 12 
*/

// Example Leet Code Easy
// https://leetcode.com/problems/range-sum-query-immutable/

/* 
  303. Range Sum Query - Immutable
Solved
Easy
Topics
Companies
Given an integer array nums, handle multiple queries of the following type:

Calculate the sum of the elements of nums between indices left and right inclusive where left <= right.
Implement the NumArray class:

NumArray(int[] nums) Initializes the object with the integer array nums.
int sumRange(int left, int right) Returns the sum of the elements of nums between indices left and right inclusive (i.e. nums[left] + nums[left + 1] + ... + nums[right]).
 

Example 1:

Input
["NumArray", "sumRange", "sumRange", "sumRange"]
[[[-2, 0, 3, -5, 2, -1]], [0, 2], [2, 5], [0, 5]]
Output
[null, 1, -1, -3]

Explanation
NumArray numArray = new NumArray([-2, 0, 3, -5, 2, -1]);
numArray.sumRange(0, 2); // return (-2) + 0 + 3 = 1
numArray.sumRange(2, 5); // return 3 + (-5) + 2 + (-1) = -1
numArray.sumRange(0, 5); // return (-2) + 0 + 3 + (-5) + 2 + (-1) = -3
 

Constraints:

1 <= nums.length <= 104
-105 <= nums[i] <= 105
0 <= left <= right < nums.length
At most 104 calls will be made to sumRange.
Seen this question in a real interview before?
1/5
Yes
No
Accepted
633.1K
Submissions
952.1K
Acceptance Rate
66.5%

*/

// solved >80% runtime

var els = [];

/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    els = [];

    for (let i = 0; i < nums.length; i++) {
        if (i == 0) els.push(nums[i]);
        else els.push(nums[i] + els[i - 1]);
    }
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {
    return left > 0 ? els[right] - els[left - 1] : els[right];
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */

// cases
// ["NumArray","sumRange"]
// output [[[-1]],[0,0]]

// ["NumArray","sumRange","sumRange","sumRange"]
// [[[-2,0,3,-5,2,-1]],[0,2],[2,5],[0,5]]


/* 
  974. Subarray Sums Divisible by K
Attempted
Medium
Topics
Companies
Given an integer array nums and an integer k, return the number of non-empty subarrays that have a sum divisible by k.

A subarray is a contiguous part of an array.

 

Example 1:

Input: nums = [4,5,0,-2,-3,1], k = 5
Output: 7
Explanation: There are 7 subarrays with a sum divisible by k = 5:
[4, 5, 0, -2, -3, 1], [5], [5, 0], [5, 0, -2, -3], [0], [0, -2, -3], [-2, -3]
Example 2:

Input: nums = [5], k = 9
Output: 0
 

Constraints:

1 <= nums.length <= 3 * 104
-104 <= nums[i] <= 104
2 <= k <= 104
Seen this question in a real interview before?
1/5
Yes
No
Accepted
381.6K
Submissions
687.5K
Acceptance Rate
55.5%

https://leetcode.com/problems/subarray-sums-divisible-by-k/description/
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysDivByK = function(nums, k) {
  const sums = [];

  for (let i = 0; i < nums.length; i++) {
      if (i == 0) sums.push(nums[i]);
      else sums.push(nums[i] + sums[i - 1]);
  }

  let count = 0, left = 0, right = nums.length - 1;
  while (left <= right) {
      const sum = left > 0 ? sums[right] - sums[left - 1] : sums[right];
      if (sum % k == 0) count++;

      right--;
      if (right >= left) continue;

      // move pointers
      left++;
      right = nums.length - 1;
  }

  return count;
};

const cases = [
  [[4,5,0,-2,-3,1], 5],
  [[5], 9]
];

// TODO: Fix TLE due to the pointers
