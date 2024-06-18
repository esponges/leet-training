/* 1492. The kth Factor of n
Medium
Topics
Companies
Hint
You are given two positive integers n and k. A factor of an integer n is defined as an integer i where n % i == 0.

Consider a list of all factors of n sorted in ascending order, return the kth factor in this list or return -1 if n has less than k factors.

 

Example 1:

Input: n = 12, k = 3
Output: 3
Explanation: Factors list is [1, 2, 3, 4, 6, 12], the 3rd factor is 3.
Example 2:

Input: n = 7, k = 2
Output: 7
Explanation: Factors list is [1, 7], the 2nd factor is 7.
Example 3:

Input: n = 4, k = 4
Output: -1
Explanation: Factors list is [1, 2, 4], there is only 3 factors. We should return -1.
 

Constraints:

1 <= k <= n <= 1000
 

Follow up:

Could you solve this problem in less than O(n) complexity?

Seen this question in a real interview before?
1/5
Yes
No
Accepted
232.8K
Submissions
344.2K
Acceptance Rate
67.6%

*/

/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var kthFactor = function (n, k) {
  function iterate(val, actual, nums, limit) {
    if (nums.length === limit) return nums[nums.length - 1];
    if (actual > val) return -1;

    if (val % actual === 0) nums.push(actual);

    return iterate(val, actual + 1, nums, limit);
  }

  return iterate(n, 1, [], k);
};

const cases = [
  [12, 3],
  [7, 2],
  [4, 4],
];

cases.forEach((c) => {
  console.log(kthFactor(c[0], c[1]));
});
