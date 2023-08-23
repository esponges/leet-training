/* You are given an array of non-overlapping intervals intervals where intervals[i] = [starti, endi] represent the start and the end of the ith interval and intervals is sorted in ascending order by starti. You are also given an interval newInterval = [start, end] that represents the start and end of another interval.

Insert newInterval into intervals such that intervals is still sorted in ascending order by starti and intervals still does not have any overlapping intervals (merge overlapping intervals if necessary).

Return intervals after the insertion.

 

Example 1:

Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
// if first > start = replace
// if second > start = replace

// if second > end = replace
Output: [[1,5],[6,9]]
Example 2:

Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
Output: [[1,2],[3,10],[12,16]]
Explanation: Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].
 

Constraints:

0 <= intervals.length <= 104
intervals[i].length == 2
0 <= starti <= endi <= 105
intervals is sorted by starti in ascending order.
newInterval.length == 2
0 <= start <= end <= 105 */

/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @returns {number[][]}
 */

function insertInterval(intervals, newInterval) {
  let [newIntStart, newIntEnd] = newInterval;
  let left = [];
  let right = [];

  for (const interval of intervals) {
    const [actualFirst, actualEnd] = interval;
    // current interval is smaller than newInterval
    // push to the left side of the output interval
    // *** once we start overriding newInterval in the last else 
    // this if condition wont ever be met
    if (actualEnd < newIntStart) {
      left.push(interval);
    }
    // current interval is larger than newInterval
    // push to the right till the end of the loop
    else if (actualFirst > newIntEnd) right.push(interval);
    // there is a overlap
    else {
      // override newInterval
      // well override the newInterval until the else if
      // logic has been met
      newIntStart = Math.min(newIntStart, actualFirst);
      newIntEnd = Math.max(newIntEnd, actualEnd);
    }
  }
  return [...left, [newIntStart, newIntEnd], ...right];
}

const cases = [
  [
    [
      [1, 3],
      [6, 9],
    ],
    [2, 5],
  ],
  [
    [
      [1, 2],
      [3, 5],
      [6, 7],
      [8, 10],
      [12, 16],
    ],
    [4, 8],
  ],
];

cases.forEach((c) => {
  console.log(insertInterval(c[0], c[1]));
});
