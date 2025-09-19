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
  function backtrack(arr, tracked, biggest, actual) {
    if (actual.length === arr.length) {
      const str = actual.join("");
      const num = parseInt(str);
      return num > biggest ? str : biggest;
    }

    for (let i = 0; i < arr.length; i++) {
      if (!tracked[i]) {
        tracked[i] = true;
        biggest = backtrack(arr, tracked, biggest, [...actual, arr[i]]);
        tracked[i] = false;
      }
    }
    return biggest;
  }

  const used = new Array(nums.length).fill(false);
  let max = 0;
  max = backtrack(nums, used, max, []);

  return max;
};

const cases = [
  [10, 2],
  [3, 30, 34, 5, 9],
  // [999999998, 999999997, 999999999],
  // [0,9,8,7,6,5,4,3,2,1],
];

// cases.forEach((c) => console.log(largestNumber(c)));

// [3, 34] - 334 / 343
function largestNumberSort (nums) {
  nums.sort((a, b) => {
    let firstOneDig = [];
    if (a >= 10) {
      const astr = a.toString();
      firstOneDig[0] = parseInt(astr[0]);
      const aRest = astr.slice(1);
      firstOneDig[1] = aRest;
      firstOneDig[2] = parseFloat(astr[0] + '.' + aRest);
    } else {
      firstOneDig = [a, '', a];
    }

    let secOneDig = [];
    if (b >= 10) {
      const bstr = b.toString();
      secOneDig[0] = parseInt(bstr[0]);
      const bRest = bstr.slice(1);
      secOneDig[1] = bRest;
      secOneDig[2] = parseFloat(bstr[0] + '.' + bRest);
    } else {
      secOneDig = [b, '', b];
    }

    if (firstOneDig[1] == '' && secOneDig[1] == '') {
      return b - a;
    } else if (!firstOneDig[1] == '' || !secOneDig[1] == '') {
      // not same first digit return highest
      if (firstOneDig[0] != secOneDig[0]) return secOneDig[0] - firstOneDig[0];
      // they share common first digit - now diff using the rest of the digits
      else {
        // if any of them is visible by 10
        if (a % 10 == 0) {
          // we want `b` to be the biggest
          return 1;
        } else if (b % 10 == 0) {
          // we want `a` to be the biggest
          return -1;
          // just check which one is bigger using their floats
        } else {
          return secOneDig[2] - firstOneDig[2];
        }
      }
    }
  });
  
  return nums.join("");
}

cases.forEach((c) => console.log(largestNumberSort(c)));
