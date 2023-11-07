/* 967. Numbers With Same Consecutive Differences
Medium
2.7K
190
Companies
Given two integers n and k, return an array of all the integers of length n where the difference between every two consecutive digits is k. You may return the answer in any order.

Note that the integers should not have leading zeros. Integers as 02 and 043 are not allowed.

 

Example 1:

Input: n = 3, k = 7
Output: [181,292,707,818,929]
Explanation: Note that 070 is not a valid number, because it has leading zeroes.
Example 2:

Input: n = 2, k = 1
Output: [10,12,21,23,32,34,43,45,54,56,65,67,76,78,87,89,98]
 

Constraints:

2 <= n <= 9
0 <= k <= 9
Accepted
126.1K
Submissions
218.6K
Acceptance Rate
57.7% */


/**
 * @param {number} k
 * @param {number} n
 * @returns {array}
*/
function numsSameConsecDiff(n, k) {
  let start = '10';
  
  function addNExtraZeros(n, initial = '10') {
    let num = initial;
    new Array(n).fill().forEach(_el => num+='0');
    return num;
  }
  
  if (n > 2) {
    start = addNExtraZeros(n - 2);
  }
  
  const end = parseInt(start + '0');
  start = parseInt(start);
  
  /**
   * @param {number} num
   * @param {number} diff
   * @returns {object}
   */
  function hasInnerConsecDiff(num, diff) {
    // split number as sep numbers
    const nums = num.toString().split('').map(n => parseInt(n));
  
    for (let i = 0; i < nums.length - 1; i++) {
      const actual = nums[i];
      const next = nums[i + 1];
  
      if (Math.abs(actual - next) === diff) continue;
      else {
        // just need to move next to the next decimal 
        nums[i + 1] = next + 1;
        function joinNums() { 
          return [
          ...nums.slice(0, i + 2), 
          ...nums.slice(i + 2).map(_n => 0)
          ].join('');
        }
        // ignore 9's
        const skipTo = next !== 9 ? parseInt(joinNums()) : 0;

        return { hasInnerDif: false, skipTo }
      };
    }
  
    return { hasInnerDif: true, skipTo: undefined };
  }

  const consec = [];
  for (let i = start; i < end; i++) {
    const inner = hasInnerConsecDiff(i, k);
    if (inner.hasInnerDif) {
      consec.push(i);
    } else {
      const { skipTo } = inner;
      i = !!skipTo
        ? skipTo - 1 
        : i; 
    }
  }

  return consec;
}

const cases = [
  [3, 7],
  [2, 1],
  [7, 3]
  // TLE
  // [8, 1]
];

cases.forEach((c) => {
  console.log(numsSameConsecDiff(c[0], c[1]));
});
