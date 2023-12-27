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
  if (k === 0) return new Set(arr).size;

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
  const freq = {};
  vol.forEach((val, key) => {
    if (val === 1) {
      // stop when we should not remove any more
      if (uniqueToRemove.length > k - 1) return false;
      uniqueToRemove.push(key);
    } else {
      // build an object for non uniques
      if (freq[val]) {
        freq[val] = [val, [...freq[val][1], key]];
      } else {
        freq[val] = [val, [key]];
      }
    }
  });
  // console.log({ freq, first: freq[2] });

  for (n of uniqueToRemove) {
    const idx = arr.findIndex((el) => el === n);
    arr.splice(idx, 1);
  }

  let rest = k - uniqueToRemove.length;

  // we'll prioritize smaller freq vals
  const remainingOrdered = Object.values(freq).reduce((acc, actual) => {
    // console.log(values);
    return [...acc, ...actual];
  }, []);
  console.log({remainingOrdered});

  /* 
    at this point I stopped and wondered if the solution was 
    getting too complext - see the solution below
  */

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
      canBeRemoved.forEach((el) => {
        remaining.delete(el);
      });
    }
  }

  return remaining.size;
}

const cases = [
  // [[5, 5, 4], 1],
  // [[4, 3, 1, 1, 3, 3, 2], 3],
  // [[2,1,1,3,3,3], 3],
  // [[2,4,1,8,3,5,1,3], 3]
  [
    [
      13, 22, 100, 22, 5, 62, 13, 24, 81, 15, 99, 14, 20, 2, 61, 10, 40, 47, 33,
      7, 38, 47, 92, 31, 15, 40, 73, 48, 24, 55, 81, 63, 37, 23, 59, 78, 5, 50,
      10, 51, 67, 9, 18, 78, 89, 40, 71, 7, 32, 67, 6, 34, 69, 59, 19, 39, 96,
      64, 81, 96, 64, 5, 82, 59, 29, 93, 42, 72, 38, 60, 82, 40, 97, 91, 4, 22,
      85, 80, 33, 51, 10, 21, 54, 91, 2, 94, 38, 38, 19, 75, 37, 7, 76, 7, 27,
      8, 76, 11, 25, 5,
    ],
    78,
  ],
];

var idealFindLeastNumOfUniqueInts = function(arr, k) {
  if (k === arr.length) return 0;

  const map = new Map();

  // loop over to check ocurrences
  arr.forEach(el => {
    const key = map.get(el);
    if (key) {
      map.set(el, map.get(el) + 1);
    } else {
      map.set(el, 1);
    }
  });

  const ocurrences = [];
  map.forEach((val) => ocurrences.push(val));

  // sort ocurrences from bigger to smaller
  // we only care about that, not the actual value
  ocurrences.sort((a, b) => b - a);

  // using pop instead splice is more performant
  // since pop doesn't require reindexing
  for (let i = ocurrences.length - 1; i > 0; i--) {
    const actual = ocurrences[i];
    if (k >= actual) {
      k -= actual;
      ocurrences.pop();
    } else {
      return ocurrences.length;
    }
  }

  return ocurrences.length;
};

cases.forEach((c) => {
  console.log(idealFindLeastNumOfUniqueInts(c[0], c[1]));
});
