/**
 * @param {string} haystack
 * @param {string} needle
 * @returns {number}
 */

// sad = 5
// i = 4
// 5 - 3

// Beats 77.53% runtime and 84.46% memory 
function firstOcurrence(haystack, needle) {
  const len = needle.length;

  if (len > haystack.length) return firstOcurrence;

  for (let i = 0; i < haystack.length; i++) {
    const comparison = haystack.slice(i, len + i);
    if (comparison === needle) {
      return i;
    }
  }

  return -1;
}

const cases = [
  ['sadbutsad', 'sad'],
  ["leetcode", "leeto"]
];

cases.forEach((c) => {
  console.log(firstOcurrence(c[0], c[1]));
});

// other solutions
function builtIn(haystack, needle) {
  return haystack.indexOf(needle);
};

function regexp(haystack, needle) {
  const regex = new RegExp(needle);
  return haystack.search(regex);
};
