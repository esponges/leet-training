/* 
131. Palindrome Partitioning
Medium
Topics
Companies
Given a string s, partition s such that every 
substring
 of the partition is a 
palindrome
. Return all possible palindrome partitioning of s.

 

Example 1:

Input: s = "aab"
Output: [["a","a","b"],["aa","b"]]
Example 2:

Input: s = "a"
Output: [["a"]]
 

Constraints:

1 <= s.length <= 16
s contains only lowercase English letters.
Seen this question in a real interview before?
1/5
Yes
No
Accepted
970.1K
Submissions
1.4M
Acceptance Rate
70.3%

*/

/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
  if (s.length == 1) return [[s]];

  const palindromes = [];

  function backtrack(acc, index) {
    if (index == s.length) {
      palindromes.push([...acc]);
      return;
    }

    for (let i = index; i < s.length; i++) {
      const next = s.slice(index, i + 1);

      if (!isPalindrome(next)) continue;

      acc.push(next);
      backtrack(acc, i + 1);
      acc.pop();
    }
  }

  backtrack([], 0);

  return palindromes;
};

function isPalindrome(s) {
  if (s.length == 1) return true;

  let left = 0;
  let right = s.length - 1;

  while (right > left) {
    if (s[left] != s[right]) return false;
    left++;
    right--;
  }

  return true;
}

const cases = ['aab', 'a'];
cases.forEach((c) => console.log(partition(c)));
