/* 2348. Number of Zero-Filled Subarrays
Medium
2.1K
71
Companies
Given an integer array nums, return the number of subarrays filled with 0.

A subarray is a contiguous non-empty sequence of elements within an array.

 

Example 1:

Input: nums = [1,3,0,0,2,0,0,4]
Output: 6
Explanation: 
There are 4 occurrences of [0] as a subarray.
There are 2 occurrences of [0,0] as a subarray.
There is no occurrence of a subarray with a size more than 2 filled with 0. Therefore, we return 6.
Example 2:

Input: nums = [0,0,0,2,0,0]
Output: 9
Explanation:
There are 5 occurrences of [0] as a subarray.
There are 3 occurrences of [0,0] as a subarray.
There is 1 occurrence of [0,0,0] as a subarray.
There is no occurrence of a subarray with a size more than 3 filled with 0. Therefore, we return 9.
Example 3:

Input: nums = [2,10,2019]
Output: 0
Explanation: There is no subarray filled with 0. Therefore, we return 0. */

/**
 * @param {number []} nums
 * @returns {number}
 */
function zeroFilledSubarray(nums) {
  const subArrays = {};

  let chunkCount = 0;
  for (let i = 0; i < nums.length; i++) {
    const actual = nums[i];

    if (actual === 0) {
      chunkCount += 1;
    }

    if ((actual !== 0 || i === nums.length - 1) && chunkCount > 0) {
      // push to subArrays
      const key = Array(chunkCount)
        .fill()
        .map(() => 0)
        .join('');

      if (subArrays[key]) {
        subArrays[key] = [chunkCount, subArrays[key][1] + 1];
      } else {
        subArrays[key] = [chunkCount, 1];
      }

      // restart count
      chunkCount = 0;
    }
  }

  return subArrays;
}

const cases = [
  [1, 3, 0, 0, 2, 0, 0, 4],
  [0, 0, 0, 2, 0, 0],
  [2, 10, 2019],
];

cases.forEach((c) => {
  console.log(zeroFilledSubarray(c));
});
