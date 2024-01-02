/* 436. Find Right Interval
Medium
2K
329
Companies
You are given an array of intervals, where intervals[i] = [starti, endi] and each starti is unique.

The right interval for an interval i is an interval j such that startj >= endi and startj is minimized. Note that i may equal j.

Return an array of right interval indices for each interval i. If no right interval exists for interval i, then put -1 at index i.

 

Example 1:

Input: intervals = [[1,2]]
Output: [-1]
Explanation: There is only one interval in the collection, so it outputs -1.
Example 2:

Input: intervals = [[3,4],[2,3],[1,2]]
Output: [-1,0,1]
Explanation: There is no right interval for [3,4].
The right interval for [2,3] is [3,4] since start0 = 3 is the smallest start that is >= end1 = 3.
The right interval for [1,2] is [2,3] since start1 = 2 is the smallest start that is >= end2 = 2.
Example 3:

Input: intervals = [[1,4],[2,3],[3,4]]
Output: [-1,2,-1]
Explanation: There is no right interval for [1,4] and [3,4].
The right interval for [2,3] is [3,4] since start2 = 3 is the smallest start that is >= end1 = 3.
 

Constraints:

1 <= intervals.length <= 2 * 104
intervals[i].length == 2
-106 <= starti <= endi <= 106
The start point of each interval is unique.
Accepted
106K
Submissions
205.3K
Acceptance Rate
51.7%

https://leetcode.com/problems/find-right-interval/
*/

/**
 * @param {number[][]}intervals
 * @returns {number[]}
 */
function findRightIntervals(intervals) {
  // base case
  if (intervals.length === 1) return [-1];

  const ints = {};
  // use map to  check if endi === starti
  // it will also order asc if using object
  for (let i = 0; i < intervals.length; i++) {
    const int = intervals[i];
    // save int and index, both will be used
    ints[int[0]] = [int, i];
  }

  // other wise check incoming intervals
  // using an array
  // it already will be ordered by the object
  const pos = [];
  const ordered = [];
  Object.values(ints).forEach((i) => {
    const start = i[0][0];
    if (start >= 0) pos.push(i);
    else ordered.push(i);
  });
  ordered.push(...pos);

  const res = [];
  // find closest interval where startj >= endi
  let cache;
  for (let i = 0; i < intervals.length; i++) {
    const int = intervals[i];
    // first try exact match
    const [startI, endI] = int;
    if (endI === ints[endI]) {
      console.log('match');
      const JIdx = ints[endI[0], [1]];
      res.push(JIdx);
    } else {
      // console.log('didnt');
      // iterate over the next ints to find possible right interval
      // todo: write a fn to find closest value to start with?
      const start = endI >= cache && cache[0] ? cache[1] - 1 : 0;
      for (let i = start; i < ordered.length; i++) {
        const actual = ordered[i];
        const [startJ, endJ] = actual[0];
        if (startJ >= endI) {
          res.push(actual[1]);
          cache = [startJ, i];
          break;
        }
      }
      // not found
      if (res.length !== i + 1) res.push(-1);
    }
  }

  return res;
}

const cases = [
  // [[1, 2]],
  // [
  //   [3, 4],
  //   [2, 3],
  //   [1, 2],
  // ],
  // [
  //   [1, 4],
  //   [2, 3],
  //   [3, 4],
  // ],
  [[1,2],[2,3],[0,1],[3,4]]
  // didn't pass
  // [
  //   [-100, -98],
  //   [-99, -97],
  //   [-98, -96],
  //   [-97, -95],
  //   [-96, -94],
  //   [-95, -93],
  //   [-94, -92],
  //   [-93, -91],
  //   [-92, -90],
  //   [-91, -89],
  //   [-90, -88],
  //   [-89, -87],
  //   [-88, -86],
  //   [-87, -85],
  //   [-86, -84],
  //   [-85, -83],
  //   [-84, -82],
  //   [-83, -81],
  //   [-82, -80],
  //   [-81, -79],
  //   [-80, -78],
  //   [-79, -77],
  //   [-78, -76],
  //   [-77, -75],
  //   [-76, -74],
  //   [-75, -73],
  //   [-74, -72],
  //   [-73, -71],
  //   [-72, -70],
  //   [-71, -69],
  //   [-70, -68],
  //   [-69, -67],
  //   [-68, -66],
  //   [-67, -65],
  //   [-66, -64],
  //   [-65, -63],
  //   [-64, -62],
  //   [-63, -61],
  //   [-62, -60],
  //   [-61, -59],
  //   [-60, -58],
  //   [-59, -57],
  //   [-58, -56],
  //   [-57, -55],
  //   [-56, -54],
  //   [-55, -53],
  //   [-54, -52],
  //   [-53, -51],
  //   [-52, -50],
  //   [-51, -49],
  //   [-50, -48],
  //   [-49, -47],
  //   [-48, -46],
  //   [-47, -45],
  //   [-46, -44],
  //   [-45, -43],
  //   [-44, -42],
  //   [-43, -41],
  //   [-42, -40],
  //   [-41, -39],
  //   [-40, -38],
  //   [-39, -37],
  //   [-38, -36],
  //   [-37, -35],
  //   [-36, -34],
  //   [-35, -33],
  //   [-34, -32],
  //   [-33, -31],
  //   [-32, -30],
  //   [-31, -29],
  //   [-30, -28],
  //   [-29, -27],
  //   [-28, -26],
  //   [-27, -25],
  //   [-26, -24],
  //   [-25, -23],
  //   [-24, -22],
  //   [-23, -21],
  //   [-22, -20],
  //   [-21, -19],
  //   [-20, -18],
  //   [-19, -17],
  //   [-18, -16],
  //   [-17, -15],
  //   [-16, -14],
  //   [-15, -13],
  //   [-14, -12],
  //   [-13, -11],
  //   [-12, -10],
  //   [-11, -9],
  //   [-10, -8],
  //   [-9, -7],
  //   [-8, -6],
  //   [-7, -5],
  //   [-6, -4],
  //   [-5, -3],
  //   [-4, -2],
  //   [-3, -1],
  //   [-2, 0],
  //   [-1, 1],
  //   [0, 2],
  //   [1, 3],
  //   [2, 4],
  //   [3, 5],
  //   [4, 6],
  //   [5, 7],
  //   [6, 8],
  //   [7, 9],
  //   [8, 10],
  //   [9, 11],
  //   [10, 12],
  //   [11, 13],
  //   [12, 14],
  //   [13, 15],
  //   [14, 16],
  //   [15, 17],
  //   [16, 18],
  //   [17, 19],
  //   [18, 20],
  //   [19, 21],
  //   [20, 22],
  //   [21, 23],
  //   [22, 24],
  //   [23, 25],
  //   [24, 26],
  //   [25, 27],
  //   [26, 28],
  //   [27, 29],
  //   [28, 30],
  //   [29, 31],
  //   [30, 32],
  //   [31, 33],
  //   [32, 34],
  //   [33, 35],
  //   [34, 36],
  //   [35, 37],
  //   [36, 38],
  //   [37, 39],
  //   [38, 40],
  //   [39, 41],
  //   [40, 42],
  //   [41, 43],
  //   [42, 44],
  //   [43, 45],
  //   [44, 46],
  //   [45, 47],
  //   [46, 48],
  //   [47, 49],
  //   [48, 50],
  //   [49, 51],
  //   [50, 52],
  //   [51, 53],
  //   [52, 54],
  //   [53, 55],
  //   [54, 56],
  //   [55, 57],
  //   [56, 58],
  //   [57, 59],
  //   [58, 60],
  //   [59, 61],
  //   [60, 62],
  //   [61, 63],
  //   [62, 64],
  //   [63, 65],
  //   [64, 66],
  //   [65, 67],
  //   [66, 68],
  //   [67, 69],
  //   [68, 70],
  //   [69, 71],
  //   [70, 72],
  //   [71, 73],
  //   [72, 74],
  //   [73, 75],
  //   [74, 76],
  //   [75, 77],
  //   [76, 78],
  //   [77, 79],
  //   [78, 80],
  //   [79, 81],
  //   [80, 82],
  //   [81, 83],
  //   [82, 84],
  //   [83, 85],
  //   [84, 86],
  //   [85, 87],
  //   [86, 88],
  //   [87, 89],
  //   [88, 90],
  //   [89, 91],
  //   [90, 92],
  //   [91, 93],
  //   [92, 94],
  //   [93, 95],
  //   [94, 96],
  //   [95, 97],
  //   [96, 98],
  //   [97, 99],
  //   [98, 100],
  //   [99, 101],
  // ],
];

cases.forEach((c) => {
  console.log(findRightIntervals(c));
});
