/* 162. Find Peak Element
Medium
Topics
Companies
A peak element is an element that is strictly greater than its neighbors.

Given a 0-indexed integer array nums, find a peak element, and return its index. If the array contains multiple peaks, return the index to any of the peaks.

You may imagine that nums[-1] = nums[n] = -∞. In other words, an element is always considered to be strictly greater than a neighbor that is outside the array.

You must write an algorithm that runs in O(log n) time.

 

Example 1:

Input: nums = [1,2,3,1]
Output: 2
Explanation: 3 is a peak element and your function should return the index number 2.
Example 2:

Input: nums = [1,2,1,3,5,6,4]
Output: 5
Explanation: Your function can return either index number 1 where the peak element is 2, or index number 5 where the peak element is 6.
 

Constraints:

1 <= nums.length <= 1000
-231 <= nums[i] <= 231 - 1
nums[i] != nums[i + 1] for all valid i.
Seen this question in a real interview before?
1/5
Yes
No
Accepted
1.5M
Submissions
3.2M
Acceptance Rate
46.0%

https://leetcode.com/problems/find-peak-element/description/
*/

/**
 * @param {number[]} nums
 * @returns {number}
 */

function findPeakElement(nums) {
  if (nums.length <= 1) return 0;

  function bs(arr, peaks, offset = 0) {
    const mid = Math.floor(arr.length / 2);
    if (arr[mid] > arr[mid - 1] && arr[mid] > arr[mid + 1]) {
      peaks.push(offset + mid);
      return;
    }
    if (arr.length <= 1) return;

    const left = nums.slice(0, mid);
    bs(left, peaks);
    const right = nums.slice(mid);
    bs(right, peaks, mid);
  }

  const res = [];
  bs(nums, res);

  return res[0];
}

const cases = [
  [1, 2, 3, 1],
  [1, 2, 1, 3, 5, 6, 4],
];

cases.forEach(c => {
  console.log(findPeakElement(c));
});
