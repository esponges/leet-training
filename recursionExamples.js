function sum(n) {
  if (n == 0) return 1;
  return n * sum(n - 1);
}

console.log(sum(5));

/**
 * @param {array[][]} names
 * @returns {array}
 */
function flatten(names) {
  let count = 0;
  for (n of names) {
    if (Array.isArray(n)) {
      count += flatten(n);
    } else {
      count += 1;
    }
  }
  return count;
}

const casesFlatten = [
  [
    'Li',
    ['Tammy', ['Will', 'Bob'], 'Tomoko', 'Jim'],
    'Alex',
    ['Colin', 'Chad'],
    'Ann',
  ],
  [
    ['Tammy', ['Will', 'Bob'], 'Tomoko', 'Jim'],
    ['Colin', 'Chad'],
  ],
];

casesFlatten.forEach(c => console.log(flatten(c)));
