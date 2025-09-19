/**
 * @param {string} croakOfFrogs
 * @return {number}
 */
var minNumberOfFrogs = function(croakOfFrogs) {
  let complete = 0;
  const partialCroaks = {
      c: 0,
      r: 0,
      o: 0,
      a: 0,
      k: 0
  };

  for (let i = 0; i < croakOfFrogs.length; i++) {
      const maybeCroak = croakOfFrogs.slice(i, i + 5);
      if (maybeCroak == "croak") {
          if (complete != 1) complete ++;
          i += 4;
      } else {
          partialCroaks[croakOfFrogs[i]]++;
      }
  };

  let sum = -1;
  Object.values(partialCroaks).forEach((val, idx) => {
      if (idx == 0) sum = val;
      else if (idx > 0 && val != sum) {
          sum = -1;
          return false;
      }
  });

  if (sum == -1) return -1;

  return complete + sum;
};
