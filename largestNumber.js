/* 

Code


Testcase
Test Result
Test Result
179. Largest Number
Medium
Topics
Companies
Given a list of non-negative integers nums, arrange them such that they form the largest number and return it.

Since the result may be very large, so you need to return a string instead of an integer.

 

Example 1:

Input: nums = [10,2]
Output: "210"
Example 2:

Input: nums = [3,30,34,5,9]
Output: "9534330"
 

Constraints:

1 <= nums.length <= 100
0 <= nums[i] <= 109
Seen this question in a real interview before?
1/5
Yes
No
Accepted
501.8K
Submissions
1.4M
Acceptance Rate
36.8%

https://leetcode.com/problems/largest-number/description/
*/

/**
 * @param {number[]} nums
 * @return {string}
 */
// just testing backtracking but i don't think this is the best solution for arrays (+10 length)
var largestNumber = function (nums) {
  function backtrack(arr, tracked, opts, actual) {
      if (actual.length === arr.length) {
          opts.push(parseInt([...actual].join("")));
          return;
      }

      for (let i = 0; i < arr.length; i++) {
          if (!tracked[i]) {
              tracked[i] = true;
              backtrack(arr, tracked, opts, [...actual, arr[i]]);
              tracked[i] = false;
          }
      }
  }

  const used = new Array(nums.length).fill(false);
  const words = [];
  backtrack(nums, used, words, []);

  return Math.max(...words).toString();
};

const cases = [
  [10, 2],
  [3, 30, 34, 5, 9],
];

cases.forEach(c => console.log(largestNumber(c)));
