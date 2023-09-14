/* Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

 

Example 1:

Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]
Example 2:

Input: nums = [1], k = 1
Output: [1]
 

Constraints:

1 <= nums.length <= 105
-104 <= nums[i] <= 104
k is in the range [1, the number of unique elements in the array].
It is guaranteed that the answer is unique. */

/**
 * @param {number[]} nums
 * @param {number} k
 * @returns {number[]}
 */
function topKFrecuent(nums, k){
  const reps = {};

  nums.forEach(el => {
    if (reps[el]) {
      reps[el] = parseInt(reps[el]) + 1;
    } else reps[el] = 1;
  });

  if (Object.keys(reps).length === 1) return [nums[0]]; 

  const r = [];
  Object.values(reps).forEach(k => r.push([k]));
  Object.keys(reps).forEach((k, i) => r[i] = [...r[i], parseInt(k)]);

  r.sort((a, b) => {
    const countA = a[0];
    const countB = b[0];

    return countB - countA;
  });

  const frecuents = r.slice(0, k).map(el => el[1])

  return frecuents;
}

const cases = [
  [[1,1,1,2,2,3], 2],
  [[1], 1],
  [[1, 2], 2] // todo: debug this case
];

cases.forEach(c => {
  console.log(topKFrecuent(c[0], c[1]));
})
