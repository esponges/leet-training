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

module.exports = {
  ListNode,
  createList,
  getNodeValues
}
