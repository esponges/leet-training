
/**
 * @param {number[]} nums
 * @param {number} n
 * @returns {number}
 */
function findIndex (nums, n) {
  function divide(start, end) {
    if (start > end) return -1;

    const middle = Math.floor((start + end) / 2);

    if (nums[middle] === n) return middle;

    // n must be on the left side
    // ignore the existing middle too 
    if (nums[middle] > n) {
      return divide(start, middle - 1);
    } else {
      return divide(middle + 1, end);
    }
  }

  return divide(0, nums.length - 1);
}


// const find the index of n in nums
const cases = [
  [[1, 3, 6, 8, 10, 13, 14], 3],
  // [[1, 2, 5, 6, 8, 9], 9]
];

cases.forEach(c => {
  console.log(findIndex(c[0], c[1]))
});
