/* 
1386. Cinema Seat Allocation
Medium
Topics
Companies
Hint


A cinema has n rows of seats, numbered from 1 to n and there are ten seats in each row, labelled from 1 to 10 as shown in the figure above.

Given the array reservedSeats containing the numbers of seats already reserved, for example, reservedSeats[i] = [3,8] means the seat located in row 3 and labelled with 8 is already reserved.

Return the maximum number of four-person groups you can assign on the cinema seats. A four-person group occupies four adjacent seats in one single row. Seats across an aisle (such as [3,3] and [3,4]) are not considered to be adjacent, but there is an exceptional case on which an aisle split a four-person group, in that case, the aisle split a four-person group in the middle, which means to have two people on each side.

 

Example 1:



Input: n = 3, reservedSeats = [[1,2],[1,3],[1,8],[2,6],[3,1],[3,10]]
Output: 4
Explanation: The figure above shows the optimal allocation for four groups, where seats mark with blue are already reserved and contiguous seats mark with orange are for one group.
Example 2:

Input: n = 2, reservedSeats = [[2,1],[1,8],[2,6]]
Output: 2
Example 3:

Input: n = 4, reservedSeats = [[4,3],[1,4],[4,6],[1,7]]
Output: 4
 

Constraints:

1 <= n <= 10^9
1 <= reservedSeats.length <= min(10*n, 10^4)
reservedSeats[i].length == 2
1 <= reservedSeats[i][0] <= n
1 <= reservedSeats[i][1] <= 10
All reservedSeats[i] are distinct.
Seen this question in a real interview before?
1/5
Yes
No
Accepted
49.5K
Submissions
117.5K
Acceptance Rate
42.2%

https://leetcode.com/problems/cinema-seat-allocation/description/
*/

/**
 * @param {number} n
 * @param {number [][]} reservedSeats
 * @returns {number}
 */

function maxNumOfFamilies(n, reservedSeats) {
  let map = new Map()

  for (let [row, col] of reservedSeats) {
      let cols = map.get(row) || new Set()
      cols.add(col)
      map.set(row, cols)
  }

  let res = (n - map.size) * 2

  for (let cols of map.values()) {
      let first = ![2, 3, 4, 5].some(col => cols.has(col))
      let last = ![6, 7, 8, 9].some(col => cols.has(col))
      let mid = ![4, 5, 6, 7].some(col => cols.has(col))

      // if both first and last are available that should
      // be prioritized over mid, since mid == 1 and first(1) + last(1) == 2
      res += Math.max(first + last, mid)
  }

  return res
}

const cases = [
  [
    3,
    [
      [1, 2],
      [1, 3],
      [1, 8],
      [2, 6],
      [3, 1],
      [3, 10],
    ],
  ],
  [
    2,
    [
      [2, 1],
      [1, 8],
      [2, 6],
    ],
  ],
  [
    4,
    [
      [4, 3],
      [1, 4],
      [4, 6],
      [1, 7],
    ],
  ],
];

cases.forEach((c) => console.log(maxNumOfFamilies(c[0], c[1])));
