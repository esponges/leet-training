/* You have n boxes. You are given a binary string boxes of length n, 
where boxes[i] is '0' if the ith box is empty, and '1' if it contains one ball.

In one operation, you can move one ball from a box to an adjacent box. 
Box i is adjacent to box j if abs(i - j) == 1. Note that after doing so, there may be more than one ball in some boxes.

Return an array answer of size n, where answer[i] is the minimum number of operations 
needed to move all the balls to the ith box.

Each answer[i] is calculated considering the initial state of the boxes.

 

Example 1:

Input: boxes = "110"
Output: [1,1,3]
Explanation: The answer for each box is as follows:
1) First box: you will have to move one ball from the second box to the first box in one operation.
2) Second box: you will have to move one ball from the first box to the second box in one operation.
3) Third box: you will have to move one ball from the first box to the third box in two operations, and move one ball from the second box to the third box in one operation.
Example 2:

Input: boxes = "001011"
Output: [11,8,5,4,3,4] */

// accepted: good memory, bad runtime - prolly bcuz of many iterations?

/**
 * @param {number[]} operations
 * @returns {number[]}
 */
function minOperations(operations) {
  let left = 0;
  let right = operations.length - 1;

  const minOp = Array(operations.length).fill(0);

  const iterations = operations.length * operations.length;
  for (let i = 0; i < iterations; i++) {
    const actual = operations[left];
    
    // inc count
    if (actual > 0 && left !== right) {
      const diff = Math.abs(left - right);
      minOp[right] += diff;
    }


    // move pointers
    if (right === 0) {
      // restart right counter
      right = operations.length - 1;
      // move left pointer to next 
      left ++;
    } else {
      // just
      right --;
    }
  }

  return minOp;
}

const cases = [
  [1, 1, 0],
  [0, 0, 1, 0, 1, 1]
];

cases.forEach(c => {
  console.log(minOperations(c));
});
