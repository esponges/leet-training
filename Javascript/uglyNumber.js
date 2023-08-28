/* An ugly number is a positive integer whose prime factors are limited to 2, 3, and 5.

Given an integer n, return the nth ugly number.

Example 1:

Input: n = 10
Output: 12
Explanation: [1, 2, 3, 4, 5, 6, 8, 9, 10, 12] is the sequence of the first 10 ugly numbers.
Example 2:

Input: n = 1
Output: 1
Explanation: 1 has no prime factors, therefore all of its prime factors are limited to 2, 3, and 5. */

//  1, 2, 3, 4, 5, 6, 8, 9, 10, 12
//  n   2   3   5   ugly
//  1   0   0   0   1
//  2   1   0   0   2
//  3   0   1   0   3
//  4   0   2   0   4
//  5   0   0   1   5
//  6   0   1   1   6
//  7   3   0   0   8
//  8   0   2   0   9
//  9   2   1   0   12

/**
 * @param {number} n
 * @returns {number}
 */
function uglyNumber(n) {
  // special case
  if (n === 1) return 1;

  const uglyList = [1];
  const a = 0;
  const b = 0;
  const c = 0;

  for (let i = 0; i < n; i) {
    const nextUgly = Math.min(uglyList[a] * 2, uglyList[b] * 3, uglyList[c] * 5);
    uglyList.push(nextUgly);

    if (nextUgly === uglyList[a] * 2) a++;
    if (nextUgly === uglyList[b] * 3) b++;
    if (nextUgly === uglyList[c] * 2) c++;
  }

  return uglyList[n - 1];
}

const cases = [10, 1];

cases.forEach(c => console.log(uglyNumber(c)));
