const { ListNode, getNodeValues } = require("./common");

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
function rotateRight(head, k) {
  
  for (let i = 0; i < k; i ++) {
    let current = head;
    while (current && current.next) {
      if (!current.next.next) {
        // pop last node
        current.next = null;
      }
      // const actualNode = new ListNode(current.next.val);
      // console.log('actual', actualNode);
      // current.next = actualNode;
      current = current.next;
    }

    console.log('list with poped tail', getNodeValues(head));

    // const newHeadNode = new ListNode(current.val);
    // newHeadNode.next = current;
  }

  return head;
}

const cases = [
  [[1, 2, 3, 4, 5], 2],
  // 5, 1, 2, 3, 4
  // 4, 5, 1, 2, 3 
  // [[0, 1, 2], 4]
  // 2, 0 ,1
  // 1, 2, 0
  // 0, 1, 2
  // 2, 0, 1
];

/**
 * @param {Array} els
 * @return {ListNode} 
 */
function buildList(els) {
  const head = new ListNode(els[0]);
  let current = head;
  
  for (let i = 1; i < els.length; i++) {
    const actualNode = new ListNode(els[i]);
    current.next = actualNode;
    current = current.next;
  }

  return head;
}

cases.forEach((c) => {
  const list = buildList(c[0]);

  // console.log('get', getNodeValues(list));
  console.log(rotateRight(list, c[1]));
});
