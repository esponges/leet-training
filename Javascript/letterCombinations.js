/* Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

https://leetcode.com/problems/letter-combinations-of-a-phone-number/ 

Example 1:

Input: digits = "23"
Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
Example 2:

Input: digits = ""
Output: []
Example 3:

Input: digits = "2"
Output: ["a","b","c"]
 

Constraints:

0 <= digits.length <= 4
digits[i] is a digit in the range ['2', '9']. */

const dictionary = {
  1: "",
  2: "abc",
  3: "def",
  4: "ghi",
  5: "jkl",
  6: "mno",
  7: "pqrs",
  8: "tuv",
  9: "wxyz",
};

// Input: digits = "23"
// Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
// 2 dimensions
// [0,0][0,1][0,2][1,0][1,1][1,2][2,0][2,1][2,2]

// Input: digits = "234"
// [0, 0, 0][1, 0, 0][2, 0, 0]
// [2, 1, 0][2, 2, 0][2, 2, 1]
// [0, 2, 0][0, 2, 1][0, 2, 2]
// [1, 0, 0][1, 0, 1][1, 0, 1]

/**
 * @param {string} digits
 * @returns {string[]}
 */
function letterCombination(digits) {
  const combinations = [];

  // generate array starting from zeros
  const opts = Array.from(Array(digits.length, () => 0));
  const iterations = digits.reduce((acc, actual) => acc * dictionary[parseInt(actual)].length, 1);

  let count = 0;
  // const [a, b, c, d] = opts; // opts will tell us how many combinations we have to do
  while (count < iterations) {

  }
}
