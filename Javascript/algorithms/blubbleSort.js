/* 
  the bubble sort algorithm will shift every element, starting from the first one
  and will swap the contiguous elements until we've taken the first biggest (for asc)
  to the very end, where we are going to decrease the boundary the right boundary to the
  right

  e.g.  [15, 14, 16, 2, 3]
  it 1  [14, 15, 16, 2, 3]
  it 2  [14, 15, 2, 16, 3]
  it 3  [14, 15, 2, 3, 16]
  
  here we've taken the biggest element 16 to the right
  therefore next iterations will only go from 0 to array.length - 2
  why -2? because there's no need to make checks in the last index
*/

/**
 * @param {number[]} nums
 * @returns {number[]}
 */
function bubbleSort(nums) {
  let boundary = nums.length - 1;
  let lIdx = 0;
  let rIdx = 1;

  while (boundary > 0) {
    const left = nums[lIdx];
    const right = nums[rIdx];
    
    // only swap if this condition met
    // otherwise just move to the next comparison
    if (left > right) {
      nums[lIdx] = right;
      nums[rIdx] = left;
    }

    // we've gotten to the last element of the array
    // reduce boundary so we don't check it the next iterations
    if (rIdx === boundary) {
      boundary--;
      lIdx = 0;
      rIdx = 1;
    } else {
      lIdx++;
      rIdx++;
    }
  }

  return nums;
}

const cases = [
  [5, 4, 8, 0],
  [15, 14, 16, 2, 3]
];

cases.forEach(c => {
  console.log(bubbleSort(c));
});
