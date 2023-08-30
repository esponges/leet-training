class ListNode {
  next = null;
  val;
  // this.val = val === undefined ? 0 : val;
  // this.next = next === undefined ? null : next;
  constructor(val) {
    this.val = val === undefined ? 0 : val;
  }
}

/**
 * @param {Array} vals
 * @param {boolean} debug
 * @return {ListNode}
 */
const createList = (vals, debug) => {
  const list = new ListNode(vals[0]);
  let current = list;

  for (let i = 1; i < vals.length; i++) {
    const node = new ListNode(vals[i]);
    current.next = node;
    // move pointer to next
    current = current.next;
  }

  if (debug) {
    console.log('your list', list);
  }

  return list;
}

/**
 * @param {ListNode} head
 * @returns {Array}
 */
const getNodeValues = (head) => {
  const vals = [];
  let current = head;

  // should stop pushing when last current.next === undefined
  while (current) {
    vals.push(current.val);
    current = current.next;
  }

  return vals;
}

/**
 * 
 * @param {ListNode} head 
 * @param {number} stop 
 */
function traverseList(head, stop = 2) {
  let current = head;
  let count = 0;

  while (current && count < stop) {
    console.log(count, current.val);
    current = current.next;
    count++;
  }

  // mutate head stopping at stop
  let current2 = head;

  while (current2 && count < stop) {
    console.log(count, current2.val);
    current2 = current2.next;
    count++;
  }

  console.log('head', head, getNodeValues(head));
  return head;
}
// const samples = [
//   [1, 2, 3, 4, 5],
//   // [0, 1, 2],
// ];

// samples.forEach((sample) => {
//   const list = createList(sample);
  // traverseList(list);
// });

module.exports = {
  ListNode,
  createList,
  getNodeValues,
  traverseList,
}
