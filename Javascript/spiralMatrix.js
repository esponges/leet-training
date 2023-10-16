/* 2326. Spiral Matrix IV
Medium
677
25
Companies
You are given two integers m and n, which represent the dimensions of a matrix.

You are also given the head of a linked list of integers.

Generate an m x n matrix that contains the integers in the linked list presented in spiral order (clockwise), starting from the top-left of the matrix. If there are remaining empty spaces, fill them with -1.

Return the generated matrix.

 

Example 1:


Input: m = 3, n = 5, head = [3,0,2,6,8,1,7,9,4,2,5,5,0]
Output: [[3,0,2,6,8],[5,0,-1,-1,1],[5,2,4,9,7]]
Explanation: The diagram above shows how the values are printed in the matrix.
Note that the remaining spaces in the matrix are filled with -1.
Example 2:


Input: m = 1, n = 4, head = [0,1,2]
Output: [[0,1,2,-1]]
Explanation: The diagram above shows how the values are printed from left to right in the matrix.
The last space in the matrix is set to -1. 

Constraints:

1 <= m, n <= 105
1 <= m * n <= 105
The number of nodes in the list is in the range [1, m * n].
0 <= Node.val <= 1000
*/

const { ListNode } = require("./common");
/**
 * 
 * @param {number} m 
 * @param {number} n 
 * @param {ListNode} head 
 */
var spiralMatrix = function(m, n, head) {
  let current = head;
  
  const directions = {
    right: 1,
    down: 2,
    left: 3,
    up: 4,
  };
  let row = 1;
  let col = 1;
  let rowMax = m;
  let colMax = n;
  let dir = 1;
  const matrix = [[]];

  const stop = [m - 1, n - 1];
  while (row !== stop[0] && col !== stop[1]) {
    // push current offsetting for 0-indexed array
    matrix[row - 1][col - 1] = current && current.val || -1;

    // move pointer
    if (current && current.next) {
      current = current.next;
    }

    // increase depending what's next;
    if (dir === directions.right) {
      if (row === rowMax) {
        rowMax--;
        dir = directions.down;
        row++;
      } else {
        col++;
      }
    } else if (dir === directions.down) {
      if (col === colMax) {
        colMax--;
        dir = directions.left;
        col--;
      } else {
        row++;
      }
    } else if (dir === directions.left) {
      if (row === n - rowMax) {
        dir = directions.up;
        col--;
      } else {
        row--;
      }
    } else if (dir === directions.up) {
      if (col === m - colMax) {
        dir = directions.right;
        row++;
      } else {
        col--;
      }
    }
  }

  return matrix;
};

// m  n
// 1  1
// 1  2
// 1  3
// 1  4
// 1  5
// 2  5
// 3  5
// 3  4
// 3  3
// 3  2
// 3  1
// 2  2
// 2  3
// 2  4


// switch(dir) {
//   case directions.right:
//     col++;
//     break;
//   case directions.down:
//     row--;
//   case directions.left:
//     col--;
//   case directions.up:
//     row ++;
//   default:
//     break;
// }
