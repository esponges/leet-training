/* 
79. Word Search
Medium
Topics
Companies
Given an m x n grid of characters board and a string word, return true if word exists in the grid.

The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.

 

Example 1:


Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
Output: true
Example 2:


Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"
Output: true
Example 3:


Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"
Output: false
 

Constraints:

m == board.length
n = board[i].length
1 <= m, n <= 6
1 <= word.length <= 15
board and word consists of only lowercase and uppercase English letters.
 

Follow up: Could you use search pruning to make your solution faster with a larger board?

Seen this question in a real interview before?
1/5
Yes
No
Accepted
1.8M
Submissions
4.1M
Acceptance Rate
43.5%

https://leetcode.com/problems/word-search/description/
*/

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  let exists = false;

  const rows = board.length;
  const cols = board[0].length;
  function backtrack(coord, acc, m, n) {
    if (!word.startsWith(acc)) return;
    if (acc == word) {
      exists = true;
      return;
    }
    // out of bounds
    if (!board[coord[0], coord[1]]) return;

    const [row, col] = coord;
    let opts = [];

    // m - row // n - col
    if (row == 0) {
      if (col == 0)
        opts = [
          [row, 1],
          [row + 1, 0],
        ];
      else if (col == n - 1)
        opts = [
          [row, col - 1],
          [row + 1, col],
        ];
      else
        opts = [
          [row, col - 1],
          [row + 1, col],
          [row, col + 1],
        ];
    } else if (row == m - 1) {
      if (col == 0)
        opts = [
          [row - 1, col],
          [row, col + 1],
        ];
      else if (col == n - 1)
        opts = [
          [row - 1, col],
          [row, col - 1],
        ];
      else
        opts = [
          [row, col - 1],
          [row - 1, col],
          [row, col + 1],
        ];
    } else {
      opts = [
        [row, col - 1],
        [row - 1, col],
        [row, col + 1],
        [row + 1, col],
      ];
    }

    for (let i = 0; i < opts.length; i++) {
      const [m, n] = opts[i];
      acc += board[m][n];
      backtrack(opts[i], acc, m, n);
      acc -= board[m][n];
    }
  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      backtrack([i, j], board[i][j], rows, cols);
    }
  }

  return exists;
};

const cases = [
  [
    [
      ['A', 'B', 'C', 'E'],
      ['S', 'F', 'C', 'S'],
      ['A', 'D', 'E', 'E'],
    ],
    'ABCCED',
  ],
];

cases.forEach((c) => console.log(exist(c[0], c[1])));
