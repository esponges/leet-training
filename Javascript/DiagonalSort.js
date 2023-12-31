/* A matrix diagonal is a diagonal line of cells starting from some cell in either the topmost row or leftmost column and going in the bottom-right direction until reaching the matrix's end. For example, the matrix diagonal starting from mat[2][0], where mat is a 6 x 3 matrix, includes cells mat[2][0], mat[3][1], and mat[4][2].

Given an m x n matrix mat of integers, sort each matrix diagonal in ascending order and return the resulting matrix.

SEE IMAGE IN https://leetcode.com/problems/sort-the-matrix-diagonally/

Example 1:


Input: mat = [[3,3,1,1],[2,2,1,2],[1,1,1,2]]
Output: [[1,1,1,1],[1,2,2,2],[1,2,3,3]]
Example 2:

Input: mat = [[11,25,66,1,69,7],[23,55,17,45,15,52],[75,31,36,44,58,8],[22,27,33,25,68,4],[84,28,14,11,5,50]]
Output: [[5,17,4,1,52,7],[11,11,25,45,8,69],[14,23,25,44,58,15],[22,27,31,36,50,66],[84,28,75,33,55,68]] */

/**
 * @param {number[][]}
 * @returns {number[][]}
 */
function wipDiagonalSort(nums) {
  let up = true;
  const max = nums.length;

  let count = 0;
  let debug = 0;

  while (count >= 0 && debug < 6) {
    debug++;
    console.log('count', count);

    if (count === max - 1 && up === true) {
      up = false;
      console.log('first');
    } else if (count < max && up === true) {
      count++;
      console.log('second');
    } else count--;
  }
}

// todo: understand
function diagonalSort(M) {
  let y = M.length;
  let x = M[0].length - 1;
  for (let i = 2 - y; i < x; i++) { // Start far enough to the left to get
    let diag = new Array(y), k = 0; // all non-singleton diagonals
    for (let j = 0; j < y; j++) if (M[j][i + j]) diag[k++] = M[j][i + j]; // Only store valid cell values in the array
    diag.sort((a, b) => a - b), (k = 0); // Sort the diagonal and reset its index
    for (let j = 0; j < y; j++) if (M[j][i + j]) M[j][i + j] = diag[k++]; // Replace the diagonal cells in sorted order
  }
  return M;
}

const cases = [
  [
    [3, 3, 1, 1],
    [2, 2, 1, 2],
    [1, 1, 1, 2],
  ],
  // [[11,25,66,1,69,7],[23,55,17,45,15,52],[75,31,36,44,58,8],[22,27,33,25,68,4],[84,28,14,11,5,50]]
];

cases.forEach((c) => {
  console.log(diagonalSort(c));
});
