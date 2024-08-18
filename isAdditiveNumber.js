/* 
Code
Testcase
Test Result
Test Result
306. Additive Number
Medium
Topics
Companies
An additive number is a string whose digits can form an additive sequence.

A valid additive sequence should contain at least three numbers. Except for the first two numbers, each subsequent number in the sequence must be the sum of the preceding two.

Given a string containing only digits, return true if it is an additive number or false otherwise.

Note: Numbers in the additive sequence cannot have leading zeros, so sequence 1, 2, 03 or 1, 02, 3 is invalid.

 

Example 1:

Input: "112358"
Output: true
Explanation: 
The digits can form an additive sequence: 1, 1, 2, 3, 5, 8. 
1 + 1 = 2, 1 + 2 = 3, 2 + 3 = 5, 3 + 5 = 8
Example 2:

Input: "199100199"
Output: true
Explanation: 
The additive sequence is: 1, 99, 100, 199. 
1 + 99 = 100, 99 + 100 = 199
 

Constraints:

1 <= num.length <= 35
num consists only of digits.
 

Follow up: How would you handle overflow for very large input integers?

Seen this question in a real interview before?
1/5
Yes
No
Accepted
93.5K
Submissions
293.2K
Acceptance Rate
31.9%

https://leetcode.com/problems/additive-number/description/
*/

/**
 * @param {string} num
 * @return {boolean}
 */
// var isAdditiveNumber = function(num) {
//   // 112358
//   function backtrack(str, actual, nextIdx, paths) {
//       if (nextIdx >= str.length) return;

//       for (let i = nextIdx; i < num.length; i++) {
//           const maybePair = str.slice(nextIdx, i + 1); 
//           const sum = parseInt(actual) + parseInt(maybePair); 
//           const endStr = i + 1 + sum.toString().length; 
//           const maybeSum = str.slice(i + 1, endStr);

//           if (sum == parseInt(maybeSum)) {
//               paths += maybePair;
//               backtrack(str, maybeSum, endStr, paths);
//           }
//       }
//   }

//   const debug = num[0];
//   backtrack(num, num[0], 1, debug);

//   return debug == num;
// };

var backtrack = (num, left, right, subs) => {
  if (right > num.length) return false;
  
  for (let i = left; i < num.length; i++) {
    const actual = num.slice(left, right);
    for (let j = right; j < num.length; j++) {
      subs.push(actual);

      const next = num.slice(right, j + 1);
      if (subs.join("") + next == num) return true;
      
      const sum = parseInt(actual) + parseInt(next);
      const maybeSum = num.slice(j + 1, j + 1 + sum.toString().length);
      if (sum == parseInt(maybeSum)) {
        return backtrack(num, right, right + next.length, subs);
      }

      subs.pop();
    }
  }

  return false;
}

var isAdditiveNumber = (num) => {
  const subs = [];

  return backtrack(num, 0, 1, subs);
}

const cases = [
  "112358",
  // "199100199",
];

cases.forEach(c => console.log(isAdditiveNumber(c)));
