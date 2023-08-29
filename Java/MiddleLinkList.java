

public class MiddleLinkList {
    public static void main(String[] args) {
        MiddleLinkList middleLinkList = new MiddleLinkList();
        int val = 1;
        ListNode head = new ListNode(val);
        ListNode current = head;
        int nodes = 15;
        

        //construct the linked list (First node already created)
        while(nodes > 1){
            val++;
            current.next = new ListNode(val);
            current = current.next;
            nodes--;
        }
        current = head;

        //print the constructed linked list
        while(current != null){
            System.out.print(current.val + " ");
            current = current.next;
        }
        System.out.println();

        // return and print the value of the middle node
        head = middleLinkList.middleNode(head);
        System.out.println("Middle node value: " + head.val);

        
    }

    public ListNode middleNode(ListNode head) {
        ListNode current = head;
        int count = 1;
        //counting size of the list
        while(current != null && current.next != null){
            count++;
            current = current.next;
        }
        //find for the middle of the list
        int middleCount = count / 2;
        // move ahead of the middle node if even or middle node if odd
        while(middleCount > 0){
            head = head.next;
            middleCount--;
        }
        return head;
        
    }

    
}
// class ListNode {
//         int val;
//         ListNode next;
//         ListNode(int x) {
//         val = x;
//         next = null;
//         }
    
//     }
