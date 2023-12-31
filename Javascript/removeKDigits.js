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
 * @param {string} nums
 * @param {number} k
 * @return {string}
 */
function removeKDigits(nums, k) {
  const arr = nums.split('').map((n, i) => [parseInt(n), i]);

  // sort asc
  arr.sort((a, b) => {
    const [aVal, _aIdx] = a;
    const [bVal, _bIdx] = b;
    
    return bVal - aVal;
  });

  let res = '';

  // console.log({arr});
  let right = arr.length - 1;
  const prevs = [];
  // let debugg = 10;
  const remove = nums.length - k;
  while (res.length < remove) {
    // debugg --;
    const [actualVal, actualIdx] = arr[right];
    // check if enough space to the right
    const diff = remove - res.length;
    // console.log({ arr });
    // console.log({ res, actualVal, actualIdx, diff, right });

    if (nums.length - 1 - actualIdx >= diff && !prevs.includes(actualIdx)) {
      res += actualVal;
      //
      prevs.push(actualIdx);
      right = arr.length - 1;
      // console.log({ arr, right });
    } else {
      right --;
    }
  }

  return res;
}

const cases = [
  ["1432219", 3],
  // ["10200", 1],
  // ["10", 2]
];

cases.forEach(c => {
  console.log(removeKDigits(c[0], c[1]));
})
