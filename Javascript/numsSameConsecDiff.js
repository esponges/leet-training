/* 967. Numbers With Same Consecutive Differences
Medium
2.7K
190
Companies
Given two integers n and k, return an array of all the integers of length n where the difference between every two consecutive digits is k. You may return the answer in any order.

Note that the integers should not have leading zeros. Integers as 02 and 043 are not allowed.

 

Example 1:

Input: n = 3, k = 7
Output: [181,292,707,818,929]
Explanation: Note that 070 is not a valid number, because it has leading zeroes.
Example 2:

Input: n = 2, k = 1
Output: [10,12,21,23,32,34,43,45,54,56,65,67,76,78,87,89,98]
 

Constraints:

2 <= n <= 9
0 <= k <= 9
Accepted
126.1K
Submissions
218.6K
Acceptance Rate
57.7% */

/**
 * @param {number} num
 * @param {number} diff
 * @returns {boolean}
 */
function getInnerConsecDiff(num, diff) {
  const nums = num.toString().split('');
  console.log(nums);
  for (let i = 0; i < nums.length - 1; i++) {
    const actual = parseInt(nums[i]);
    const next = parseInt(nums[i + 1]);
    console.log({ actual, next, diff });
    if (Math.abs(actual - next) === diff) continue;
    else return false;
  }
  return true;
}

/**
 * @param {number} k
 * @param {number} n
 * @returns {array}
 */
function numsSameConsecDiff(n, k) {}

const cases = [
  [2, 3],
  [2, 1],
  //todo: find with n = 1 & 0
];

cases.forEach((c) => {
  console.log(getInnerConsecDiff(182, 7));
});
