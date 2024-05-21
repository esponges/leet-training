/* 198. House Robber
Medium
Topics
Companies
You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.

 

Example 1:

Input: nums = [1,2,3,1]
Output: 4
Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
Total amount you can rob = 1 + 3 = 4.
Example 2:

Input: nums = [2,7,9,3,1]
Output: 12
Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
Total amount you can rob = 2 + 9 + 1 = 12.
 

Constraints:

1 <= nums.length <= 100
0 <= nums[i] <= 400
Seen this question in a real interview before?
1/5
Yes
No
Accepted
2.2M
Submissions
4.3M
Acceptance Rate
51.0% 

https://leetcode.com/problems/house-robber/description/
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  function traverse(arr) {
    if (arr.length <= 1) return arr[0] || 0;

    let maxVal = 0;
    const occs = {};

    for (let i = 0; i < arr.length; i++) {
      const actual = arr[i];

      if (!occs[actual]) occs[actual] = [i];
      else occs[actual].push(i);

      if (actual > maxVal) maxVal = actual;
    }

    if (maxVal === 0 || nums.length <= 2) return 0;

    const sums = [];

    for (repIdx of occs[maxVal]) {
      const left = repIdx > 1 ? arr.slice(0, repIdx - 1) : [];
      const right = repIdx < arr.length - 2 ? arr.slice(repIdx + 2) : [];

      const res = maxVal + traverse(left) + traverse(right);
      sums.push(res);
    }

    return Math.max(...sums);
  }

  return traverse(nums);
};

function easiestToUnderstandSol(nums) {
  function rob(arr, i) {
    if (i > arr.length - 1) return 0;

    // we have two options everytime we want to rob
    // 1
    // left side
    // we can either rob this house and get the value of 2 houses ahead
    // 2
    // right side
    // rob the next house but not this house
    // pick the MAX value from that
    // we're done once I exceeds the length (no more house to rob)

    return Math.max(rob(arr, i + 2) + arr[i], rob(arr, i + 1));
  }

  return rob(nums, 0);
}

function solWithMemo(nums) {
  // the problem with the above solution is
  // that it a n^2 time complexity due to the
  // Math.Max recursive calls

  // try to not overflow the stack with a memo
  const memo = Array(nums.length).fill(null);

  function rob(arr, i) {
    if (i > arr.length - 1) return 0;

    if (memo[i]) return memo[i];

    const res = Math.max(rob(arr, i + 2) + arr[i], rob(arr, i + 1));
    memo[i] = res;

    return res;
  }

  return rob(nums, 0);
}

const cases = [
  // [2, 3, 2], // prev implementation will fail for this since
  // always look for the first highest element... :'()
  // [2,7,9,3,1],
  // [1,1,1]
  // [1,2,3,1],
  [2,7,9,3,1],
];

// cases.forEach(c => console.log(rob(c)));
cases.forEach(c => console.log(easiestToUnderstandSol(c)));
cases.forEach((c) => console.log(solWithMemo(c)));
