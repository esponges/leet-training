/* 402. Remove K Digits
Medium
8.4K
372
Companies
Given string num representing a non-negative integer num, and an integer k, return the smallest possible integer after removing k digits from num.

 

Example 1:

Input: num = "1432219", k = 3
Output: "1219"
Explanation: Remove the three digits 4, 3, and 2 to form the new number 1219 which is the smallest.
Example 2:

Input: num = "10200", k = 1
Output: "200"
Explanation: Remove the leading 1 and the number is 200. Note that the output must not contain leading zeroes.
Example 3:

Input: num = "10", k = 2
Output: "0"
Explanation: Remove all the digits from the number and it is left with nothing which is 0.
 

Constraints:

1 <= k <= num.length <= 105
num consists of only digits.
num does not have any leading zeros except for the zero itself.
Accepted
346.4K
Submissions
1.1M
Acceptance Rate
30.9%

https://leetcode.com/problems/remove-k-digits/description/
*/

/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
function removeKDigits(num, k) {
  const toKeep = num.length - k;
  if (k === num.length) return "0";

  const arr = num.split('').map((n, i) => [parseInt(n), i]);

  // sort asc using val as ref
  arr.sort((a, b) => {
    const [aVal, _aIdx] = a;
    const [bVal, _bIdx] = b;

    return aVal - bVal;
  });

  // handle large same num strings
  if (arr[0] === arr[toKeep]) {
    return new Array(toKeep).fill(arr[0]).join('');
  }

  let res = '';
  let right = 0;
  let prevIdx = -1;
  let zeroPref = false;
  while (res.length < toKeep) {
    const [actualVal, actualIdx] = arr[right];
    // ignore els that are to the left side - non eligible
    if (actualIdx <= prevIdx) {
      right ++; 
      continue;
    };
    // check if enough space to the right
    const diff = toKeep - res.length;

    console.log({ actualIdx, diff, actualVal, res});
    if (num.length - actualIdx >= diff) {
      if (actualVal > 0) zeroPref = true;
      res += zeroPref ? actualVal : '.';
      prevIdx = actualIdx;
      // restart loop
      right = 0;
    } else {
      right++;
    }
    console.log('end' , { actualIdx, diff, actualVal, res});
  }

  // handle k = 1 and 0 res
  const replaced = res.replaceAll('.', '');
  return !!parseInt(replaced) ? replaced : '0';
}

const cases = [
  // ['1432219', 3],
  // ["10200", 1],
  // ["10", 2],
  // ["10", 1],
  // ["100", 1]
  // ["112", 1],
  ["10001", 1]
];

cases.forEach((c) => {
  console.log(removeKDigits(c[0], c[1]));
});
