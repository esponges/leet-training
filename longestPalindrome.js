/* 
409. Longest Palindrome
Solved
Easy
Topics
Companies
Given a string s which consists of lowercase or uppercase letters, return the length of the longest 
palindrome
 that can be built with those letters.

Letters are case sensitive, for example, "Aa" is not considered a palindrome.

 

Example 1:

Input: s = "abccccdd"
Output: 7
Explanation: One longest palindrome that can be built is "dccaccd", whose length is 7.
Example 2:

Input: s = "a"
Output: 1
Explanation: The longest palindrome that can be built is "a", whose length is 1.
 

Constraints:

1 <= s.length <= 2000
s consists of lowercase and/or uppercase English letters only.
Seen this question in a real interview before?
1/5
Yes
No
Accepted
807.9K
Submissions
1.5M
Acceptance Rate
55.3%

https://leetcode.com/problems/longest-palindrome/description/
*/

/**
 * @param {string}
 * @returns {number}
 */
function longestPalindrome(s) {
  // base cases
  if (s.length == 1) return 1;
  if (s.length == 2) s[0] == s[1] ? 2 : 0;

  const mem = {};

  for (el of s) {
    if (!mem[el]) mem[el] = 1;
    else mem[el]++;
  }

  const vals = [];
  Object.values(mem).forEach((val) => vals.push(val));

  vals.sort((a, b) => b - a);

  let count = 0;
  let middle = false;
  for (v of vals) {
    if (!middle && v % 2 != 0) {
      middle = true;
      count++;
      count += v - 1;
    } else {
      count += v % 2 == 0 ? v : v - 1;
    }
  }

  return count;
}

const cases = ['abccccdd', 'Aa', 'bananas'];

cases.forEach(c => console.log(longestPalindrome(c)));
