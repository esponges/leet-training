


/**
 * @param {number[]} k
 * @return {number}
 */
function findMinFibonnaciNumbers (k) {
  const fibonacci = [1]; 
  let top = 0;
  let pointer = 0;
  while (top < k) {
    const actual = fibonacci[pointer];
    const prev = fibonacci[pointer - 1];
    // initial case
    const next = prev ? actual + prev : actual;
    fibonacci.push(next);

    top = next;
    pointer++;
  }
  console.log(fibonacci);

  const combs = [];
  let n = 2;
  let minimum = 0;
  /**
   * @param {number} idx 
   * @param {number[]|undefined} next 
   * @returns 
   */
  function combine (idx, next) {
    if ((next && next.length) == n) {
      combs.push(next);
      return;
    }

    for (let i = 0; i < fibonacci.length; i++) {
      if (i === idx) continue;
      
      const sum = [...(next ? next : []), fibonacci[idx], fibonacci[i]];
      
      if (sum.reduce((a, b) => a + b, 0)) {
        minimum = sum.length;
        return;
      };

      combine(idx, sum);
    }
  }
  
  combine(0);
  console.log('combs', combs);
  return minimum;
}

const cases = [
  7,
  10,
  // 19
];

cases.forEach(c => {
  console.log(findMinFibonnaciNumbers(c));
});
