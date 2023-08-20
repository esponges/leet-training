/**
 * @param {string} haystack
 * @param {string} needle
 * @returns {number}
 */

// sad = 5
// i = 4
// 5 - 3

function firstOcurrence(haystack, needle) {
  const len = needle.length;
  let firstOcurrence = -1;

  if (len > haystack.length) return firstOcurrence;

  for (let i = 0; i < haystack.length; i++) {
    const comparison = haystack.slice(i, len + i);
    if (comparison === needle) {
      firstOcurrence = i;
      break;
    }
  }

  return firstOcurrence;
}

const cases = [
  ['sadbutsad', 'sad'],
  ["leetcode", "leeto"]
];

cases.forEach((c) => {
  console.log(firstOcurrence(c[0], c[1]));
});
