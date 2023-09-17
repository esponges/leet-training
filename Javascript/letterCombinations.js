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
  1: '',
  2: 'abc',
  3: 'def',
  4: 'ghi',
  5: 'jkl',
  6: 'mno',
  7: 'pqrs',
  8: 'tuv',
  9: 'wxyz',
};

/**
 * @param {string} digits
 * @returns {string[]}
 */
function letterCombination(digits) {
  if (!digits.length) {
    return [];
  }

  const digitToLetters = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz',
  };

  const res = [];

  function backtrack(idx, comb) {
    // this check must be done before starting a recursive call once the condition is met 
    if (idx === digits.length) {
      res.push(comb);
      return;
    }

    // for each letter of the current digit iterate over the next digit
    for (const letter of digitToLetters[digits[idx]]) {
      backtrack(idx + 1, comb + letter);
    }
  }

  backtrack(0, '');

  return res;
}

// Input: digits = "23"
// Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
// i  digitToLetter[digits[idx]]  letter  comb  res 
// 0  abc                         a        ""   []   
// 1  def                                  a   []     
// 2                              d        ad   [ad]      
// 2                              e        ae   [ad, ae]     
// 2                              f        af   [ad, ae, af]        
// 1                                       b         
// 2  def                         d        bd   [ad, ae, af, bd]       
// 2  def                         e        be   [ad, ae, af, bd, be]       
// 2  def                         f        bf   [ad, ae, af, bd, be, bf]
// 1                                       c         
// 2  def                         d        cd   [ad, ae, af, bd, be, bf, cd]       
// 2  def                         e        ce   [ad, ae, af, bd, be, bf, cd, ce]       
// 2  def                         f        cf   [ad, ae, af, bd, be, bf, cd, ce, cf]        
