

/* 1414. Find the Minimum Number of Fibonacci Numbers Whose Sum Is K
Medium
965
61
Companies
Given an integer k, return the minimum number of Fibonacci numbers whose sum is equal to k. The same Fibonacci number can be used multiple times.

The Fibonacci numbers are defined as:

F1 = 1
F2 = 1
Fn = Fn-1 + Fn-2 for n > 2.
It is guaranteed that for the given constraints we can always find such Fibonacci numbers that sum up to k.
 

Example 1:

Input: k = 7
Output: 2 
Explanation: The Fibonacci numbers are: 1, 1, 2, 3, 5, 8, 13, ... 
For k = 7 we can use 2 + 5 = 7.
Example 2:

Input: k = 10
Output: 2 
Explanation: For k = 10 we can use 2 + 8 = 10.
Example 3:

Input: k = 19
Output: 3 
Explanation: For k = 19 we can use 1 + 5 + 13 = 19. */

/**
 * @param {number[]} k
 * @return {number}
 */
function findMinFibonnaciNumbers (k) {
  const fibonacci = [1]; 
  let top = 0;
  let pointer = 0;
  while (top < k) {
    const actual = fibonacci[pointer];
    const prev = fibonacci[pointer - 1];
    // initial case
    const next = prev ? actual + prev : actual;
    fibonacci.push(next);

    top = next;
    pointer++;
  }
  console.log(fibonacci);

  let n = 2;
  let minimum = 0;
  /**
   * @param {number} idx 
   * @param {number[]|undefined} next 
   * @returns 
   */
  function combine (idx, next) {
    if ((next && next.length) == n) {
      return;
    }

    for (let i = 0; i < fibonacci.length; i++) {
      if (i === idx) continue;
      
      const sum = [...(next ? next : []), fibonacci[idx], fibonacci[i]];
      
      if (sum.reduce((a, b) => a + b, 0)) {
        minimum = sum.length;
        return;
      };

      combine(idx, sum);
    }
  }
  
  combine(0);
  return minimum;
}

const cases = [
  // 7,
  // 10,
  19
];

cases.forEach(c => {
  console.log(findMinFibonnaciNumbers(c));
});
