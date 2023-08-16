/**
 * @param {number[]} height
 * @return {number}
 */

class MaxArea {
  constructor(){}

  maxArea(height) {
    let maxAIndex = 0;
    let maxBIndex = 0;
    let maxVol = 0;

    for(let i = 0; i < height.length; i++) {
      const actual = height[i];
      
      for (let j = 0; j < height.length; j ++) {
        const actualJ = height[j];
        const xDistance = j - i;
        const lowestHeight = actual < actualJ ? actual : actualJ;
        const xVol = xDistance * lowestHeight;
        
        if (actual === 8 && actualJ === 7) {
          console.log('i', i, 'j', j);
          console.log('actual I', actual);
          console.log('actual j', actualJ);
          console.log('xDistance', xDistance);
          console.log('lowestHigh', lowestHeight);
          console.log('xVol', xVol);
        }

        if (xVol > maxVol) {
          console.log('new max', 'i', i, 'j', j);
          maxVol = xVol;
          maxAIndex = i;
          maxBIndex = j;
        }
      }
    }

    console.log('maxA', maxAIndex, 'maxB', maxBIndex, 'maxVol', maxVol);
  }
}


const max = new MaxArea();

const cases = [
  [1,8,6,2,5,4,8,3,7],
  // [1, 1]
];

cases.forEach((c) => {
  max.maxArea(c);
});
