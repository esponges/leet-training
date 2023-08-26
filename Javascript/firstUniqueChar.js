/* Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

 

Example 1:

Input: s = "leetcode"
Output: 0
Example 2:

Input: s = "loveleetcode"
Output: 2
Example 3:

Input: s = "aabb"
Output: -1
 */

// Accepted: Runtime  87.95% Memory 59.41%
/**
 * @param {string} s
 * @returns {number}
 */
function firstUniqueChar(s) {
  const chars = {};

  for (let i = 0; i < s.length; i++) {
    const actual = s[i];
    if (chars[actual]) {
      // inc count
      chars[actual][0] += 1;
      // save latest index where it was repeated
      chars[actual][1] = i;
    } else {
      chars[actual] = [1, i, actual];
    }
  }

  let found = -1;
  for (let i = 0; i < vals.length; i++) {
    const actual = vals[i];

    if (actual[0] === 1) {
      found = actual[1];
      return found;
    }
  }
  return found;
}

const cases = ['leetcode', 'loveleetcode', 'aabb'];

cases.forEach((c) => {
  console.log(firstUniqueChar(c));
});
