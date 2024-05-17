/* 
1471. The k Strongest Values in an Array
Medium
Topics
Companies
Hint
Given an array of integers arr and an integer k.

A value arr[i] is said to be stronger than a value arr[j] if |arr[i] - m| > |arr[j] - m| where m is the median of the array.
If |arr[i] - m| == |arr[j] - m|, then arr[i] is said to be stronger than arr[j] if arr[i] > arr[j].

Return a list of the strongest k values in the array. return the answer in any arbitrary order.

Median is the middle value in an ordered integer list. More formally, if the length of the list is n, the median is the element in position ((n - 1) / 2) in the sorted list (0-indexed).

For arr = [6, -3, 7, 2, 11], n = 5 and the median is obtained by sorting the array arr = [-3, 2, 6, 7, 11] and the median is arr[m] where m = ((5 - 1) / 2) = 2. The median is 6.
For arr = [-7, 22, 17, 3], n = 4 and the median is obtained by sorting the array arr = [-7, 3, 17, 22] and the median is arr[m] where m = ((4 - 1) / 2) = 1. The median is 3.
 

Example 1:

Input: arr = [1,2,3,4,5], k = 2
Output: [5,1]
Explanation: Median is 3, the elements of the array sorted by the strongest are [5,1,4,2,3]. The strongest 2 elements are [5, 1]. [1, 5] is also accepted answer.
Please note that although |5 - 3| == |1 - 3| but 5 is stronger than 1 because 5 > 1.
Example 2:

Input: arr = [1,1,3,5,5], k = 2
Output: [5,5]
Explanation: Median is 3, the elements of the array sorted by the strongest are [5,5,1,1,3]. The strongest 2 elements are [5, 5].
Example 3:

Input: arr = [6,7,11,7,6,8], k = 5
Output: [11,8,6,6,7]
Explanation: Median is 7, the elements of the array sorted by the strongest are [11,8,6,6,7,7].
Any permutation of [11,8,6,6,7] is accepted.
 

Constraints:

1 <= arr.length <= 105
-105 <= arr[i] <= 105
1 <= k <= arr.length
Seen this question in a real interview before?
1/5
Yes
No
Accepted
38.3K
Submissions
62.6K
Acceptance Rate
61.2%

https://leetcode.com/problems/the-k-strongest-values-in-an-array/
*/

cases = [
  [[1, 2, 3, 4, 5], 2],
  [[1, 1, 3, 5, 5], 2],
  [[6, 7, 11, 7, 6, 8], 5],
];
/**
 * @param {number[]} arr
 * @param {number} k
 * @returns {number[]}
 *
 */


function getStrongest(arr, k) {
  function bubbleSort(nums, left, right) {
    if (left === right) return nums;
    for (let i = left; i < right; i++) {
      const actual = nums[i];
      const next = nums[i + 1];
      
      if (actual > next) {
        nums[i + 1] = actual;
        nums[i] = next;
      }
    }

    return bubbleSort(nums, left, right - 1);
  }

  const ordered = bubbleSort(arr, 0, arr.length);
  console.log({ordered});
  let median;

  if (ordered.length % 2 !== 0) {
    const idx = (ordered.length - 1) / 2;
    median = ordered[idx];
  } else {
    // when set is even median = (midLeftVal + midRightVal / 2)
    const left = Math.floor((ordered.length - 1) / 2)
    const right = Math.ceil((ordered.length - 1) / 2);
    median = (ordered[left] + ordered[right]) / 2;
  }

}


cases.forEach(c => {
  console.log(getStrongest(c[0], c[1]));
});
