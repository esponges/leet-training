/* 1690. Stone Game VII
Medium
949
160
Companies
Alice and Bob take turns playing a game, with Alice starting first.

There are n stones arranged in a row. On each player's turn, they can remove either the leftmost stone or the rightmost stone from the row and receive points equal to the sum of the remaining stones' values in the row. The winner is the one with the higher score when there are no stones left to remove.

Bob found that he will always lose this game (poor Bob, he always loses), so he decided to minimize the score's difference. Alice's goal is to maximize the difference in the score.

Given an array of integers stones where stones[i] represents the value of the ith stone from the left, return the difference in Alice and Bob's score if they both play optimally.

 

Example 1:

Input: stones = [5,3,1,4,2]
Output: 6
Explanation: 
- Alice removes 2 and gets 5 + 3 + 1 + 4 = 13 points. Alice = 13, Bob = 0, stones = [5,3,1,4].
- Bob removes 5 and gets 3 + 1 + 4 = 8 points. Alice = 13, Bob = 8, stones = [3,1,4].
- Alice removes 3 and gets 1 + 4 = 5 points. Alice = 18, Bob = 8, stones = [1,4].
- Bob removes 1 and gets 4 points. Alice = 18, Bob = 12, stones = [4].
- Alice removes 4 and gets 0 points. Alice = 18, Bob = 12, stones = [].
The score difference is 18 - 12 = 6.
Example 2:

Input: stones = [7,90,5,1,100,10,10,2]
Output: 122
 

Constraints:

n == stones.length
2 <= n <= 1000
1 <= stones[i] <= 1000
Accepted
33.3K
Submissions
57.4K
Acceptance Rate
58.0% */

/**
 * @param {number[]} stones
 * @returns {number}
 */
function stoneGameVII (stones) {
  let remainingStones = [...stones];
  let aScore = 0;
  let bScore = 0;

  while (remainingStones.length > 0) {
    if (remainingStones.length === 1) {
      break;
    }

    const removeLeftmost = remainingStones.slice(1);
    const removeRightmost = remainingStones.slice(0, remainingStones.length - 1);
    const leftmostSum = removeLeftmost.reduce((a, b) => a + b, 0);
    const rightmostSum = removeRightmost.reduce((a, b) => a + b, 0);

    // alice will always play with odd diff between arrays
    const turn = (stones.length - remainingStones.length) % 2 === 0 ? 'a' : 'b';
    
    console.log({
      remainingStones,
      bScore,
      aScore,
      turn,
      removeLeftmost,
      leftmostSum,
      removeRightmost,
      rightmostSum
    });
    
    // todo: figure out what they mean with optimally? left comment in forum
    if (turn === 'a') {
      remainingStones = leftmostSum > rightmostSum ? removeLeftmost : removeRightmost;
      aScore+= leftmostSum > rightmostSum ? leftmostSum : rightmostSum
    } else {
      remainingStones = leftmostSum > rightmostSum ? removeRightmost : removeLeftmost;
      bScore+= leftmostSum > rightmostSum ? rightmostSum : leftmostSum;
    };
  }

  return aScore - bScore;
}

const cases = [
  [5,3,1,4,2],
  // [7,90,5,1,100,10,10,2]
];

cases.forEach(c => {
  console.log(stoneGameVII(c));
})
