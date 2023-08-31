
public class AddTwoNumbers {
    public static void main(String[] args) {

        AddTwoNumbers addTwoNumbers = new AddTwoNumbers();
        
        ListNode head1 = new ListNode((int) (Math.random()*9 + 1));
        ListNode current1 = head1;
        int nodes1 = 5;

        ListNode head2 = new ListNode((int) (Math.random()*9 + 1));
        ListNode current2 = head2;
        int nodes2 = 8;
        

        //construct the linked list (First node already created)
        while(nodes1 > 1){
            
            current1.next = new ListNode((int) (Math.random()*9 + 1));
            current1 = current1.next;
            nodes1--;
        }
        current1 = head1;

        while(nodes2 > 1){
            
            current2.next = new ListNode((int) (Math.random()*9 + 1));
            current2 = current2.next;
            nodes2--;
        }
        current2 = head2;

        //print the constructed linked list
        System.out.print("List 1: ");
        while(current1 != null){
            System.out.print(current1.val + " ");
            current1 = current1.next;
        }
        System.out.println();

        System.out.print("List 2: ");
         while(current2 != null){
            System.out.print(current2.val + " ");
            current2 = current2.next;
        }
        System.out.println();

        ListNode sumHead = addTwoNumbers.getSum(head1, head2);

        System.out.print("Result: ");
        while(sumHead != null){
            System.out.print(sumHead.val + " ");
            sumHead = sumHead.next;
        }
        
    }

    public ListNode getSum(ListNode l1, ListNode l2){

        ListNode currentL1 = l1;
        ListNode currentL2 = l2;

        ListNode newSumList = new ListNode(0);
        ListNode currentNewSumList = newSumList;

        int carry = 0;

        while(currentL1 != null && currentL2 != null){

            int sum = currentL1.val + currentL2.val + carry;

            if(sum > 10){
                carry = sum / 10;
                sum = sum % 10; 
            } else if( sum == 10){
                carry = 1;
                sum = 0;
            } else {
                carry = 0;
            }
            
           
            currentNewSumList.next = new ListNode(sum);
            currentNewSumList = currentNewSumList.next;
            
            currentL1 = currentL1.next;
            currentL2 = currentL2.next;

        }

        while(currentL1 != null){

            int sum = currentL1.val + carry;

            if(sum > 10){
                carry = sum / 10;
                sum = sum % 10; 
            } else if( sum == 10){
                carry = 1;
                sum = 0;
            } else {
                carry = 0;
            }
            

            currentNewSumList.next = new ListNode(sum);
            currentNewSumList = currentNewSumList.next;

            currentL1 = currentL1.next;

        }

        while(currentL2 != null){

            int sum = currentL2.val + carry;

            if(sum > 10){
                carry = sum / 10;
                sum = sum % 10; 
            } else if( sum == 10){
                carry = 1;
                sum = 0;
            } else {
                carry = 0;
            }

            

            currentNewSumList.next = new ListNode(sum);
            currentNewSumList = currentNewSumList.next;

            currentL2 = currentL2.next;

        }

        if(carry > 0){

            currentNewSumList.next = new ListNode(carry);

        }

        return newSumList.next;

    }


}
