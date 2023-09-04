/* A transaction is possibly invalid if:

the amount exceeds $1000, or;
if it occurs within (and including) 60 minutes of another transaction with the same name in a different city.
You are given an array of strings transaction where transactions[i] consists of comma-separated values representing the name, time (in minutes), amount, and city of the transaction.

Return a list of transactions that are possibly invalid. You may return the answer in any order.

 

Example 1:

Input: transactions = ["alice,20,800,mtv","alice,50,100,beijing"]
Output: ["alice,20,800,mtv","alice,50,100,beijing"]
Explanation: The first transaction is invalid because the second transaction occurs within a difference of 60 minutes, have the same name and is in a different city. Similarly the second one is invalid too.
Example 2:

Input: transactions = ["alice,20,800,mtv","alice,50,1200,mtv"]
Output: ["alice,50,1200,mtv"]
Example 3:

Input: transactions = ["alice,20,800,mtv","bob,50,1200,mtv"]
Output: ["bob,50,1200,mtv"] */

/**
 * @param {string[]} transactions
 * @return {string[]}
 */
function invalidTransactions(transactions) {
  let left = 0;
  let right = transactions.length - 1;

  const invalid = [];

  // avoid pushing more than once
  let actualExceedsAmount = false;
  let debug = 0;
  const keys = [];
  while (left < transactions.length && debug < 10) {
    debug++;
    console.log(left, right);
    // ignore own comparisons
    if (left === right && right !== 0 && left !== transactions.length - 1) continue;

    const actualLeft = transactions[left].split(",");
    const actualRight = transactions[right].split(",");

    if (actualLeft[2] > 1000 && actualExceedsAmount === false) {
      invalid.push(actualLeft);
      actualExceedsAmount = true;
    }
    
    const leftName = actualLeft[0];
    const rightName = actualRight[0];
    const leftTime = actualLeft[1];
    const rightTime = actualRight[1];
    const leftCity = actualLeft[3];
    const rightCity = actualRight[3];

    const areSameKeys = keys.includes(`${right}${left}`);
    if (leftName === rightName && Math.abs(leftTime - rightTime) <= 60 && leftCity !== rightCity && !areSameKeys) {
      console.log('prev keys', keys);
      console.log('keys to be pushed', left, right);
      keys.push(`${left}${right}`);
      
      invalid.push(actualRight);
      // dont double push exceeding that have been already pushed
      if (actualExceedsAmount === false) invalid.push(actualLeft); 
    }

    // move pointers and flags
    if (right == 0) {
      left ++;
      right = transactions.length - 1;
      actualExceedsAmount = false;
    } else {
      right --;
    }
  }

  return invalid.map(i => i.join(","));
}

const cases = [
  // ["alice,20,800,mtv","alice,50,100,beijing"],
  // ["alice,20,800,mtv","alice,50,1200,mtv"],
  // ["alice,20,800,mtv","bob,50,1200,mtv"],
  ["alice,51,100,frankfurt","alice,20,800,mtv","alice,51,100,frankfurt","alice,50,100,mtv"]
];

cases.forEach(c => {
  console.log(invalidTransactions(c));
})
