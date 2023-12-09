/* 2018. Check if Word Can Be Placed In Crossword
Medium
272
287
Companies
You are given an m x n matrix board, representing the current state of a crossword puzzle. The crossword contains lowercase English letters (from solved words), ' ' to represent any empty cells, and '#' to represent any blocked cells.

A word can be placed horizontally (left to right or right to left) or vertically (top to bottom or bottom to top) in the board if:

It does not occupy a cell containing the character '#'.
The cell each letter is placed in must either be ' ' (empty) or match the letter already on the board.
There must not be any empty cells ' ' or other lowercase letters directly left or right of the word if the word was placed horizontally.
There must not be any empty cells ' ' or other lowercase letters directly above or below the word if the word was placed vertically.
Given a string word, return true if word can be placed in board, or false otherwise.

 

Example 1:


Input: board = [["#", " ", "#"], [" ", " ", "#"], ["#", "c", " "]], word = "abc"
Output: true
Explanation: The word "abc" can be placed as shown above (top to bottom).
Example 2:


Input: board = [[" ", "#", "a"], [" ", "#", "c"], [" ", "#", "a"]], word = "ac"
Output: false
Explanation: It is impossible to place the word because there will always be a space/letter above or below it.
Example 3:


Input: board = [["#", " ", "#"], [" ", " ", "#"], ["#", " ", "c"]], word = "ca"
Output: true
Explanation: The word "ca" can be placed as shown above (right to left). 
 

Constraints:

m == board.length
n == board[i].length
1 <= m * n <= 2 * 105
board[i][j] will be ' ', '#', or a lowercase English letter.
1 <= word.length <= max(m, n)
word will contain only lowercase English letters.
Accepted
18.7K
Submissions
38K
Acceptance Rate
49.2%

https://leetcode.com/problems/check-if-word-can-be-placed-in-crossword/
*/

/**
 * @param {string[]} board
 * @param {string} word
 * @returns {boolean}
 */
function checkWordInCrossword(board, word) {
  const m = board.length;
  const n = board[0].length;
  for (let i = 0; i < m + n; i ++) {
    const isVertical = i >= m;

    function wordFits (opt) {
      let consec = 0;
      let fitsIn = false;
      for (let i = 0; i < opt.length; i++) {
        if (opt[i] !== '#') consec++;
        else consec = 0;

        if (consec >= word.length) {
          fitsIn = true;
          break;
        };
        // check if correct logic to avoid keep checking
        // if (opt.length - 1 - i < word.length) return false;
      }

      if (fitsIn === false) return false;
      
      const reversed = word.split('').reverse().join('');
      let streak = 0;
      fitsIn = false;
      // check if somehow fits in the available spaces
      for (let i = 0; i < opt.length; i++) {
        if (opt[i] === ' ') streak++;
        else if (opt[i] === word[streak] || opt[i] === reversed[streak]) streak++;
        else streak = 0;

        console.log({streak});
        console.log(opt[i+1] === undefined, opt[i + 1] !== ' ', word.length === streak);
        console.log((opt[i+1] === undefined || opt[i + 1] !== ' ') && word.length === streak);

        if ((opt[i+1] === undefined || opt[i + 1] !== ' ') && word.length === streak) fitsIn = true;
      }
      console.log({ fitsIn });
      return fitsIn;
    }


    // check vertical opts
    if (!isVertical) {
      const row = board[i];
      console.log({row});
      if (wordFits(row)) return true;
    // check horizontal opts
    } else {
      const col = board.map((row) => {
        return row[i - m];
      });
      console.log({col});
      if (wordFits(col)) return true;
    }
  }

  return false;
}

const cases = [
  [[["#", " ", "#"], [" ", " ", "#"], ["#", "c", " "]], "abc"],
  [[[" ", "#", "a"], [" ", "#", "c"], [" ", "#", "a"]], "ac"],
  [[["#", " ", "#"], [" ", " ", "#"], ["#", " ", "c"]], "ca"],
  // [[["#", " "], [" ", " "], ["#", " "]], "ca"]
];

cases.forEach(c => {
  console.log(checkWordInCrossword(c[0], c[1]));
})
