/* 1253. Reconstruct a 2-Row Binary Matrix
Medium
431
28
Companies
Given the following details of a matrix with n columns and 2 rows :

The matrix is a binary matrix, which means each element in the matrix can be 0 or 1.
The sum of elements of the 0-th(upper) row is given as upper.
The sum of elements of the 1-st(lower) row is given as lower.
The sum of elements in the i-th column(0-indexed) is colsum[i], where colsum is given as an integer array with length n.
Your task is to reconstruct the matrix with upper, lower and colsum.

Return it as a 2-D integer array.

If there are more than one valid solution, any of them will be accepted.

If no valid solution exists, return an empty 2-D array.

 

Example 1:

Input: upper = 2, lower = 1, colsum = [1,1,1]
Output: [[1,1,0],[0,0,1]]
Explanation: [[1,0,1],[0,1,0]], and [[0,1,1],[1,0,0]] are also correct answers.
Example 2:

Input: upper = 2, lower = 3, colsum = [2,2,1,1]
Output: []
Example 3:

Input: upper = 5, lower = 5, colsum = [2,1,2,0,1,0,1,2,0,1]
Output: [[1,1,1,0,1,0,0,1,0,0],[1,0,1,0,0,0,1,1,0,1]]
 

Constraints:

1 <= colsum.length <= 10^5
0 <= upper, lower <= colsum.length
0 <= colsum[i] <= 2
Accepted
24.7K
Submissions
54.6K
Acceptance Rate
45.3%

https://leetcode.com/problems/reconstruct-a-2-row-binary-matrix/
*/

/**
 * @param {number} upper
 * @param {number} lower
 * @param {number[]} colsum
 * @returns {number[][]}
 */

function reconstructMaxtrix(upper, lower, colsum) {
  if (upper + lower !== colsum.reduce((a, b) => a + b, 0)) {
    return [];
  }

  let leftUpper = upper;
  let leftLower = lower;
  const newUpper = [];
  const newLower = [];

  for (let i = 0; i < colsum.length; i++) {
    const actual = colsum[i];
    const prevIsUpper = newUpper[i - 1] === 1 && newLower[i - 1] === 0;

    // both leftUpper and leftLower are 0
    // no need to keep looping
    // fill the rest of both arrays and return the output
    if (leftLower === 0 && leftUpper === 0) {
      const fill = new Array(colsum.length - i).fill(0);
      newUpper.push(...fill);
      newLower.push(...fill);
      break;
    }

    // upper takes prio when sum is 1 as last move with 1 was not done on upper
    console.log({ i, actual, leftUpper, leftLower, prevIsUpper });
    if (actual === 1) {
      if (leftUpper > 0 && (!prevIsUpper || leftLower === 0)) {
        console.log('go upper');
        newUpper.push(1);
        leftUpper--;
        newLower.push(0);
      } else {
        console.log('go lower');
        newUpper.push(0);
        newLower.push(1);
        leftLower--;
      }
      // both should be pushed with 0
    } else if (actual === 0) {
      console.log('go 0');
      newLower.push(0);
      newUpper.push(0);
      // actual === 2 therefore both should be pushed with 1
    } else {
      console.log('go 2');
      newLower.push(1);
      leftLower--;
      newUpper.push(1);
      leftUpper--;
    }
  }

  return [newUpper, newLower];
}

const cases = [
  // [2, 1, [1,1,1]], // passed
  // [2, 3, [2, 2, 1, 1]], // passed
  // [5, 5, [2,1,2,0,1,0,1,2,0,1]] // passed
  // [4, 2, [1,2,1,2,0]] //  passed
  [3, 2, [2,1,1,0,0,1]]
];

cases.forEach((c) => {
  console.log(reconstructMaxtrix(c[0], c[1], c[2]));
});
