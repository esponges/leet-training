/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {number}
 */

// accepted 100% runtime
var findMinimumOperations = function(s1, s2, s3) {
  const ops = (s1 + s2 + s3).length;

  let i = 0;
  let count = 0;
  while (true) {
      const s = new Set();
      if (s1[i]) s.add(s1[i]), count++;
      if (s2[i]) s.add(s2[i]), count++;
      if (s3[i]) s.add(s3[i]), count++;

      if (s.size == 1 && count == 3) i++, count = 0;
      else break;
  }

  // no matches in the first val
  if (i == 0) return -1;
  return ops - i * 3;
};
