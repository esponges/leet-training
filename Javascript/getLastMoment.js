/* 1503. Last Moment Before All Ants Fall Out of a Plank
Medium
1.4K
385
Companies
We have a wooden plank of the length n units. Some ants are walking on the plank, each ant moves with a speed of 1 unit per second. Some of the ants move to the left, the other move to the right.

When two ants moving in two different directions meet at some point, they change their directions and continue moving again. Assume changing directions does not take any additional time.

When an ant reaches one end of the plank at a time t, it falls out of the plank immediately.

Given an integer n and two integer arrays left and right, the positions of the ants moving to the left and the right, return the moment when the last ant(s) fall out of the plank.

 

Example 1:


Input: n = 4, left = [4,3], right = [0,1]
Output: 4
Explanation: In the image above:
-The ant at index 0 is named A and going to the right.
-The ant at index 1 is named B and going to the right.
-The ant at index 3 is named C and going to the left.
-The ant at index 4 is named D and going to the left.
The last moment when an ant was on the plank is t = 4 seconds. After that, it falls immediately out of the plank. (i.e., We can say that at t = 4.0000000001, there are no ants on the plank).
Example 2:


Input: n = 7, left = [], right = [0,1,2,3,4,5,6,7]
Output: 7
Explanation: All ants are going to the right, the ant at index 0 needs 7 seconds to fall.
Example 3:


Input: n = 7, left = [0,1,2,3,4,5,6,7], right = []
Output: 7
Explanation: All ants are going to the left, the ant at index 7 needs 7 seconds to fall.
 

Constraints:

1 <= n <= 104
0 <= left.length <= n + 1
0 <= left[i] <= n
0 <= right.length <= n + 1
0 <= right[i] <= n
1 <= left.length + right.length <= n + 1
All values of left and right are unique, and each value can appear only in one of the two arrays.
Accepted
85.4K
Submissions
124.2K
Acceptance Rate
68.8% 

https://leetcode.com/problems/last-moment-before-all-ants-fall-out-of-a-plank/
*/

/**
 * @param {number} n
 * @param {number[]} left
 * @param {number[]} right
 * @return {number}
 */
function getLastMoment(n, left, right) {
  if (left.length === 0 || right.length === 0)
    return left.length ? left.length - 1 : right.length - 1;

  let plank = new Array(n).fill(0);

  for (let i = 0; i < left.length; i++) {
    plank[left[i]] = 'l';
  }

  for (let i = 0; i < right.length; i++) {
    plank[right[i]] = 'r';
  }

  const distances = [];

  // start left side
  for (let i = 0; i < plank.length; i++) {
    // we found left side most distant ant
    if (plank[i] === 'r') {
      distances[0] = plank.length - 1 - i;
      break;
    }
  }

  // then right side
  for (let i = plank.length - 1; i >= 0; i--) {
    // we found the right side most distant ant
    if (plank[i] === 'l') {
      distances[1] = i;
      break;
    }
  }

  return Math.max(...distances);
}

const cases = [
  [4, [4, 3], [0, 1]],
  [7, [], [0, 1, 2, 3, 4, 5, 6, 7]],
  [7, [0, 1, 2, 3, 4, 5, 6, 7], []],
];

cases.forEach((c) => {
  console.log(getLastMoment(c[0], c[1], c[2]));
});
