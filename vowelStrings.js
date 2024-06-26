/* 
Code
Testcase
Test Result
Test Result
2559. Count Vowel Strings in Ranges
Medium
Topics
Companies
Hint
You are given a 0-indexed array of strings words and a 2D array of integers queries.

Each query queries[i] = [li, ri] asks us to find the number of strings present in the range li to ri (both inclusive) of words that start and end with a vowel.

Return an array ans of size queries.length, where ans[i] is the answer to the ith query.

Note that the vowel letters are 'a', 'e', 'i', 'o', and 'u'.

 

Example 1:

Input: words = ["aba","bcb","ece","aa","e"], queries = [[0,2],[1,4],[1,1]]
Output: [2,3,0]
Explanation: The strings starting and ending with a vowel are "aba", "ece", "aa" and "e".
The answer to the query [0,2] is 2 (strings "aba" and "ece").
to query [1,4] is 3 (strings "ece", "aa", "e").
to query [1,1] is 0.
We return [2,3,0].
Example 2:

Input: words = ["a","e","i"], queries = [[0,2],[0,1],[2,2]]
Output: [3,2,1]
Explanation: Every string satisfies the conditions, so we return [3,2,1].
 

Constraints:

1 <= words.length <= 105
1 <= words[i].length <= 40
words[i] consists only of lowercase English letters.
sum(words[i].length) <= 3 * 105
1 <= queries.length <= 105
0 <= li <= ri < words.length

https://leetcode.com/problems/count-vowel-strings-in-ranges/
*/

/**
 * @param {number[]} words
 * @param {number[][]} queries
 * @returns {number[]}
 */
function vowelStrings(words, queries) {
  const valid = [];
  const vocals = ['a', 'e', 'i', 'o', 'u'];

  for (let i = 0; i < words.length; i++) {
    const w = words[i];
    if (vocals.includes(w[0]) && vocals.includes(w[w.length - 1])) {
      valid[i] = [i, w];
    } else {
      valid[i] = undefined;
    }
  }

  console.log({ valid });

  const res = [];
  const cache = {};
  for (q of queries) {
    if (cache[q[0]] && cache[q[0]][q[1]]) {
      res.push(cache[q[0]][q[1]]);
      continue;
    }

    let c = 0;

    for (let i = q[0]; i < q[1] + 1; i++) {
      if (!!valid[i]) c++;
    }

    cache[q[0]] = {
      [q[1]]: c,
    };

    res.push(c);
  }
  console.log({ cache });

  return res;
}

const vowels = { a: true, e: true, i: true, o: true, u: true };
var solution = function(words, queries) {
    for (let index = 0; index < words.length; index++) {
        if (vowels[words[index][0]] && vowels[words[index][words[index].length - 1]]) {
            if (!index) {
                words[index] = 1;
            } else {
                words[index] = 1 + words[index - 1];
            }
        } else {
            if (!index) {
                words[index] = 0;
            } else {
                words[index] = words[index - 1];
            }
        }
    }
    const output = [];
    for (let index = 0; index < queries.length; index++) {
        const [startIndex, endIndex] = queries[index];
        let len = words[endIndex] - (words[startIndex - 1] || 0);
        output.push(len);
    }
    return output;
};

const cases = [
  [
    ['aba', 'bcb', 'ece', 'aa', 'e'],
    [
      [0, 2],
      [1, 4],
      [1, 1],
    ],
  ],
  [
    ['a', 'e', 'i'],
    [
      [0, 2],
      [0, 1],
      [2, 2],
    ],
  ],
];

cases.forEach((c) => {
  // console.log(vowelStrings(c[0], c[1]));
  console.log(solution(c[0], c[1]));
});
