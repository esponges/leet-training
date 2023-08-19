class ListNode {
  next = null;
  // this.val = val === undefined ? 0 : val;
  // this.next = next === undefined ? null : next;
  constructor(val) {
    this.val = val === undefined ? 0 : val;
  }
}

/**
 * @param {ListNode[]} vals
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

module.exports = {
  ListNode,
  createList
}
