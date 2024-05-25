/* 1006. Clumsy Factorial
Medium
Topics
Companies
The factorial of a positive integer n is the product of all positive integers less than or equal to n.

For example, factorial(10) = 10 * 9 * 8 * 7 * 6 * 5 * 4 * 3 * 2 * 1.
We make a clumsy factorial using the integers in decreasing order by swapping out the multiply operations for a fixed rotation of operations with multiply '*', divide '/', add '+', and subtract '-' in this order.

For example, clumsy(10) = 10 * 9 / 8 + 7 - 6 * 5 / 4 + 3 - 2 * 1.
However, these operations are still applied using the usual order of operations of arithmetic. We do all multiplication and division steps before any addition or subtraction steps, and multiplication and division steps are processed left to right.

Additionally, the division that we use is floor division such that 10 * 9 / 8 = 90 / 8 = 11.

Given an integer n, return the clumsy factorial of n.

 

Example 1:

Input: n = 4
Output: 7
Explanation: 7 = 4 * 3 / 2 + 1
Example 2:

Input: n = 10
Output: 12
Explanation: 12 = 10 * 9 / 8 + 7 - 6 * 5 / 4 + 3 - 2 * 1
 

Constraints:

1 <= n <= 104
Seen this question in a real interview before?
1/5
Yes
No
Accepted
30.9K
Submissions
54.1K
Acceptance Rate
57.1%

https://leetcode.com/problems/clumsy-factorial/description/
*/

/**
 * @param {number} n
 * @return {number}
 */
var clumsy = function(n) {
  function operation (op, stack, i) {
      if (i === 1) {
          return stack.reduce((a, b) => a + b, 0);
      }

      const actual = i - 1;
      let nextOp;
      if (op !== '-') {
          let calc;
          if (op === '*') {
              calc = stack.pop() * actual; 
              nextOp = '/'
          } else if (op === '/') {
              calc = Math.trunc(stack.pop() / actual);
              nextOp = '+';
          } else {
              calc = stack.pop() + actual;
              nextOp = '-';
          }
          stack.push(calc);
      } else {
          stack.push(actual * -1);
          nextOp = '*';
      }
      return operation(nextOp, stack, actual);
  }

  return operation ('*', [n], n);
};

const cases = [
  10,
  4
];

cases.forEach(c => {
  console.log(clumsy(c));
});
