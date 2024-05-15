/* 1664. Ways to Make a Fair Array
Medium
Topics
Companies
Hint
You are given an integer array nums. You can choose exactly one index (0-indexed) and remove the element. Notice that the index of the elements may change after the removal.

For example, if nums = [6,1,7,4,1]:

Choosing to remove index 1 results in nums = [6,7,4,1].
Choosing to remove index 2 results in nums = [6,1,4,1].
Choosing to remove index 4 results in nums = [6,1,7,4].
An array is fair if the sum of the odd-indexed values equals the sum of the even-indexed values.

Return the number of indices that you could choose such that after the removal, nums is fair.

 

Example 1:

Input: nums = [2,1,6,4]
Output: 1
Explanation:
Remove index 0: [1,6,4] -> Even sum: 1 + 4 = 5. Odd sum: 6. Not fair.
Remove index 1: [2,6,4] -> Even sum: 2 + 4 = 6. Odd sum: 6. Fair.
Remove index 2: [2,1,4] -> Even sum: 2 + 4 = 6. Odd sum: 1. Not fair.
Remove index 3: [2,1,6] -> Even sum: 2 + 6 = 8. Odd sum: 1. Not fair.
There is 1 index that you can remove to make nums fair.
Example 2:

Input: nums = [1,1,1]
Output: 3
Explanation: You can remove any index and the remaining array is fair.
Example 3:

Input: nums = [1,2,3]
Output: 0
Explanation: You cannot make a fair array after removing any index.
 

Constraints:

1 <= nums.length <= 105
1 <= nums[i] <= 104
Seen this question in a real interview before?
1/5
Yes
No
Accepted
38.4K
Submissions
60.5K
Acceptance Rate
63.5%

https://leetcode.com/problems/ways-to-make-a-fair-array/
*/

/**
 * @param {number[]} nums
 * @returns {number}
 */
function waysToMakeFair(nums) {
  const combs = [];
  for (let i = 0; i < nums.length; i++) {
    const newArr = [...nums.slice(0, i), ...nums.slice(i + 1)];
    combs.push(newArr);
  }

  const oddEvenCombs = new Array(combs.length)
    .fill(null)
    .map((_) => ({ odd: [], even: [] }));

  for (let i = 0; i < combs.length; i++) {
    const c = combs[i];
    for (let j = 0; j < c.length; j++) {
      const actual = c[j];
      if (j % 2 !== 0) oddEvenCombs[i].odd.push(actual);
      else oddEvenCombs[i].even.push(actual);
    }
  }

  const memo = {};
  // make obj with sums
  let count = 0;
  for (els of oddEvenCombs) {
    const oddStr = els.odd.join('+');
    const evenStr = els.even.join('+');

    if (!memo[oddStr]) memo[oddStr] = els.odd.reduce((a, b) => a + b, 0);
    if (!memo[evenStr]) memo[evenStr] = els.even.reduce((a, b) => a + b, 0);

    if (memo[oddStr] === memo[evenStr]) count++;
  }

  return count;
}

const cases = [
  [2,1,6,4],
  [1, 1, 1],
  [1, 2, 3],
];

cases.forEach(c => {
  console.log(waysToMakeFair(c));
});
