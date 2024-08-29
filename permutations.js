/* 
apply the code to solve the backtracking challenge from here
https://www.youtube.com/watch?v=Nabbpl7y4Lo&ab_channel=ComputerBread

find all the permutations from nums

eg.
[1] = [1]
[1, 2] = [1, 2], [2, 1]
[1, 2, 3] = [1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1] 
*/

function permutations(nums) {
  const solution = [];
  const tracking = new Array(nums.length).fill(false);
  function backtrack(res, arr, permutation, memo) {
    if (arr.length === permutation.length) {
      res.push(permutation);
      return;
    }

    for (let i = 0; i < arr.length; i++) {
      if (!memo[i]) {
        memo[i] = true;
        backtrack(res, arr, [...permutation, arr[i]], memo);
        memo[i] = false;
      }
    }
  }

  backtrack(solution, nums, [], tracking);
  return solution;
}

const cases = [
  [1, 2],
  // [1, 2, 3],
];

cases.forEach(c => {
  console.log(permutations(c));
});
