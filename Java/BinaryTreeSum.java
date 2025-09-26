public class BinaryTreeSum {
    public static void main(String[] args) {
        BinaryTreeSum binaryTreeSum = new BinaryTreeSum();
        TreeNode leftNode = binaryTreeSum.new TreeNode(3);
        TreeNode rightNode = binaryTreeSum.new TreeNode(6);
        TreeNode root = binaryTreeSum.new TreeNode(10, leftNode, rightNode);
        System.out.println(binaryTreeSum.checkTree(root));
        
    }
    public boolean checkTree(TreeNode root) {
        if(root.left.val + root.right.val == root.val)
        return true;
        return false;
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
    
}
