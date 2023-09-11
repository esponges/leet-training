class PartitionList{
    public static void main(String[] args) {
        
    }

    public ListNode partition(ListNode head, int x) {

        ListNode dummy = new ListNode(-1);
        
        ListNode leftPartition = new ListNode(-1);
        ListNode rigthPartition = new ListNode(-1);

        ListNode currentLeft = leftPartition;
        ListNode currentRigth = rigthPartition;

        ListNode current = head;


        while(current != null){
            
            if(current.val < x){
                currentLeft.next = new ListNode(current.val);
                currentLeft = currentLeft.next;
            } else {
                currentRigth.next = new ListNode(current.val);
                currentRigth = currentRigth.next;
            }
            current = current.next;
        }

        ListNode newHead = leftPartition.next;

        while(leftPartition.next != null){
            leftPartition= leftPartition.next;
        }

        leftPartition.next = rigthPartition.next;


        return newHead;
        
    }
}