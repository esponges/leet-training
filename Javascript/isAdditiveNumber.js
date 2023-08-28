/* An additive number is a string whose digits can form an additive sequence.

A valid additive sequence should contain at least three numbers. Except for the first two numbers, each subsequent number in the sequence must be the sum of the preceding two.

Given a string containing only digits, return true if it is an additive number or false otherwise.

Note: Numbers in the additive sequence cannot have leading zeros, so sequence 1, 2, 03 or 1, 02, 3 is invalid.

 

Example 1:

Input: "112358"
Output: true
Explanation: 
The digits can form an additive sequence: 1, 1, 2, 3, 5, 8. 
1 + 1 = 2, 1 + 2 = 3, 2 + 3 = 5, 3 + 5 = 8
Example 2:

Input: "199100199"
Output: true
Explanation: 
The additive sequence is: 1, 99, 100, 199. 
1 + 99 = 100, 99 + 100 = 199
 

Constraints:

1 <= num.length <= 35
num consists only of digits. */

/**
 * @param {string} num
 */

function isAdditiveNumber(num) {
  let left = 0;
  // start with next num
  let right = 1;
  let leftOffset = 1;
  let rightOffset = 1;

  let consecutiveNext;
  let consecutive;
  let digits = 0;
  while (
    left + right + leftOffset + rightOffset <
    num.length - left + right + leftOffset + rightOffset
  ) {
    const actual = num.slice(left, left + leftOffset);
    const next = num.slice(left + leftOffset, right + rightOffset);

    const sum = parseInt(actual) + parseInt(next);
    digits = sum.toString().length;

    const maybeSum = num.slice(
      right + rightOffset,
      right + rightOffset + digits
    );

    // dont check strict equality
    if (sum == maybeSum) {
      consecutiveNext = sum;
      consecutive = actual;
      break;
    } else {
      // todo: handle cases where right is maxed and must check against increasing left instead
      rightOffset++;
    }

    // debug avoid inf loop
    if (rightOffset > 2) break;
  }

  let remaingCheck = num.slice(right + rightOffset + digits);
  let count = 0;
  while (/* remaingCheck ||  */count < 3) {
    count ++;
    console.log('remaining', remaingCheck);
    const prev = consecutiveNext;
    const prevPrev = consecutive;
    const maybeSum = parseInt(prev) + parseInt(prevPrev);
    console.log('prev', prev, 'prevPrev', prevPrev, 'maybeSum', maybeSum);
    if (maybeSum) {
      digits = maybeSum.toString().length;
      // console.log('digits', digits, 'remaining', remaingCheck);
      const next = remaingCheck.slice(digits - 1, digits + digits - 1);
      console.log('next', next);

      if (maybeSum == next) {
        remaingCheck = remaingCheck.slice(digits);

        if (!remaingCheck.length) return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
    console.log('remaining', remaingCheck);
    count ++;
  }

  return consecutiveNext;
}

const cases = ['112358', /* '199100199' */];

cases.forEach((c) => {
  console.log(isAdditiveNumber(c));
});
