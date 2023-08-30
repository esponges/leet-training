/* Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.

 

Example 1:

Input: nums = [1,3,5,6], target = 5
Output: 2
Example 2:

Input: nums = [1,3,5,6], target = 2
Output: 1
Example 3:

Input: nums = [1,3,5,6], target = 7
Output: 4 */

/**
 * 
 * @param {number[]} nums 
 * @param {number} target
 * @returns {number} 
 */
function searchInsertPos (nums, target) {
  // special case where target should be first element
  if (target < nums[0]) return 0;

  for (let i = 0; i < nums.length; i++) {
    const actual = nums[i];
    const next = nums[i + 1];
    if (actual === target) return i;
    else if (target > actual && target < next) return i + 1;
  }
  
  return nums.length;
}

const cases = [
  [[1, 3, 5, 6], 5],
  [[1, 3, 5, 6], 2],
  [[1, 3, 5, 6], 7],
  [[-1,3,5,6], 0], // exp 1
];

cases.forEach(c => {
  console.log(searchInsertPos(c[0], c[1]));
})
