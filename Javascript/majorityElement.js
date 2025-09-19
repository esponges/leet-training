// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

// Example 1:

// Input: nums = [3,2,3]
// Output: 3
// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

// Constraints:

// n == nums.length
// 1 <= n <= 5 * 104
// -109 <= nums[i] <= 109

// Follow-up: Could you solve the problem in linear time and in O(1) space?

class Majority {
  nums;

  constructor(nums) {
    this.nums = nums;
  }

  getMajorityElement() {
    const reps = new Map();

    // create repetition map
    for (let i = 0; i < this.nums.length; i++) {
      const actual = this.nums[i];

      const existingValue = reps.get(actual);
      if (existingValue) {
        reps.set(actual, existingValue + 1);
      } else {
        reps.set(actual, 1);
      }
    }

    let element;
    let elementCount = 0;
    // iterate over map to get the majority element
    reps.forEach((value, key) => {
      if (value > elementCount) {
        elementCount = value;
        element = key;
      }
    });

    return element;
  }
}

const m = new Majority([1, 2, 1]);
console.log(m.getMajorityElement());

const m2 = new Majority([1, 2, 1, 3, 3, 2, 3]);
console.log(m2.getMajorityElement());

const m3 = new Majority([1, 2, 5, 5, 6, 6, 1, 3, 3, 2, 3, 6, 6]);
console.log(m3.getMajorityElement());

/// nov 24

// accepted but bad runtime and memory

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  const mem = {};
  let max = [0, 0];

  for (n of nums) {
    if (!mem[n]) mem[n] = 1;
    else mem[n] = mem[n] + 1;

    if (mem[n] > max[1]) max = [n, mem[n]];
  }

  return max[0];
};
