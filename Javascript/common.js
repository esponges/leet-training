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
 */

const createList = (vals) => {
  const list = new ListNode(vals[0]);
  let current = list;

  for (let i = 1; i < vals.length; i++) {
    const node = new ListNode(vals[i]);
    current.next = node;
    current = current.next;
  }
  console.log('your list', list);

  return list;
}

module.exports = {
  ListNode,
  createList
}
