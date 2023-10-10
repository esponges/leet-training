/* 1438. Longest Continuous Subarray With Absolute Diff Less Than or Equal to Limit
Medium
3.1K
133
Companies
Given an array of integers nums and an integer limit, return the size of the longest non-empty subarray such that the absolute difference between any two elements of this subarray is less than or equal to limit.

 

Example 1:

Input: nums = [8,2,4,7], limit = 4
Output: 2 
Explanation: All subarrays are: 
[8] with maximum absolute diff |8-8| = 0 <= 4.
[8,2] with maximum absolute diff |8-2| = 6 > 4. 
[8,2,4] with maximum absolute diff |8-2| = 6 > 4.
[8,2,4,7] with maximum absolute diff |8-2| = 6 > 4.
[2] with maximum absolute diff |2-2| = 0 <= 4.
[2,4] with maximum absolute diff |2-4| = 2 <= 4.
[2,4,7] with maximum absolute diff |2-7| = 5 > 4.
[4] with maximum absolute diff |4-4| = 0 <= 4.
[4,7] with maximum absolute diff |4-7| = 3 <= 4.
[7] with maximum absolute diff |7-7| = 0 <= 4. 
Therefore, the size of the longest subarray is 2.
Example 2:

Input: nums = [10,1,2,4,7,2], limit = 5
Output: 4 
Explanation: The subarray [2,4,7,2] is the longest since the maximum absolute diff is |2-7| = 5 <= 5.
Example 3:

Input: nums = [4,2,2,2,4,4,2,2], limit = 0
Output: 3
 

Constraints:

1 <= nums.length <= 105
1 <= nums[i] <= 109
0 <= limit <= 109
Accepted
117.2K
Submissions
240.1K
Acceptance Rate
48.8% */

/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number}
 */
// brute force approach
// todo passed 55/61 cases, however very large arrays are timing out
function longestSubarray(nums, limit) {
  if (nums.length === 1) return limit > 0 ? 1 : 0;

  let maxSubs = [[nums[0]], 0];

  let left = 0;
  let right = 1;
  while (right <= nums.length) {
    // stop checking whenever it's not possible
    // to have a bigger subarray than the actual
    if (Math.abs(left - nums.length - 1) <= maxSubs[0].length) break;

    const actualSubArray = nums.slice(left, right + 1);
    const min = Math.min(...actualSubArray);
    const max = Math.max(...actualSubArray);
    const diff = Math.abs(max - min);

    if (diff <= limit && actualSubArray.length > maxSubs[0].length) {
      maxSubs = [actualSubArray, diff];
    }

    if (right === nums.length - 1) {
      left++;
      right = left + 1;
    } else {
      right++;
    }
  }

  return maxSubs[0].length;
}

const cases = [
  [[8,2,4,7], 4],
  [[10, 1, 2, 4, 7, 2], 5],
  [[4,2,2,2,4,4,2,2], 0]
];

cases.forEach((c) => {
  console.log('RESULT', longestSubarray(c[0], c[1]));
});
