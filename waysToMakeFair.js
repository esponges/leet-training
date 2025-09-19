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

Input: nums =   [2,1,6,4]
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
  let oddSum = 0;
  let evenSum = 0;
  for (let i = 0; i < nums.length; i++) {
    const actual = nums[i];
    if (i % 2 === 0) evenSum += actual;
    else oddSum += actual;
  }
  // oddSum 5
  // evenSum 8

  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    // [_2, 1, 6, 4];
    // [2, _1, 6, 4];
    const actual = nums[i];
    let tempOdd = oddSum;
    let tempEven = evenSum;

    if (i % 2 === 0) {
      tempEven -= actual;
    } else {
      tempOdd -= actual;
    }
    
    if (tempOdd === tempEven) count++;
  }

  return count;
}

const cases = [
  [2, 1, 6, 4],
  [1, 1, 1],
  [1, 2, 3],
];

cases.forEach((c) => {
  console.log(waysToMakeFair(c));
});


// [2, 1, 6, 4] even = 2 + 6 = 8, odd = 1 + 4 = 5
//  0  1  2  3

// [ , 1, 6, 4] even = 1 + 4 = 5, odd = 6 // not fair 
//     0  1  2
// [2,  , 6, 4] // even 2 + 4 = 6, odd = 6 // fair
//  0     1  2
// [2, 1,  , 4] // even 2 + 4 = 6, odd = 1 // un fair 
//  0  1     2  
// [2, 1, 6,  ] // even 2 + 6 = 8, odd = 1 // un fair
//  0, 1, 2
