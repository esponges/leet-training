/* 
39. Combination Sum
Medium
Topics
Companies
Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the chosen numbers sum to target. You may return the combinations in any order.

The same number may be chosen from candidates an unlimited number of times. Two combinations are unique if the 
frequency
 of at least one of the chosen numbers is different.

The test cases are generated such that the number of unique combinations that sum up to target is less than 150 combinations for the given input.

 

Example 1:

Input: candidates = [2,3,6,7], target = 7
Output: [[2,2,3],[7]]
Explanation:
2 and 3 are candidates, and 2 + 2 + 3 = 7. Note that 2 can be used multiple times.
7 is a candidate, and 7 = 7.
These are the only two combinations.
Example 2:

Input: candidates = [2,3,5], target = 8
Output: [[2,2,2,2],[2,3,3],[3,5]]
Example 3:

Input: candidates = [2], target = 1
Output: []
 

Constraints:

1 <= candidates.length <= 30
2 <= candidates[i] <= 40
All elements of candidates are distinct.
1 <= target <= 40
Seen this question in a real interview before?
1/5
Yes
No
Accepted
2.2M
Submissions
3M
Acceptance Rate
72.8%

https://leetcode.com/problems/combination-sum/
*/

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

// accepted! 70/64 — much better!
var combinationSum = function (candidates, target) {
  const res = [];

  function backtrack(comb, acc, index) {
    if (acc == target) {
      res.push([...comb]);
      return;
    }
    if (index == candidates.length) return;

    for (let i = index; i < candidates.length; i++) {
      const next = candidates[i];
      const sum = next + acc;
      if (sum <= target) {
        comb.push(actual);
        backtrack(comb, sum, i);
        comb.pop();
      }
    }
  }

  backtrack([], 0, 0);

  return res;
};

const cases = [
  [[2, 3, 6, 7], 7],
  [[2, 3, 5], 8],
];

cases.forEach((c) => {
  console.log(combinationSum(c[0], c[1]));
});
