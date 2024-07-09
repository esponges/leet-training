/* 
949. Largest Time for Given Digits
Medium
Topics
Companies
Given an array arr of 4 digits, find the latest 24-hour time that can be made using each digit exactly once.

24-hour times are formatted as "HH:MM", where HH is between 00 and 23, and MM is between 00 and 59. The earliest 24-hour time is 00:00, and the latest is 23:59.

Return the latest 24-hour time in "HH:MM" format. If no valid time can be made, return an empty string.

 

Example 1:

Input: arr = [1,2,3,4]
Output: "23:41"
Explanation: The valid 24-hour times are "12:34", "12:43", "13:24", "13:42", "14:23", "14:32", "21:34", "21:43", "23:14", and "23:41". Of these times, "23:41" is the latest.
Example 2:

Input: arr = [5,5,5,5]
Output: ""
Explanation: There are no valid 24-hour times as "55:55" is not valid.
 

Constraints:

arr.length == 4
0 <= arr[i] <= 9

https://leetcode.com/problems/largest-time-for-given-digits/description/
*/

function largestTimeFromDigits(array) {
  let max = [-1, -1, -1, -1];

  function isBiggerValid(hour, prevMax) {
    if (hour[0] > 2) return false;

    const newHH = parseInt(`${hour[0]}${hour[1]}`);
    const prevHH = parseInt(`${prevMax[0]}${prevMax[1]}`);
    const newMM = parseInt(`${hour[2]}${hour[3]}`);
    const prevMM = parseInt(`${prevMax[2]}${prevMax[3]}`);

    if (newHH > 23) return false;
    if (newMM > 59) return false;

    if (newHH > prevHH) return true;
    else if (newHH === prevHH) {
      if (newMM > prevMM) return true;
      else if (hour[2] === prevMax[2]) {
        return hour[3] > prevMax[3];
      }
    }

    return false;
  }

  function backtrack(actual, visited, maxHour, arr) {
    if (actual.length === 4) {
      if (isBiggerValid(actual, max)) max = actual;
      return;
    }

    for (let i = 0; i <= arr.length; i++) {
      if (visited[i] == false) {
        visited[i] = true;
        backtrack([...actual, arr[i]], visited, maxHour, arr);
        visited[i] = false;
      }
    }
  }

  const visitedInitial = new Array(array.length).fill(false);
  backtrack([], visitedInitial, max, array);

  for (m of max) {
    if (m < 0) return '';
  }

  return `${max[0]}${max[1]}:${max[2]}${max[3]}`;
}

const cases = [
  [1, 2, 3, 4],
  [5, 5, 5, 5],
];

cases.forEach((c) => {
  console.log(largestTimeFromDigits(c));
});
