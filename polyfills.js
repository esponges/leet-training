/**
 * @param {Array} nums
 * @returns {number[]}
 */
function flattenArray(nums) {
  function flatten(arr) {
    if (!Array.isArray(arr)) return [arr];

    const toFlatten = [];
    for (el of arr) {
      toFlatten.push(...flatten(el));
    }

    return toFlatten;
  }

  return flatten(nums);
}

const flattenCases = [[1, 2, [3, 2, [2]], 1]];

flattenCases.forEach((c) => {
  console.log(flattenArray(c));
});

/**
 * @param {object[]} arr
 * @param {function} callback
 * @returns {object}
 */
function arrayFilter(arr, callback) {
  const results = [];
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (!!callback(element, i)) {
      results.push(element);
    }
  }

  return results;
}

const filterCases = [
  [
    [
      { color: 'red' },
      { color: 'blue' },
      { color: 'yellow' },
      { color: 'red' },
      { color: 'red' },
    ],
    (el, _) => el.color === 'red',
  ],
];

filterCases.forEach(c => {
  console.log(arrayFilter(c[0], c[1]));
});

