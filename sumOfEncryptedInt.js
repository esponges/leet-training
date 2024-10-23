/* 

You are given an integer array nums containing positive integers. We define a function encrypt such that encrypt(x) replaces every digit in x with the largest digit in x. For example, encrypt(523) = 555 and encrypt(213) = 333.

Return the sum of encrypted elements.

 

Example 1:

Input: nums = [1,2,3]

Output: 6

Explanation: The encrypted elements are [1,2,3]. The sum of encrypted elements is 1 + 2 + 3 == 6.

Example 2:

Input: nums = [10,21,31]

Output: 66

Explanation: The encrypted elements are [11,22,33]. The sum of encrypted elements is 11 + 22 + 33 == 66.

 

Constraints:

1 <= nums.length <= 50
1 <= nums[i] <= 1000
Seen this question in a real interview before?
1/5
Yes
No
Accepted
47K
Submissions
62.9K
Acceptance Rate
74.7%

https://leetcode.com/problems/find-the-sum-of-encrypted-integers/description/
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
// accepted 55% runtime
var sumOfEncryptedInt = function(nums) {
  function encrypt (n) {
      const split = n.toString().split('');
      if (split.length == 1) return n;

      const toNumsArr = split.map(n => parseInt(n));
      const max = Math.max(...toNumsArr);

      let encrypted = '';
      toNumsArr.forEach(n => encrypted += max.toString());

      return parseInt(encrypted);
  }

  const res = [];
  nums.forEach(n => res.push(encrypt(n)));

  return res.reduce((num, acc) => num + acc, 0);
};

const cases = [
  [1,2,3],
  [10,21,31],
];

