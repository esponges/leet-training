/* 985. Sum of Even Numbers After Queries
Medium
Topics
Companies
You are given an integer array nums and an array queries where queries[i] = [vali, indexi].

For each query i, first, apply nums[indexi] = nums[indexi] + vali, then print the sum of the even values of nums.

Return an integer array answer where answer[i] is the answer to the ith query.

 

Example 1:

Input: nums = [1,2,3,4], queries = [[1,0],[-3,1],[-4,0],[2,3]]
Output: [8,6,2,4]
Explanation: At the beginning, the array is [1,2,3,4].
After adding 1 to nums[0], the array is [2,2,3,4], and the sum of even values is 2 + 2 + 4 = 8.
After adding -3 to nums[1], the array is [2,-1,3,4], and the sum of even values is 2 + 4 = 6.
After adding -4 to nums[0], the array is [-2,-1,3,4], and the sum of even values is -2 + 4 = 2.
After adding 2 to nums[3], the array is [-2,-1,3,6], and the sum of even values is -2 + 6 = 4.
Example 2:

Input: nums = [1], queries = [[4,0]]
Output: [0]
 

Constraints:

1 <= nums.length <= 104
-104 <= nums[i] <= 104
1 <= queries.length <= 104
-104 <= vali <= 104
0 <= indexi < nums.length
Seen this question in a real interview before?
1/5
Yes
No
Accepted
139K
Submissions
204.1K
Acceptance Rate
68.1%

https://leetcode.com/problems/sum-of-even-numbers-after-queries/
*/

/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number[]}
 */
function sumEvenAfterQueries(nums, queries) {
  let evenSum = nums.reduce((acc, actual) => {
    if (actual % 2 === 0) {
      return acc + actual;
    }
    return acc;
  }, 0);

  const res = [];
  for ([sum, idx] of queries) {
    const prev = nums[idx];
    nums[idx] += sum;

    // is even 2
    if (prev % 2 === 0) {
      if (nums[idx] % 2 === 0) {
        evenSum = evenSum - prev + nums[idx];
      } else {
        evenSum -= prev;
      }
    } else {
      if (nums[idx] % 2 === 0) {
        evenSum += nums[idx];
      } else {
        // evenSum stays the same
      }
    }
    res.push(evenSum);
  }

  return res;
}

const cases = [
  [[1,2,3,4], [[1,0],[-3,1],[-4,0],[2,3]]],
  [[1], [[4,0]]]
];

cases.forEach(c => {
  console.log(sumEvenAfterQueries(c[0], c[1]));
});

/* 
  [1,2,3,4]
  let evenSum = 6;
  [[1,0],[-3,1],[-4,0],[2,3]]

  [2, 2, 3, 4] [1,0]
  let evenSum = 8
  [2, -1, 3, 4] [-3,1]
  let evenSum = 6

*/
