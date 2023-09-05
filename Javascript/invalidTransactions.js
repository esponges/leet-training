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
  let skip = false;
  // avoid pushing more than once
  while (left < transactions.length) {
    const actualLeft = transactions[left].split(",");
    const actualRight = transactions[right].split(",");

    // only left will be pushed, otherwise will duplicate
    // we only want left to be compared against other, right will
    // be used only as a comparison but it should not be evaluated
    if (actualLeft[2] > 1000) {
      invalid.push(actualLeft.join(","));
      skip = true;
    } else {
      const leftName = actualLeft[0];
      const rightName = actualRight[0];
      const leftTime = actualLeft[1];
      const rightTime = actualRight[1];
      const leftCity = actualLeft[3];
      const rightCity = actualRight[3];
  
      if (leftName === rightName && Math.abs(leftTime - rightTime) <= 60 && leftCity !== rightCity) {
        invalid.push(actualLeft.join(","));
        skip = true;
      }
    }
    
    // move pointers and flags
    if (right == 0 || skip === true) {
      left ++;
      right = transactions.length - 1;
      skip = false;
    } else {
      right --;
    }
  }

  return invalid;
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
