/* 2410. Maximum Matching of Players With Trainers
Medium
443
14
Companies
You are given a 0-indexed integer array players, where players[i] represents the ability of the ith player. You are also given a 0-indexed integer array trainers, where trainers[j] represents the training capacity of the jth trainer.

The ith player can match with the jth trainer if the player's ability is less than or equal to the trainer's training capacity. Additionally, the ith player can be matched with at most one trainer, and the jth trainer can be matched with at most one player.

Return the maximum number of matchings between players and trainers that satisfy these conditions.

 

Example 1:

Input: players = [4,7,9], trainers = [8,2,5,8]
Output: 2
Explanation:
One of the ways we can form two matchings is as follows:
- players[0] can be matched with trainers[0] since 4 <= 8.
- players[1] can be matched with trainers[3] since 7 <= 8.
It can be proven that 2 is the maximum number of matchings that can be formed.
Example 2:

Input: players = [1,1,1], trainers = [10]
Output: 1
Explanation:
The trainer can be matched with any of the 3 players.
Each player can only be matched with one trainer, so the maximum answer is 1.
 

Constraints:

1 <= players.length, trainers.length <= 105
1 <= players[i], trainers[j] <= 109
Accepted
29.6K
Submissions
48K
Acceptance Rate
61.8% 
https://leetcode.com/problems/maximum-matching-of-players-with-trainers/description/
*/

/**
 * @param {number[]} players
 * @param {number[]} trainers
 * @returns {number}
 */
// 34 / 35 testcases passed
function matchPlayersAndTrainers (players, trainers) {
  players.sort();
  trainers.sort();

  let count = 0;
  for (p of players) {
    for (let i = 0; i < trainers.length; i++) {
      const trainer = trainers[i];
      if (trainer >= p) {
        trainers.splice(i, 1);
        count ++;
        break;
      }
    }
  }

  return count;
}

// try using pointers instead
// this passes 85/93%
function matchPlayersAndTrainers (players, trainers) {
  // it won't pass if not passing callback to `sort` why?
  players.sort((a, b) => a - b);
  trainers.sort((a, b) => a - b);

  let i = 0;
  let j = 0;
  let count = 0;
  while (j < trainers.length) {
    const p = players[i];
    const t = trainers[j];

    // trainer fit to player
    if (t >= p) {
      count ++;
      // and move to next options
      i++;
      j++
    } else {
      // try to find a match to the actual
      // player with the next trainer
      j++
    }
  }

  return count;
}

// [4, 7, 9]
// [2, 5, 8, 8]

const cases = [
  [[4,7,9], [8,2,5,8]],
  [[1,1,1], [10]]
];

cases.forEach(c => {
  console.log(matchPlayersAndTrainers(c[0], c[1]));
})
