/**
 * @param {number[]} height
 * @return {number}
 */

class MaxArea {
  constructor(){}

  maxArea(height) {
    let maxVol = 0;
    // [1,8,6,2,5,4,8,3,7]
    // 1 * 1, 1*8, 1*6...
    // 8 * 1, 8*8, 8*6...
    // 6 * 1, 6*8, 6*6...

    console.time('maxArea');
    for(let i = 0; i < height.length; i++) {
      const actual = height[i];
      
      for (let j = 0; j < height.length; j ++) {
        const actualJ = height[j];
        const xDistance = j - i;
        const lowestHeight = actual < actualJ ? actual : actualJ;
        const xVol = xDistance * lowestHeight;

        if (xVol > maxVol) {
          maxVol = xVol;
        }
      }
    }
    console.timeEnd('maxArea');

    return maxVol;
  }

  // leet code solution 
  maxAreaOptimized(height) {
    let maxVol = 0;
    let left = 0;
    let right = height.length - 1;

    console.time('maxAreaOptimized');
    while (left < right) {
      const xDistance = right - left;
      const lowestHeight = height[left] < height[right] ? height[left] : height[right];
      const xVol = xDistance * lowestHeight;

      if (xVol > maxVol) {
        maxVol = xVol;
      }

      if (height[left] < height[right]) {
        left++;
      } else {
        right--;
      }
    }
    console.timeEnd('maxAreaOptimized');

    return maxVol;
  }
}


const max = new MaxArea();

const cases = [
  [1,8,6,2,5,4,8,3,7],
  [1, 1]
];

cases.forEach((c) => {
  console.log(max.maxArea(c));
});
