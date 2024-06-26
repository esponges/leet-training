/* 
167. Two Sum II - Input Array Is Sorted
Medium
Topics
Companies
Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.

Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.

The tests are generated such that there is exactly one solution. You may not use the same element twice.

Your solution must use only constant extra space.

 

Example 1:

Input: numbers = [2,7,11,15], target = 9
Output: [1,2]
Explanation: The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2].
Example 2:

Input: numbers = [2,3,4], target = 6
Output: [1,3]
Explanation: The sum of 2 and 4 is 6. Therefore index1 = 1, index2 = 3. We return [1, 3].
Example 3:

Input: numbers = [-1,0], target = -1
Output: [1,2]
Explanation: The sum of -1 and 0 is -1. Therefore index1 = 1, index2 = 2. We return [1, 2].
 

Constraints:

2 <= numbers.length <= 3 * 104
-1000 <= numbers[i] <= 1000
numbers is sorted in non-decreasing order.
-1000 <= target <= 1000
The tests are generated such that there is exactly one solution.
Seen this question in a real interview before?
1/5
Yes
No
Accepted
2M
Submissions
3.3M
Acceptance Rate
61.4%

https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/
*/

/**
 * 
 * @param {number[]} nums
 * @param {number} target 
 * @return {number[]} 
 */
function twoSum(nums, target) {
  if (nums.length === 2) return [1, 2];

  function binarySearch(arr) {
    if (arr[0] > target) return [];
    if (arr[arr.length - 1] <= target) return arr;

    const middle = Math.ceil(arr.length/2);
    return [...binarySearch(arr.slice(0, middle)), ...binarySearch(arr.slice(middle))];
  }

  const toSum = binarySearch(nums);

  let left = 0;
  let right = 0;
  while (left < toSum.length) {
    if (left === right) {
      right ++;
      continue;
    };

    const a = toSum[left];
    const b = toSum[right];

    if (a + b === target) return [left + 1, right + 1];

    if (right < toSum.length - 1) {
      right ++;
    } else {
      left ++;
      right = 0;
    }
  }
}

const cases = [
  [[2,7,11,15], 9],
  [[2, 3, 4], 6],
  [[-1, 0], -1]
];

cases.forEach(c => {
  console.log(twoSum(c[0], c[1]));
})
