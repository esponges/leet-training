/* 2592. Maximize Greatness of an Array
Medium
390
12
Companies
You are given a 0-indexed integer array nums. You are allowed to permute nums into a new array perm of your choosing.

We define the greatness of nums be the number of indices 0 <= i < nums.length for which perm[i] > nums[i].

Return the maximum possible greatness you can achieve after permuting nums.

 

Example 1:

Input: nums = [1,3,5,2,1,3,1]
Output: 4
Explanation: One of the optimal rearrangements is perm = [2,5,1,3,3,1,1].
At indices = 0, 1, 3, and 4, perm[i] > nums[i]. Hence, we return 4.
Example 2:

Input: nums = [1,2,3,4]
Output: 3
Explanation: We can prove the optimal perm is [2,3,4,1].
At indices = 0, 1, and 2, perm[i] > nums[i]. Hence, we return 3.
 

Constraints:

1 <= nums.length <= 105
0 <= nums[i] <= 109
Accepted
19.6K
Submissions
34.6K
Acceptance Rate
56.6% */

/**
 *
 * @param {number[]} nums
 * @returns {number}
 */
function maximizeGreatness(nums) {
  const numsCopy = [...nums];
  let availableSorted = numsCopy.sort((a, b) => b - a);

  let count = 0;
  for (actual of nums) {
    if (actual >= availableSorted[0] || actual === availableSorted[0]) {
      // remove smaller
      availableSorted.pop();
    } else {
      // go over remaining sorted
      // check closest bigger num
      // probably improve using map to track idx
      for (let i = 0; i < availableSorted.length; i++) {
        const next = availableSorted[i + 1];
        const act = availableSorted[i];
        if (actual < act && (actual >= next || next === undefined)) {
          count++;
          // remove this opt from array of available
          availableSorted = [...availableSorted.slice(0, i), ...availableSorted.slice(i + 1)];
          break;
        }
      }
    }
  }
 
  return count;
}

const cases = [
  [1, 3, 5, 2, 1, 3, 1],
  [1, 2, 3, 4],
];

cases.forEach((c) => {
  console.log(maximizeGreatness(c));
});
