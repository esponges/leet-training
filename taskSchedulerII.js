/* 
2365. Task Scheduler II
Medium
Topics
Companies
Hint
You are given a 0-indexed array of positive integers tasks, representing tasks that need to be completed in order, where tasks[i] represents the type of the ith task.

You are also given a positive integer space, which represents the minimum number of days that must pass after the completion of a task before another task of the same type can be performed.

Each day, until all tasks have been completed, you must either:

Complete the next task from tasks, or
Take a break.
Return the minimum number of days needed to complete all tasks.

 

Example 1:

Input: tasks = [1,2,1,2,3,1], space = 3
Output: 9
Explanation:
One way to complete all tasks in 9 days is as follows:
Day 1: Complete the 0th task.
Day 2: Complete the 1st task.
Day 3: Take a break.
Day 4: Take a break.
Day 5: Complete the 2nd task.
Day 6: Complete the 3rd task.
Day 7: Take a break.
Day 8: Complete the 4th task.
Day 9: Complete the 5th task.
It can be shown that the tasks cannot be completed in less than 9 days.
Example 2:

Input: tasks = [5,8,8,5], space = 2
Output: 6
Explanation:
One way to complete all tasks in 6 days is as follows:
Day 1: Complete the 0th task.
Day 2: Complete the 1st task.
Day 3: Take a break.
Day 4: Take a break.
Day 5: Complete the 2nd task.
Day 6: Complete the 3rd task.
It can be shown that the tasks cannot be completed in less than 6 days.
 

Constraints:

1 <= tasks.length <= 105
1 <= tasks[i] <= 109
1 <= space <= tasks.length
Seen this question in a real interview before?
1/5
Yes
No
Accepted
36.6K
Submissions
69.7K
Acceptance Rate
52.4%

https://leetcode.com/problems/task-scheduler-ii/description/
*/

/**
 * @param {number[]} tasks
 * @param {number} space
 * @return {number}
 */
function taskScheduleII(tasks, space) {
  let prevTime = {};
  let currTime = 0;
  for (let task of tasks) {
      if (currTime < prevTime[task] + space) {
          let breakTime = prevTime[task] + space - currTime + 1;
          currTime += breakTime;
      } else {
          currTime++;
      }
      prevTime[task] = currTime;
  }
  return currTime;
}

const cases = [
  [[1, 2, 1, 2, 3, 1], 3],
  [[5, 8, 8, 5], 2],
];

cases.forEach((c) => {
  console.log(taskScheduleII(c[0], c[1]));
});
