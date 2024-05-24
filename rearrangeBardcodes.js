/* 
Testcase
Testcase
Test Result
1054. Distant Barcodes
Medium
Topics
Companies
Hint
In a warehouse, there is a row of barcodes, where the ith barcode is barcodes[i].

Rearrange the barcodes so that no two adjacent barcodes are equal. You may return any answer, and it is guaranteed an answer exists.

 

Example 1:

Input: barcodes = [1,1,1,2,2,2]
Output: [2,1,2,1,2,1]
Example 2:

Input: barcodes = [1,1,1,1,2,2,3,3]
Output: [1,3,1,3,1,2,1,2]
 

Constraints:

1 <= barcodes.length <= 10000
1 <= barcodes[i] <= 10000
Seen this question in a real interview before?
1/5
Yes
No
Accepted
42.8K
Submissions
92.1K
Acceptance Rate
46.5%

https://leetcode.com/problems/distant-barcodes/description/
*/

/**
 * @param {number[]} nums
 * @returns {number[]}
 */
function rearrangeBarcodes(nums) {
  const ocurrences = new Array(Math.max(...nums) + 1).fill(0).map((_, idx) => [idx, 0]);

  for (let i = 0; i < nums.length; i++) {
    // [1,1,1,2,2,2]
    const actual = nums[i];
    ocurrences[actual][1]++;
  }
  
  const filtered = ocurrences.filter(([val, count]) => count > 0);
  
  filtered.sort((a, b) => {
    const freqA = a[1];
    const freqB = b[1];
    
    return freqA - freqB;
  });

  let sorted = [...filtered];
  const res = [];
  while (res.length !== nums.length) {
    const last = sorted[sorted.length - 1];
    const secondLast = sorted[sorted.length - 2];

    res.push(last[0]);
    last[1]--;
    
    res.push(secondLast[0]);
    secondLast[1]--;

    // [0, 1, 2, 4]
    if (last[1] === 0) {
      sorted.pop();
      if (secondLast[1] === 0) sorted.pop();
    }
    if (secondLast[1] === 0 && last[1] !== 0) {
      sorted = [...sorted.slice(0, sorted.length - 2), sorted[sorted.length - 1]];
    }
  }

  return res;
}

const cases = [
  [1,1,1,2,2,2],
  [1,1,1,1,2,2,3,3]
];

cases.forEach(c => {
  console.log(rearrangeBarcodes(c));
});
