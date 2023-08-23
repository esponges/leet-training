/* You are given an array of non-overlapping intervals intervals where intervals[i] = [starti, endi] represent the start and the end of the ith interval and intervals is sorted in ascending order by starti. You are also given an interval newInterval = [start, end] that represents the start and end of another interval.

Insert newInterval into intervals such that intervals is still sorted in ascending order by starti and intervals still does not have any overlapping intervals (merge overlapping intervals if necessary).

Return intervals after the insertion.

 

Example 1:

Input: intervals = [[1,5],[6,9]], newInterval = [2,5]
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
  const merge = intervals.reduce((acc, actual) => {
    const first = actual[0];
    const second = actual[1];
    return [...acc, first, second]; 
  });

  
  let start;
  let end;
  let push = true;
  const intervalStart = newInterval[0];
  const intervalEnd = newInterval[1];
  console.log('interval end', intervalEnd);

  // [1,3],[6,9]] --- [2, 5]
  const updatedInterval = [];
  for (let i = 0; i < merge.length; i++) {
    const actual = merge[i];
    const next = merge[i+1];
    console.log('actual', actual);

    if (intervalStart > actual && intervalEnd > actual)
    
    // if (push && !start) updatedInterval.push(actual);
    // if (!start) updatedInterval.push(actual);
    // // look for start
    // if (!push && intervalStart > next) {
    //   console.log('start push');
    //   start = true;
    //   updatedInterval.push(intervalStart);
      
    //   push = false
    // } else if (!start && !push && intervalEnd > actual) {
    //   console.log('start end');
    //   end = true;
    //   updatedInterval.push(intervalEnd);
    //   // set end
    // }

    // [1,3],[6,9]]
    // [2, 5]
  }
  console.log(updatedInterval);
}

const cases = [
  [[[1,3],[6,9]], [2,5]],
  // [[[1,2],[3,5],[6,7],[8,10],[12,16]], [4, 8]]
];

cases.forEach(c => {
  insertInterval(c[0], c[1]);
})
