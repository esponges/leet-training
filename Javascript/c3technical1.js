/* 
  Given a number of temperatures, return the latest day where the temperature was highest.

  Example:
  Input: [73, 74, 75, 71, 69, 72, 76, 73]
  Output: [1, 2, 3, 1, 1, 3, 7, 1]

  Explanation:
  The first day (index 0) is the first day where the temperature was highest.
  The second day (index 1) is the second day where the temperature was highest, and so on.

  Example 2:
  Input: [30, 40, 50, 60]
  Output: [1, 2, 3, 4]

  Explanation:
  For all the temp[i], none of the previous days have a higher temperature, so the output would be i + 1.

  Follow up:
  Can you solve it in linear time and constant space?  
*/

/* 
* I solved this by brute fore correctly, but the interviewer 
  asked me if it could be solved linearly an walked me through
  the solution to see if I could understand it.
*/

/**
 * @param {number[]} temps
 * @return {number[]}
 */
function temperatures (temps) {
  // initial case will have a one since ther is no prev temperature
  const prevsHigherCounts = [1];
  let prevHighest = [0, temps[0]];
  for (let i = 1; i < temps.length; i++) {
    const actual = temps[i];         
    const prevIdx = prevHighest[0];
    const prevTemp = prevHighest[1];

    const diff = Math.abs(i - prevIdx);
    if (actual < prevTemp) {
      prevsHigherCounts.push(diff);
    } else {
      // none of the highest in the past is higher,
      // therefore this will the new highest and 
      // we should consider the i + 1 (like inital) case to be the distance - see example 1 n[2] -> 75
      prevsHigherCounts.push(i + 1);
      prevHighest = [i, actual];
    }
  }

  return prevsHigherCounts;
}

const cases = [
  [73, 74, 75, 71, 69, 72, 76, 73], // [1, 2, 3, 1, 1]
  [30, 40, 50, 60]
];

cases.forEach(c => {
  console.log(temperatures(c));
})
