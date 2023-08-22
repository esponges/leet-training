// 1
// 1 1    i = 0
// 1 2 1    i = 1
// 1 3 3 1    i = 2
// 1 4 6 4 1
// 1 5 10 10 5 1

function createPascalTriangle(n) {
  const list = [[1]];

  // special case n = 1
  if (n === 1) return list;

  for (let i = 0; i < n - 1; i++) {
    // special case n = 2
    if ((i === 0)) {
      list.push([1, 1]);
    } else {
      const innerList = [];
      let pointer = 0;
      const prevLevel = list[i];

      for (let j = 0; j < prevLevel.length + 1; j++) {
        if (j === 0) innerList.push(1);
        else if (j === prevLevel.length) innerList.push(1);
        else {
          const prev = prevLevel[pointer];
          const next = prevLevel[pointer + 1];
          innerList.push(prev + next);
          pointer++;
        }
      }
      list.push(innerList);
    }
  }

  return list;
}

console.log(createPascalTriangle(6));

