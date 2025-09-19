/*  
  1010. Pairs of Songs With Total Durations Divisible by 60
Medium
Topics
Companies
Hint
You are given a list of songs where the ith song has a duration of time[i] seconds.

Return the number of pairs of songs for which their total duration in seconds is divisible by 60. Formally, we want the number of indices i, j such that i < j with (time[i] + time[j]) % 60 == 0.

 

Example 1:

Input: time = [30,20,150,100,40]
Output: 3
Explanation: Three pairs have a total duration divisible by 60:
(time[0] = 30, time[2] = 150): total duration 180
(time[1] = 20, time[3] = 100): total duration 120
(time[1] = 20, time[4] = 40): total duration 60
Example 2:

Input: time = [60,60,60]
Output: 3
Explanation: All three pairs have a total duration of 120, which is divisible by 60.
 

Constraints:

1 <= time.length <= 6 * 104
1 <= time[i] <= 500
Seen this question in a real interview before?
1/5
Yes
No
Accepted
272.5K
Submissions
515.3K
Acceptance Rate
52.9%
*/

/**
 * @param {number[]} time
 * @returns {number}
 */
function numPairsDivisibleBy60(time) {
  let left = 0;
  let right = left + 1;

  let count = 0;
  while (left < time.length - 1) {
    if ((time[left] + time[right]) % 60 === 0) {
      count++;
    }
    right ++;

    if (right === time.length) {
      left++;
      right = left + 1;
    }
  }
  return count;
}

const cases = [
  [30, 20, 150, 100, 40],
  [60, 60, 60],
];

cases.forEach(c => {
  console.log(numPairsDivisibleBy60(c))
})
