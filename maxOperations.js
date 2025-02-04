/*
  1679. Max Number of K-Sum Pairs
Medium
Topics
Companies
Hint
You are given an integer array nums and an integer k.

In one operation, you can pick two numbers from the array whose sum equals k and remove them from the array.

Return the maximum number of operations you can perform on the array.

 

Example 1:

Input: nums = [1,2,3,4], k = 5
Output: 2
Explanation: Starting with nums = [1,2,3,4]:
- Remove numbers 1 and 4, then nums = [2,3]
- Remove numbers 2 and 3, then nums = []
There are no more pairs that sum up to 5, hence a total of 2 operations.
Example 2:

Input: nums = [3,1,3,4,3], k = 6
Output: 1
Explanation: Starting with nums = [3,1,3,4,3]:
- Remove the first two 3's, then nums = [1,4,3]
There are no more pairs that sum up to 6, hence a total of 1 operation.
 

Constraints:

1 <= nums.length <= 105
1 <= nums[i] <= 109
1 <= k <= 109
Seen this question in a real interview before?
1/5
Yes
No
Accepted
397.9K
Submissions
716.7K
Acceptance Rate
55.5%

https://leetcode.com/problems/max-number-of-k-sum-pairs/description/
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function (nums, k) {
  let left = 0;
  let right = nums.length - 1;

  nums.sort((a, b) => a - b);

  let ops = 0;

  while (left < right) {
    const leftNum = nums[left];
    const rightNum = nums[right];
    const sum = leftNum + rightNum;

    if (sum == k) {
      ops++;
      left++;
      right--;
    } else if (sum < k) {
      // sum is smaller than k so try big bigger combination
      // by only moving the left side
      left++;
    } else {
      // sum is bigger than k so try a smaller combination
      // by moving the right side to get a smaller number
      right--;
    }
  }

  return ops;
};


const cases = [
  { nums: [1, 2, 3, 4], k: 5 },
  { nums: [3, 1, 3, 4, 3], k: 6 },
];

cases.forEach((c) => {
  console.log(maxOperations(c.nums, c.k));
});
