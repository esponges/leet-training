/* 
  377. Combination Sum IV
Medium
Topics
Companies
Given an array of distinct integers nums and a target integer target, return the number of possible combinations that add up to target.

The test cases are generated so that the answer can fit in a 32-bit integer.

 

Example 1:

Input: nums = [1,2,3], target = 4
Output: 7
Explanation:
The possible combination ways are:
(1, 1, 1, 1)
(1, 1, 2)
(1, 2, 1)
(1, 3)
(2, 1, 1)
(2, 2)
(3, 1)
Note that different sequences are counted as different combinations.
Example 2:

Input: nums = [9], target = 3
Output: 0
 

Constraints:

1 <= nums.length <= 200
1 <= nums[i] <= 1000
All the elements of nums are unique.
1 <= target <= 1000
 

Follow up: What if negative numbers are allowed in the given array? How does it change the problem? What limitation we need to add to the question to allow negative numbers?

Seen this question in a real interview before?
1/5
Yes
No
Accepted
485.2K
Submissions
895.4K
Acceptance Rate
54.2%
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @returns {number}
 */

const combinationNum4 = (nums, target) => {
  const res = [];

  function backtrack(nums, target, combination, res) {
    const sum = combination.reduce((a, b) => a + b, 0);

    if (sum === target) {
      // pass a copy or the original will be mutated
      // during the next iteration
      res.push([...combination]);
      return;
    }

    if (sum > target) return;

    for (let i = 0; i < nums.length; i++) {
      combination.push(nums[i]);
      backtrack(nums, target, combination, res);
      combination.pop();
    }
  }

  backtrack(nums, target, [], res);

  return res.length;
};

//                       [1, 2, 3]
//                      /   \
//                     /     \
//                    /       \
//                   /         \
//                  /           \
//                 /             \
//               [1]             [2]
//              /   \             /  \
//             /     \           /    \
//            /       \         /      \
//           /         \       /        \
//          /           \     /          \
//         /             \   /            \
//       [1,1]           [2,1]          [2,2]
//        /  \            /  \            /  \
//       /    \          /    \          /    \
//      /      \        /      \        /      \
//     /        \      /        \      /        \
// [1,1,1]   [1,1,2] [2,1,1] [2,1,2] [2,2,1] [2,2,2]
//     |         |        |        |        |        |
//     |         |        |        |        |        |
// [1,1,1,1] [1,1,2,1][2,1,1,1][2,1,2,1][2,2,1,1][2,2,2,1]
//               |        |        |        |        |
//               |        |        |        |        |
//             [1,1,2,2][2,1,1,2][2,1,2,2][2,2,1,2][2,2,2,2]
//                                  |
//                                  |
//                                [2,1,2,3]

// The combinations found are:
// [1, 1, 1, 1]
// [1, 1, 2]
// [1, 2, 1]
// [1, 1, 2, 2]
// [2, 1, 1]
// [2, 1, 2]
// [2, 2, 1]
// [2, 2, 2]
// [2, 1, 2, 3]

// The backtracking process starts with an empty combination [].
// At each step, it explores all possible choices by adding each number from the nums array to the combination and recursively calling backtrack with the updated combination.
// If the sum of the current combination equals the target (4), it adds a copy of the combination to the res array.
// If the sum exceeds the target, it backtracks and tries the next choice.
// The process continues until all possible combinations are explored.

const cases = [[[1, 2, 3], 4]];

cases.forEach((c) => {
  console.log(combinationNum4(c[0], c[1]));
});
