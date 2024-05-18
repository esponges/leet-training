/* 1558. Minimum Numbers of Function Calls to Make Target Array
Medium
Topics
Companies
Hint
You are given an integer array nums. You have an integer array arr of the same length with all values set to 0 initially. You also have the following modify function:


You want to use the modify function to convert arr to nums using the minimum number of calls.

Return the minimum number of function calls to make nums from arr.

The test cases are generated so that the answer fits in a 32-bit signed integer.

 

Example 1:

Input: nums = [1,5]
Output: 5
Explanation: Increment by 1 (second element): [0, 0] to get [0, 1] (1 operation).
Double all the elements: [0, 1] -> [0, 2] -> [0, 4] (2 operations).
Increment by 1 (both elements)  [0, 4] -> [1, 4] -> [1, 5] (2 operations).
Total of operations: 1 + 2 + 2 = 5.
Example 2:

Input: nums = [2,2]
Output: 3
Explanation: Increment by 1 (both elements) [0, 0] -> [0, 1] -> [1, 1] (2 operations).
Double all the elements: [1, 1] -> [2, 2] (1 operation).
Total of operations: 2 + 1 = 3.
Example 3:

Input: nums = [4,2,5]
Output: 6
Explanation: (initial)[0,0,0] -> [1,0,0] -> [1,0,1] -> [2,0,2] -> [2,1,2] -> [4,2,4] -> [4,2,5](nums).
 

Constraints:

1 <= nums.length <= 105
0 <= nums[i] <= 109
Seen this question in a real interview before?
1/5
Yes
No
Accepted
21.4K
Submissions
33.6K
Acceptance Rate
63.5%

https://leetcode.com/problems/minimum-numbers-of-function-calls-to-make-target-array/
*/

function modify(arr, opt, idx) {
  // decrease target idx by 1
  if (opt === 0) {
    arr[idx] = arr[idx] - 1;
  } else if (opt === 1) {
    // divide them all by 2
    for (let i = 0; i < arr.length; i++) {
      arr[i] = arr[i] / 2;
    }
  }
  return arr;
}

/**
 * @param {number[]} nums
 * @returns {number}
 */
function minOperations(nums) {
  const evenEls = [];
  const oddEls = [];

  let sum = nums.reduce((a, b) => {
    if (b % 2 !== 0) oddEls.push(b);
    else evenEls.push(a); 
    return a + b;
  }, 0);
  let moves = 0;

  while (sum !== 0) {
    // last step just needs one extra move
    // since 2/2 = 1
    if (sum === 1) {
      moves++;
      return moves;
    }

    if (oddEls.length === 0) {
      // div is odd then extra step is required
      if (sum % 2 !== 0) {
        moves ++;
        sum -= 1;
      }

      sum = sum / 2;
    } else {
      // find first uneven el and reduce it by 1
      oddEls[oddEls.length - 1]--;
      if (oddEls[oddEls.length - 1] % 2 === 0) oddEls.pop();

      sum--;
    }
    moves++;
  }
}

const cases = [
  // [1,5],
  // [2,2],
  [4, 2, 5]
];

cases.forEach(c => {
  console.log(minOperations(c))
})
