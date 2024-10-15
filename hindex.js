/* 275. H-Index II
Medium
Topics
Companies
Hint
Given an array of integers citations where citations[i] is the number of citations a researcher received for their ith paper and citations is sorted in ascending order, return the researcher's h-index.

According to the definition of h-index on Wikipedia: The h-index is defined as the maximum value of h such that the given researcher has published at least h papers that have each been cited at least h times.

You must write an algorithm that runs in logarithmic time.

 

Example 1:

Input: citations = [0,1,3,5,6]
Output: 3
Explanation: [0,1,3,5,6] means the researcher has 5 papers in total and each of them had received 0, 1, 3, 5, 6 citations respectively.
Since the researcher has 3 papers with at least 3 citations each and the remaining two with no more than 3 citations each, their h-index is 3.
Example 2:

Input: citations = [1,2,100]
Output: 2

https://leetcode.com/problems/h-index-ii/description/
 */

/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function (citations) {
  let max = 0;
  function rec(arr, offset) {
    // [5, 6] 0
    // base case here
    if (!arr.length) return;

    const mid = arr.length > 2 ? Math.floor(arr.length / 2) : 0; // 1 // to the left
    const target = arr[mid]; // 6
    const right = arr.length - (arr.length > 2 ? mid : 1) + offset; // 1 - 1 + 0 = 1

    if (target <= right) {
      max = target;
      rec(arr.slice(mid + 1, 0)); // [5, 6], 0
    } else {
      rec(arr.slice(mid - 1, right)); // [5], 1
      rec(arr.slice(mid + 1, 0)); // [6], 0
    }
  }

  rec(citations, 0);

  return max;
};

const cases = [
  [0, 1, 3, 5, 6],
  [1, 2, 100],
];
cases.forEach((c) => console.log(hIndex(c)));
