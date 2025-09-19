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

  function backtrack(row, col, index, used) {
    if (index === word.length) {
      exists = true;
      return;
    }

    if (
      row < 0 ||
      row >= board.length ||
      col < 0 ||
      col >= board[0].length ||
      used[row][col] ||
      board[row][col] !== word[index]
    ) {
      return;
    }

    used[row][col] = true;

    backtrack(row, col - 1, index + 1, used);
    backtrack(row - 1, col, index + 1, used);
    backtrack(row, col + 1, index + 1, used);
    backtrack(row + 1, col, index + 1, used);

    used[row][col] = false;
  }

  // Create a proper 2D array for tracking visited cells
  const used = Array.from({ length: board.length }, () =>
    Array(board[0].length).fill(false)
  );

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      backtrack(i, j, 0, used);
      if (exists) return true;
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
