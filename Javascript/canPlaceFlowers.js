/* 
605. Can Place Flowers
Easy
5.9K
1K
Companies
You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.

Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return true if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise.

 

Example 1:

Input: flowerbed = [1,0,0,0,1], n = 1
Output: true
Example 2:

Input: flowerbed = [1,0,0,0,1], n = 2
Output: false
 */

/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @returns {boolean}
 */
function canPlaceFlowers (flowerbed, n) {
  if (n === 0) return true;

  let placed = 0;
  for (let i = 0; i < flowerbed.length; i++) {
    const prev = flowerbed[i - 1];
    const actual = flowerbed[i];
    const next = flowerbed[i + 1];

    if (!prev && actual === 0 && !next){
      placed += 1;
      i += 1;

      if (placed === n) return true;
    } 
  }

  return false;
}

const cases = [
  [[1, 0, 0, 0, 1], 1], // true
  [[1, 0, 0, 0, 1], 2], // false
  [[1, 0, 0, 0, 0, 0, 1], 2], // true
];

cases.forEach(c => {
  console.log(canPlaceFlowers(c[0], c[1]));
});
