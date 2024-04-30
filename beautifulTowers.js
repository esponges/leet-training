/* 2865. Beautiful Towers I
Medium
Topics
Companies
Hint
You are given an array heights of n integers representing the number of bricks in n consecutive towers. Your task is to remove some bricks to form a mountain-shaped tower arrangement. In this arrangement, the tower heights are non-decreasing, reaching a maximum peak value with one or multiple consecutive towers and then non-increasing.

Return the maximum possible sum of heights of a mountain-shaped tower arrangement.

 

Example 1:

Input: heights = [5,3,4,1,1]

Output: 13

Explanation:

We remove some bricks to make heights = [5,3,3,1,1], the peak is at index 0.

Example 2:

Input: heights = [6,5,3,9,2,7]

Output: 22

Explanation:

We remove some bricks to make heights = [3,3,3,9,2,2], the peak is at index 3.

Example 3:

Input: heights = [3,2,5,5,2,3]

Output: 18

Explanation:

We remove some bricks to make heights = [2,2,5,5,2,2], the peak is at index 2 or 3.

 

Constraints:

1 <= n == heights <= 103
1 <= heights[i] <= 109
Seen this question in a real interview before?
1/5
Yes
No
Accepted
22.2K
Submissions
51.3K
Acceptance Rate
43.4% 

https://leetcode.com/problems/beautiful-towers-i/
*/

/**
 * @param {number[]} heights
 * @returns {number}
 */
function beautifulTowers(heights) {
  const peak = Math.max(...heights);
  const peakIdx = heights.findIndex((p) => peak === p);

  let sum = peak; 

  const left = peakIdx > 0 ? heights.slice(0, peakIdx): [];
  let leftMax;
  for (let i = left.length - 1; i >= 0; i--) {
    const actual = left[i];
    if (!leftMax) {
      leftMax = actual;
      sum += actual;
    } else {
      if (actual > leftMax) {
        left[i] = leftMax;
        sum += leftMax;
      } else {
        sum += actual;
      }
    }
  }
  
  const right = heights.slice(peakIdx);
  let rightMax;
  for (let i = 1; i < right.length; i++) {
    console.log({ sum });
    const actual = right[i];
    if (actual === peak) {
      sum += peak;
      continue;
    } else if (!rightMax) {
      rightMax = actual;
      sum += actual;
    } else {
      if (actual > rightMax) {
        right[i] = rightMax;
        sum += rightMax;
      } else {
        sum += actual;
      }
    }
  }
  console.log({ left, right });

  return sum;
}

const cases = [
  [5,3,4,1,1],
  [6,5,3,9,2,7],
  [3,2,5,5,2,3]
];

cases.forEach(c => console.log(beautifulTowers(c)));
