/* 1839. Longest Substring Of All Vowels in Order
Medium
702
20
Companies
A string is considered beautiful if it satisfies the following conditions:

Each of the 5 English vowels ('a', 'e', 'i', 'o', 'u') must appear at least once in it.
The letters must be sorted in alphabetical order (i.e. all 'a's before 'e's, all 'e's before 'i's, etc.).
For example, strings "aeiou" and "aaaaaaeiiiioou" are considered beautiful, but "uaeio", "aeoiu", and "aaaeeeooo" are not beautiful.

Given a string word consisting of English vowels, return the length of the longest beautiful substring of word. If no such substring exists, return 0.

A substring is a contiguous sequence of characters in a string.

 

Example 1:

Input: word = "aeiaaioaaaaeiiiiouuuooaauuaeiu"
Output: 13
Explanation: The longest beautiful substring in word is "aaaaeiiiiouuu" of length 13.
Example 2:

Input: word = "aeeeiiiioooauuuaeiou"
Output: 5
Explanation: The longest beautiful substring in word is "aeiou" of length 5.
Example 3:

Input: word = "a"
Output: 0
Explanation: There is no beautiful substring, so return 0.
 

Constraints:

1 <= word.length <= 5 * 105
word consists of characters 'a', 'e', 'i', 'o', and 'u'.
Accepted
27.9K
Submissions
56.9K
Acceptance Rate
49.0% */

/**
 * @param {string} word
 * @returns {number}
 */
function longestBeautifulSubstring(word) {
  // cant have beautiful without length >= 5
  if (word.length < 5) return 0;

  const vowels = {
    0: 'a',
    1: 'e',
    2: 'i',
    3: 'o',
    4: 'u',
  };

  const beautifulStrings = [];

  let actualVowel = 0;
  let beautifulCandidate = '';
  for (let i = 0; i < word.length; i++) {
    const actual = word[i];

    if (actual === vowels[actualVowel]) {
      beautifulCandidate += actual;
      // actual equals to next vowel
    } else if (actual === vowels[actualVowel + 1]) {
      actualVowel++;
      beautifulCandidate += actual;
    } else if (actual !== vowels[actualVowel] && actual !== vowels[actualVowel + 1]) {
      actualVowel = 0;
      beautifulCandidate = '';
    }

    // we've completed a substring
    if (actualVowel === 4 && word[i + 1] !== vowels[4]) {
      beautifulStrings.push(beautifulCandidate);
      beautifulCandidate = '';
      actualVowel = 0;
    }
  }

  return beautifulStrings.length > 0
    ? beautifulStrings.sort((a, b) => a > b)[0].length
    : 0;
}

const cases = [
  "aeiaaioaaaaeiiiiouuuooaauuaeiu", // good
  'aeeeiiiioooauuuaeiou',
  "a"
];

cases.forEach((c) => {
  console.log(longestBeautifulSubstring(c));
});
