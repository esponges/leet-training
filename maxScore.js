/* 1423. Maximum Points You Can Obtain from Cards
Attempted
Medium
Topics
Companies
Hint
There are several cards arranged in a row, and each card has an associated number of points. The points are given in the integer array cardPoints.

In one step, you can take one card from the beginning or from the end of the row. You have to take exactly k cards.

Your score is the sum of the points of the cards you have taken.

Given the integer array cardPoints and the integer k, return the maximum score you can obtain.

 

Example 1:

Input: cardPoints = [1,2,3,4,5,6,1], k = 3
Output: 12
Explanation: After the first step, your score will always be 1. However, choosing the rightmost card first will maximize your total score. The optimal strategy is to take the three cards on the right, giving a final score of 1 + 6 + 5 = 12.
Example 2:

Input: cardPoints = [2,2,2], k = 2
Output: 4
Explanation: Regardless of which two cards you take, your score will always be 4.
Example 3:

Input: cardPoints = [9,7,7,9,7,7,9], k = 7
Output: 55
Explanation: You have to take all the cards. Your score is the sum of points of all cards.
 

Constraints:

1 <= cardPoints.length <= 105
1 <= cardPoints[i] <= 104
1 <= k <= cardPoints.length
Seen this question in a real interview before?
1/5
Yes
No
Accepted
295.3K
Submissions
551.6K
Acceptance Rate
53.5%

https://leetcode.com/problems/maximum-points-you-can-obtain-from-cards/description/
*/

/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
var maxScore = function(cardPoints, k) {
  const scores = [];

  function drawcard(cards, movesLeft, pointed, acc) {
      if (movesLeft == 0) {
          pointed.push(acc);
          return;
      }

      for (let i = 0; i < 2; i++) {
          if (i == 0) {
              // left move
              const leftRemoved = cards.slice(1);
              const left = cards[0]; // 1
              drawcard(leftRemoved, movesLeft - 1, pointed, acc + left);
          } else {
              // right move
              const rightRemoved = [...cards];
              drawcard(rightRemoved, movesLeft - 1, pointed, acc + rightRemoved.pop());
          }
      }
  }

  drawcard(cardPoints, k, scores, 0);

  return Math.max(...scores);
};

const cases = [
  [[1,2,3,4,5,6,1], 3],
  [[2,2,2], 2],
  [[9,7,7,9,7,7,9], 7]
];
