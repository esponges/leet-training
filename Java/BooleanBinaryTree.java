public class BooleanBinaryTree {
    public static void main(String[] args) {
    // You are given the root of a full binary tree with the following properties:

    // Leaf nodes have either the value 0 or 1, where 0 represents False and 1 represents True.
    // Non-leaf nodes have either the value 2 or 3, where 2 represents the boolean OR and 3 represents the boolean AND.
    // The evaluation of a node is as follows:

    // If the node is a leaf node, the evaluation is the value of the node, i.e. True or False.
    // Otherwise, evaluate the node's two children and apply the boolean operation of its value with the children's evaluations.
    // Return the boolean result of evaluating the root node.

    // A full binary tree is a binary tree where each node has either 0 or 2 children.

    // A leaf node is a node that has zero children.
    
        BooleanBinaryTree booleanBinaryTree = new BooleanBinaryTree();
        TreeNode left = booleanBinaryTree.new TreeNode(1);
        TreeNode rightL = booleanBinaryTree.new TreeNode(1);
        TreeNode leftL = booleanBinaryTree.new TreeNode(0);
        TreeNode right = booleanBinaryTree.new TreeNode(3,leftL,rightL);
        TreeNode root = booleanBinaryTree.new TreeNode(2, left, right);

        System.out.println(booleanBinaryTree.getResolution(root));
    }
    public class TreeNode {
      int val;
      TreeNode left;
      TreeNode right;
      TreeNode() {}
      TreeNode(int val) { this.val = val; }
      TreeNode(int val, TreeNode left, TreeNode right) {
          this.val = val;
          this.left = left;
          this.right = right;
      }
    }
    public boolean getResolution(TreeNode root) {
        if(root.left == null) return root.val == 1 ? true: false; 
        if(root.val == 2) {
            return getResolution(root.left) || getResolution(root.right);
        } else {
            return getResolution(root.left) && getResolution(root.right);
        }
    }
}
