/* Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
Given a roman numeral, convert it to an integer.

 

Example 1:

Input: s = "I I I"
Output: 3
Explanation: I I I = 3.
Example 2:

Input: s = "L V I I I"
Output: 58
Explanation: L = 50, V= 5, III = 3.
Example 3:

Input: s = "M CM X C IV"
Output: 1994
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

D C C C L X X X V 885
M C C C X X V III 1328

Constraints:

1 <= s.length <= 15
s contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M').
It is guaranteed that s is a valid roman numeral in the range [1, 3999]. */

const cases = ['III', 'LVIII', 'MCMXCIV'];

const symbols = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};
/**
 * @param {string} roman
 * @returns {number}
 */
function romanToNumber(s) {
  let value = 0;
  for (let i = 0; i < s.length; i += 1) {
    // if actual is smaller than following
    // case prefix
    symbols[s[i]] < symbols[s[i + 1]]
      ? (value -= symbols[s[i]])
      // otherwise just sum actual value
      : (value += symbols[s[i]]);
  }
  return value;
}

cases.forEach((c) => {
  console.log(romanToNumber(c));
});
