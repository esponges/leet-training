/**
 * @param {any} data
 * @param {CustomNode} left
 * @param {CustomNode} right
 */
class CustomNode {
  /**
   * @param {any} data 
   * @param {CustomNode|null} left 
   * @param {CustomNode|null} right 
   */
  constructor(data, left, right) {
    this.left = left;
    this.right = right;
    this.data = data;
  }
}

class BinaryTree {
  /**
   * @param {CustomNode|null} root 
   */
  constructor(root) {
    // todo: handle duplicates (allow or reject)
    this.root = root;
  }

  /**
   * @param {CustomNode} node 
   */
  add (node) {
    if (this.root === null) {
      this.root = node;
    } else {
      this.insertNode(this.root, node);
    }
  }
 
  /**
   * @param {CustomNode} node
   * @param {CustomNode} newNode
   */
  insertNode (node, newNode) {
    // place data in the right node
    // bigger -  goes right
    if (newNode.data > node.data) {
      if (!node.right) {
        node.right = newNode;
      } else {
        // traverse recursivelly till finding node
        this.insertNode(node.right, newNode);
      }
    // smaller - goes left
    } else { 
      if (!node.left) {
        node.left = newNode;
      } else {
        // traverse recursivelly till finding node
        this.insertNode(node.left, newNode);
      }
    }
    // equal - special case. Must be handled
  }
}

