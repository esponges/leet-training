/* 
227. Basic Calculator II
Medium
Topics
Companies
Given a string s which represents an expression, evaluate this expression and return its value. 

The integer division should truncate toward zero.

You may assume that the given expression is always valid. All intermediate results will be in the range of [-231, 231 - 1].

Note: You are not allowed to use any built-in function which evaluates strings as mathematical expressions, such as eval().

 

Example 1:

Input: s = "3+2*2"
Output: 7
Example 2:

Input: s = " 3/2 "
Output: 1
Example 3:

Input: s = " 3+5 / 2 "
Output: 5
 

Constraints:

1 <= s.length <= 3 * 105
s consists of integers and operators ('+', '-', '*', '/') separated by some number of spaces.
s represents a valid expression.
All the integers in the expression are non-negative integers in the range [0, 231 - 1].
The answer is guaranteed to fit in a 32-bit integer.
Seen this question in a real interview before?
1/5
Yes
No
Accepted
634.6K
Submissions
1.5M
Acceptance Rate
43.7%

https://leetcode.com/problems/basic-calculator-ii/
*/

function isOperator(str) {
  return str == '+' || str == '-' || str == '*' || str == '/'
}

/**
 * @param {string} s
 * @returns {number}
 */
var calculate = function (s) {
  let num = '';
  let preOperator = '+';
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    if (!isOperator(s[i])) num += s[i];

    if (isOperator(s[i]) || i === s.length - 1) {
        if (preOperator === '+') stack.push(+num);
        if (preOperator === '-') stack.push(-num);
        if (preOperator === '*') stack.push(stack.pop() * num);
        if (preOperator === '/') stack.push(Math.floor(stack.pop() / num));

        preOperator = s[i];
        num = '';
    }    
  }

  return stack.reduce((total, cur) => total + cur, 0);
};

const cases = [
  "3+2*2",
  " 3/2 ",
  " 3+5 / 2 "
];

cases.forEach(c => {
  console.log(calculate(c));
})
