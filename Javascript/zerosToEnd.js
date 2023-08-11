/* Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

 

Example 1:

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
Example 2:

Input: nums = [0]
Output: [0]
 

Constraints:

1 <= nums.length <= 104
-231 <= nums[i] <= 231 - 1 */

class ZerosToEnd {
  constructor(nums) {
    this.nums = nums;
  }
  
  moveZerosToEnd() {
    const zeroBag = [];

    const noZeroArr = this.nums.filter((actual, index) => {
      if (actual === 0) {
        zeroBag.push(0);
      } else {
        return actual;
      }
    });

    const zerosAtEndArr = [...noZeroArr, ...zeroBag];

    return zerosAtEndArr;
  }
}

const zeros = new ZerosToEnd([1, 2, 0, 5, 0]);
console.log(zeros.moveZerosToEnd());
