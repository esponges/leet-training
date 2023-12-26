/* Given an array of integers arr and an integer k. Find the least number of unique integers after removing exactly k elements.

 

Example 1:

Input: arr = [5,5,4], k = 1
Output: 1
Explanation: Remove the single 4, only 5 is left.
Example 2:
Input: arr = [4,3,1,1,3,3,2], k = 3
Output: 2
Explanation: Remove 4, 2 and either one of the two 1s or three 3s. 1 and 3 will be left.
 

Constraints:

1 <= arr.length <= 10^5
1 <= arr[i] <= 10^9
0 <= k <= arr.length
Accepted
108.9K
Submissions
194.3K
Acceptance Rate
56.1%

https://leetcode.com/problems/least-number-of-unique-integers-after-k-removals/
*/

/**
 * @param {number[]} arr
 * @param {number} k
 * @returns {number}
 */
function findLeastNumOfUniqueInts(arr, k) {
  if (k === 0) return arr.length;

  const vol = new Map();
  for (n of arr) {
    const actual = vol.get(n);
    if (actual) {
      vol.set(n, actual + 1);
    } else {
      vol.set(n, 1);
    }
  }

  const uniqueToRemove = [];

  vol.forEach((val, key) => {
    if (val === 1) {
      uniqueToRemove.push(key)
    };
  });

  for (n of uniqueToRemove) {
    const idx = arr.findIndex(el => el === n);
    arr.splice(idx, 1);
  }

  console.log({ vol, uniqueToRemove, arr });

  let rest = k - uniqueToRemove.length;

  const remaining = new Set(arr);
  if (rest > 0) {
    const canBeRemoved = new Set();
    console.log({ rest });
    for (n of arr) {
      if (rest <= 0) break;

      if (rest >= vol.get(n)) {
        canBeRemoved.add(n);
        rest -= vol.get(n);
      }
    }
    console.log({ canBeRemoved });

    if (canBeRemoved.size > 0) {
      canBeRemoved.forEach(el => {
        remaining.delete(el);
      });
    }
  }

  return remaining.size;
}

const cases = [
  [[5, 5, 4], 1],
  [[4, 3, 1, 1, 3, 3, 2], 3],
  [[2,1,1,3,3,3], 3]
];

cases.forEach((c) => {
  console.log(findLeastNumOfUniqueInts(c[0], c[1]));
});
