/* 
2648. Generate Fibonacci Sequence
Solved
Easy
Companies
Hint
Write a generator function that returns a generator object which yields the fibonacci sequence.

The fibonacci sequence is defined by the relation Xn = Xn-1 + Xn-2.

The first few numbers of the series are 0, 1, 1, 2, 3, 5, 8, 13.

 

Example 1:

Input: callCount = 5
Output: [0,1,1,2,3]
Explanation:
const gen = fibGenerator();
gen.next().value; // 0
gen.next().value; // 1
gen.next().value; // 1
gen.next().value; // 2
gen.next().value; // 3
Example 2:

Input: callCount = 0
Output: []
Explanation: gen.next() is never called so nothing is outputted
 

Constraints:

0 <= callCount <= 50
Seen this question in a real interview before?
1/5
Yes
No
Accepted
25.2K
Submissions
30.4K
Acceptance Rate
82.7%

https://leetcode.com/problems/generate-fibonacci-sequence/description/
*/

/**
 * @return {Generator<number>}
 */

// accepted but bad runtime
var fibGenerator = function*() {
  let prev, prevPrev;
  yield 0;
  yield 1;
  yield 1;
  prev = 1;
  prevPrev = 1;
  while (true) {
      const sum = prev + prevPrev;
      yield sum;
      prevPrev = prev;
      prev = sum;
  }
};

/**
* const gen = fibGenerator();
* gen.next().value; // 0
* gen.next().value; // 1
*/
