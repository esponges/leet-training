/* 1363. Largest Multiple of Three
Hard
Topics
Companies
Hint
Given an array of digits digits, return the largest multiple of three that can be formed by concatenating some of the given digits in any order. If there is no answer return an empty string.

Since the answer may not fit in an integer data type, return the answer as a string. Note that the returning answer must not contain unnecessary leading zeros.

 

Example 1:

Input: digits = [8,1,9]
Output: "981"
Example 2:

Input: digits = [8,6,7,1,0]
Output: "8760"
Example 3:

Input: digits = [1]
Output: ""
 

Constraints:

1 <= digits.length <= 104
0 <= digits[i] <= 9
Seen this question in a real interview before?
1/5
Yes
No
Accepted
21.6K
Submissions
66.1K
Acceptance Rate
32.7%

https://leetcode.com/problems/largest-multiple-of-three/description/
*/

/**
 * @param {number[]} digits
 * @returns {string}
 */
function largestMultipleOfThree(digits) {
  if (digits.length == 1) {
    return digits[0] % 3 == 0 ? digits[0] : '';
  }

  function backtrack(nums, used, n, mults) {
    if (n != '' && parseInt(n) % 3 == 0) mults.push(parseInt(n));
    if (n.length == digits.length) return;

    for (let i = 0; i < nums.length; i++) {
      if (!used[i]) {
        const newNum = n + nums[i].toString();
        used[i] = true;
        backtrack(nums, used, newNum, mults);
        used[i] = false;
      }
    }
  }

  const multiples = [];
  const trackList = new Array(digits.length).fill(false);
  backtrack(digits, trackList, '', multiples);

  return Math.max(...multiples);
}

const cases = [[8, 1, 9], [8, 6, 7, 1, 0], [1]];

cases.forEach(c => console.log(largestMultipleOfThree(c)));
