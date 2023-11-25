/* 1743. Restore the Array From Adjacent Pairs
Medium
1.9K
69
Companies
There is an integer array nums that consists of n unique elements, but you have forgotten it. However, you do remember every pair of adjacent elements in nums.

You are given a 2D integer array adjacentPairs of size n - 1 where each adjacentPairs[i] = [ui, vi] indicates that the elements ui and vi are adjacent in nums.

It is guaranteed that every adjacent pair of elements nums[i] and nums[i+1] will exist in adjacentPairs, either as [nums[i], nums[i+1]] or [nums[i+1], nums[i]]. The pairs can appear in any order.

Return the original array nums. If there are multiple solutions, return any of them.

 

Example 1:

Input: adjacentPairs = [[2,1],[3,4],[3,2]]
Output: [1,2,3,4]
Explanation: This array has all its adjacent pairs in adjacentPairs.
Notice that adjacentPairs[i] may not be in left-to-right order.
Example 2:

Input: adjacentPairs = [[4,-2],[1,4],[-3,1]]
Output: [-2,4,1,-3]
Explanation: There can be negative numbers.
Another solution is [-3,1,4,-2], which would also be accepted.
Example 3:

Input: adjacentPairs = [[100000,-100000]]
Output: [100000,-100000]
 

Constraints:

nums.length == n
adjacentPairs.length == n - 1
adjacentPairs[i].length == 2
2 <= n <= 105
-105 <= nums[i], ui, vi <= 105
There exists some nums that has adjacentPairs as its pairs.
Accepted
101.4K
Submissions
134.8K
Acceptance Rate
75.2%

https://leetcode.com/problems/restore-the-array-from-adjacent-pairs/
*/

/**
 * 
 * @param {number[][]} adjacentPairs
 * @returns {number[]} 
 */
function restoreArray(adjacentPairs) {
  const all = [];
  adjacentPairs.forEach(pair => { 
    all.push(...pair);
  });
  
  // map preseves order and object doesn't
  const freq = new Map();
  for (let i = 0; i < all.length; i++) {
    const actual = all[i];
    if (!freq.has(actual)) {
      // add to map with one count
      freq.set(actual, 1);
    } else {
      // increase freq
      freq.set(actual, freq.get(actual) + 1);
    }
  }
  
  const nums = [];
  // now iterate over the map placing first the first single element
  freq.forEach((val, key) => {
    if (!Array.isArray(nums[0])) {
      if (val > 1) nums.push(key); 
      // forEach can't reassing therefore we'll use an array
      // to mark the number as being first
      else nums.unshift([key]);
    } else {
      nums.push(key);
    }
  });
  // remove first being array
  nums[0] = nums[0][0];

  return nums;
}

const cases = [
  [[2,1],[3,4],[3,2]],
  [[4,-2],[1,4],[-3,1]],
  [[100000,-100000]]
];

cases.forEach(c => {
  console.log(restoreArray(c));
})
