public class MiddleLinkList {
    public static void main(String[] args) {
        MiddleLinkList middleLinkList = new MiddleLinkList();
        ListNode head = new ListNode(1);
        ListNode current = head;
        int nodes = 5;
        int val = 1;
        while(nodes > 0){
            current.next = new ListNode(val);
            val++;
            current = current.next;
            nodes--;
        }
        middleLinkList.middleNode(head);

        
    }

    public ListNode middleNode(ListNode head) {
        ListNode current = head;
        int count = 0;

        while(current.next != null && current != null){
            count++;
            current = current.next;
        }
        int middleCount = 0;
        if(count % 2 != 0){
            Double dou = (Math.ceil(count/2));
            System.out.println(dou);
            middleCount = dou.intValue();
        } else {
           middleCount = count/2 + 1;
        }
        
        System.out.println(Math.round(count/2));
        System.out.println(count);
        System.out.println(middleCount);


        while(middleCount != 0){
            head = head.next;
            middleCount--;
        }
        return head;
        
    }

    
}
class ListNode {
        int val;
        ListNode next;
        ListNode(int x) {
        val = x;
        next = null;
        }
    
    }
