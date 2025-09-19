/**
 * @param {Array} nums
 * @returns {number[]}
 */
function flattenArray(nums) {
  if (!Array.isArray(nums)) return nums;

  let els = [];
  for (n of nums) {
    if (Array.isArray(n)) {
      const rec = flattenArray(n);
      els.push(...rec);
    } else els.push(n);
  }

  return els;
}

const cases = [
  [1, [2], [[3], [4, 5]]]
];

cases.forEach(c => console.log(flattenArray(c)));
