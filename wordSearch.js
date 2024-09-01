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

  function backtrack(coord, acc, track) {
    if (!word.startsWith(acc)) return;
    if (acc == word) {
      exists = true;
      return;
    }
    
    const [row, col] = coord;
    for (let i = 0; i < 4; i++) {
      let r, c;
      if (i == 0) {
        r = row;
        c = col - 1;
      } else if (i == 1) {
        r = row - 1;
        c = col;
      } else if (i == 2) {
        r = row;
        c = col + 1;
      } else {
        r = row + 1;
        c = col;
      }

      if (r >= 0 && r < board.length) { // avoid runtime except board[-1][x] <- board[-1] undefined
        const next = board[r][c];
        if (board[r][c] && track[r][c] != '-') {
          track[row][col] = '-';
          backtrack([r, c], acc + next, track);
          track[row][col] = '.';
        }
      }
    }
  }

  const used = new Array(board.length).fill(new Array(board[0].length).fill('.'));
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      used[i][j] = '-';
      backtrack([i, j], board[i][j], used);
      used[i][j] = '.';
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
