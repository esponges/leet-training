const inputs = [
  '{}',
  '{()}',
  '{{]}',
  ']',
  '[[[))',
  '()[]{}'
];

function isValid(input) {
  if (typeof input !== 'string' || input.length < 2) {
    return false;
  }

  const evaluation = {
    '{': '}',
    '[': ']',
    '(': ')'
  };
  
  
  const split = input.split('');
  const stack = [];
  let valid = true;

  split.forEach((actual, idx) => {
    if (stack.length === 0) {
      // starts right side, wrong.
      if (!evaluation[actual]) {
        valid = false;
        return;
      }

      // starts with left side, okay.
      stack.push(actual);
    } else {
      const lastInStack = stack[stack.length - 1];

      if (evaluation[lastInStack] === actual) {
        stack.pop();
      } else {
        // here only opening elements should be pushed - closing are
        // invalid since they don't have any opening in the stack
        const isOpeningElement = !!evaluation[actual];

        if (!isOpeningElement) {
          valid = false;
          return;
        }
        stack.push(actual);
      }
    }
  })
}

/**
 * @param {string} s
 * @returns {boolean}
 */
function isValidTwo (s) {
  if (s.length < 2 || s.length % 2 !== 0) return false;

  let replaced = s;
  while (replaced.length > 0) {
    const prev = replaced;
    replaced = replaced.replace("{}", "").replace("()", "").replace("[]", "");

    // not open-closed pairs found anymore, therefore not valid
    if (prev === replaced) return false;
  }
  // replaced is empty, meaning all had pair to close
  return true;
}

// console.log(isValidTwo(inputs[5]));

inputs.forEach(c => {
  console.log(isValidTwo(c));
})
