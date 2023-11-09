/* 771. Jewels and Stones
Easy
4.9K
567
Companies
You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

Letters are case sensitive, so "a" is considered a different type of stone from "A".

 

Example 1:

Input: jewels = "aA", stones = "aAAbbbb"
Output: 3
Example 2:

Input: jewels = "z", stones = "ZZ"
Output: 0
 

Constraints:

1 <= jewels.length, stones.length <= 50
jewels and stones consist of only English letters.
All the characters of jewels are unique.
Accepted
950.9K
Submissions
1.1M
Acceptance Rate
88.3% */

/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */

// accepted 89rt/96mem  
var numJewelsInStones = function(jewels, stones) {
  let count = 0;
  for (s of stones) {
    if (jewels.includes(s)) count++;
  }
  return count;
};

const cases = [
  ["aA", "aAAbbbb"],
  ["z", "ZZ"]
];

cases.forEach(c => {
  console.log(numJewelsInStones(c[0], c[1]));
})
