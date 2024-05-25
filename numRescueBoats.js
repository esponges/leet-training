/* 881. Boats to Save People
Medium
Topics
Companies
You are given an array people where people[i] is the weight of the ith person, and an infinite number of boats where each boat can carry a maximum weight of limit. Each boat carries at most two people at the same time, provided the sum of the weight of those people is at most limit.

Return the minimum number of boats to carry every given person.

 

Example 1:

Input: people = [1,2], limit = 3
Output: 1
Explanation: 1 boat (1, 2)
Example 2:

Input: people = [3,2,2,1], limit = 3
Output: 3
Explanation: 3 boats (1, 2), (2) and (3)
Example 3:

Input: people = [3,5,3,4], limit = 5
Output: 4
Explanation: 4 boats (3), (3), (4), (5)
 

Constraints:

1 <= people.length <= 5 * 104
1 <= people[i] <= limit <= 3 * 104
Seen this question in a real interview before?
1/5
Yes
No
Accepted
411.5K
Submissions
693.4K
Acceptance Rate
59.3%

https://leetcode.com/problems/boats-to-save-people/description/
*/

/**
 * @param {number[]} people
 * @param {number} limit
 * @returns {number}
 */
function numRescueBoats(people, limit) {
  people.sort((a, b) => b - a);
  
  let count = 0;
  let right = people.length - 1;
  let left = 0;
  while (left < right) {
    const light = people[right];
    const heavy = people[left];

    if (light + heavy <= limit) {
      // send heavy & light
      left ++;
      right --;
    } else {
      // send heavy only
      left ++;
    }
    count ++;

    if (left === right) count ++;
  }
  
  return count;
}

const cases = [
  [[1,2], 3],
  [[3,2,2,1], 3],
  [[3,5,3,4], 5],
  [[5,1,4,2], 6]
];

cases.forEach(c => {
  console.log(numRescueBoats(c[0], c[1]));
});
