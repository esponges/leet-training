/* 
343. Integer Break
Medium
Topics
Companies
Hint
Given an integer n, break it into the sum of k positive integers, where k >= 2, and maximize the product of those integers.

Return the maximum product you can get.

 

Example 1:

Input: n = 2
Output: 1
Explanation: 2 = 1 + 1, 1 × 1 = 1.
Example 2:

Input: n = 10
Output: 36
Explanation: 10 = 3 + 3 + 4, 3 × 3 × 4 = 36.
 

Constraints:

2 <= n <= 58
Seen this question in a real interview before?
1/5
Yes
No
Accepted
375.3K
Submissions
618.3K
Acceptance Rate
60.7%

https://leetcode.com/problems/integer-break/description/
*/

/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function(n) {
  let max = 0;

  function backtrack(prod, sum, prev) {
      if (sum == n) {
          max = Math.max(prod, max);
          return;
      }

      for (let i = prev; i < n; i++) {
          sum += i;
          if (sum <= n) {
            const newProd = prod * i || i;
            backtrack(newProd, sum, prev);
          }
          sum -= i;
      }
  }

  backtrack(0, 0, 0);

  return max;
};

const cases = [
  2,
  10,
  4,
];

cases.forEach(c => console.log(integerBreak(c)));
