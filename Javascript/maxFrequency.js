/* The frequency of an element is the number of times it occurs in an array.

You are given an integer array nums and an integer k. In one operation, you can choose an index of nums and increment the element at that index by 1.

Return the maximum possible frequency of an element after performing at most k operations.

 

Example 1:

Input: nums = [1,2,4], k = 5
Output: 3
Explanation: Increment the first element three times and the second element two times to make nums = [4,4,4].
4 has a frequency of 3.
Example 2:

Input: nums = [1,4,8,13], k = 5
Output: 2
Explanation: There are multiple optimal solutions:
- Increment the first element three times to make nums = [4,4,8,13]. 4 has a frequency of 2.
- Increment the second element four times to make nums = [1,8,8,13]. 8 has a frequency of 2.
- Increment the third element five times to make nums = [1,4,13,13]. 13 has a frequency of 2.
Example 3:

Input: nums = [3,9,6], k = 2
Output: 1
 

Constraints:

1 <= nums.length <= 105
1 <= nums[i] <= 105
1 <= k <= 105 */

/* HINT
To find the maximum frequency of a value consider the biggest elements smaller than or equal to this value
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @returns {number}
 */
function maxFrequency(nums, k) {
  const sorted = nums.sort((a, b) => b - a);
  let remaining = k;
  const cases = [1];
  for (let i = 0; i < sorted.length; i++) {
    const max = sorted[i];
    let reps = 1;

    // console.log({ cAtI: c });
    for (let j = i + 1; j < sorted.length; j++) {
      const actual = sorted[j];
      const diffToMax = max - actual;

      // repeated numbers
      // if (actual === c[c.length - 1]) {}

      if (diffToMax <= remaining) {
        reps++;
        remaining -= diffToMax;
        // last element
        if (j === sorted.length - 1) cases.push(reps);
      } else if (reps > 1) {
        cases.push(reps);
        break;
      }
    }
    // restart count
    remaining = k;
  }

  return Math.max(...cases);
}

const cases = [
  [[1, 2, 4], 5], // passed
  [[1, 4, 8, 13], 5],
  [[3, 9, 6], 2],
];

cases.forEach((c) => {
  console.log(maxFrequency(c[0], c[1]));
});
