/* 1705. Maximum Number of Eaten Apples
Medium
786
176
Companies
There is a special kind of apple tree that grows apples every day for n days. On the ith day, the tree grows apples[i] apples that will rot after days[i] days, that is on day i + days[i] the apples will be rotten and cannot be eaten. On some days, the apple tree does not grow any apples, which are denoted by apples[i] == 0 and days[i] == 0.

You decided to eat at most one apple a day (to keep the doctors away). Note that you can keep eating after the first n days.

Given two integer arrays days and apples of length n, return the maximum number of apples you can eat.

 

Example 1:

Input: apples = [1,2,3,5,2], days = [3,2,1,4,2]
Output: 7
Explanation: You can eat 7 apples:
- On the first day, you eat an apple that grew on the first day.
- On the second day, you eat an apple that grew on the second day.
- On the third day, you eat an apple that grew on the second day. After this day, the apples that grew on the third day rot.
- On the fourth to the seventh days, you eat apples that grew on the fourth day.
Example 2:

Input: apples = [3,0,0,0,0,2], days = [3,0,0,0,0,2]
Output: 5
Explanation: You can eat 5 apples:
- On the first to the third day you eat apples that grew on the first day.
- Do nothing on the fouth and fifth days.
- On the sixth and seventh days you eat apples that grew on the sixth day.
 

Constraints:

n == apples.length == days.length
1 <= n <= 2 * 104
0 <= apples[i], days[i] <= 2 * 104
days[i] = 0 if and only if apples[i] = 0.
Accepted
21K
Submissions
54.3K
Acceptance Rate
38.7%

https://leetcode.com/problems/maximum-number-of-eaten-apples/
*/

/**
 * @param {number[]} apples
 * @param {number[]} days
 * @returns {number}
 */
function eatenApples (apples, days) {
  // Input: apples = [1,2,3,5,2], days = [3,2,1,4,2]
  // day av eaten backlog
  // 1   1  1     [0][0]     
  // 2   2  2     [1][1]     
  // 3   1  3     [3][0]     
  // 4   5  4     [4][3]   
  // 5   4  5     [3, 2][2, 1]     
  // 6   3  6     [2][2]     
  // 7   2  7     [1][1]     
  // 8   0  7     [][]
  let backlog = { apples: [], days: []}
  let eaten = 0;
  let keepEating = true;
  let i = 0;
  while (keepEating) {
    const backlogApple = backlog.apples[0];
    const todayApples = apples[i];

    console.log('start of iteration', { i, backlog });
    if (todayApples > 0 || backlogApple > 0) {
      eaten += 1;

      const todayApplesLife = days[i];
      if (backlogApple > 0) {
        console.log('backlog');
        // remove one day to all apples and the just eaten apple
        backlog.days = backlog.days.map(d => d - 1);
        backlog.apples[0] --;

        // if either backlog or life for FIFOs are over, remove them
        if (!backlog.days[0] || !backlog.apples[0]) {
          backlog.days.shift();
          backlog.apples.shift();
        }

        // add todays apple to backlog
        // only if they have more than one day of life
        if (todayApplesLife > 0) {
          backlog.apples.push(todayApples);
          backlog.days.push(todayApplesLife);
        }
      } else {
        console.log('no backlog');
        if (todayApplesLife - 1 > 0 && todayApples - 1 > 0) {
          backlog.apples[0] = todayApples - 1;
          backlog.days[0] = todayApplesLife - 1;
        }
      }
    }
    console.log('end of iteration', { i, backlog });
    i ++;
    
    if (i > apples.length && !backlog.apples[0]) keepEating = false; 
  }
  
  return eaten;
}

const cases = [
  [[1,2,3,5,2],[3,2,1,4,2]],
  [[3,0,0,0,0,2], [3,0,0,0,0,2]],
  // didn't pass
  [[2,1,10], [2, 10, 1]]
];

cases.forEach(c => {
  console.log(eatenApples(c[0], c[1]));
})
