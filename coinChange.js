/* 322. Coin Change
Medium
Topics
Companies
You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.

Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

You may assume that you have an infinite number of each kind of coin.

 

Example 1:

Input: coins = [1,2,5], amount = 11
Output: 3
Explanation: 11 = 5 + 5 + 1
Example 2:

Input: coins = [2], amount = 3
Output: -1
Example 3:

Input: coins = [1], amount = 0
Output: 0
 

Constraints:

1 <= coins.length <= 12
1 <= coins[i] <= 231 - 1
0 <= amount <= 104 */

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
function amountChange(coins, amount) {
  // first sort ascending
  let stop = 10;

  let i = 0;
  let total = 0;
  let rest = amount;
  while (stop < 5 || i < coins.length) {
    const actual = coins[i];
    const r = rest % actual;
    // we can use this coin since
    // the rest is divisible by it
    if (r < rest) {
      const count = Math.floor(rest / actual);
      console.log({ count });
      total += count;
      rest -= count * actual;
    } 
    i++;
    stop++;
  }
  
  if (rest > 0) return -1

  return total;
}

const cases = [
  [[1, 2, 5], 11],
  [[2], 3],
  [[1], 0],
];

cases.forEach(c => {
  console.log(amountChange(c[0], c[1]));
})
