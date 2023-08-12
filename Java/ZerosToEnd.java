import java.util.Arrays;


public class ZerosToEnd {
    public static void main(String[] args) {
        
        ZerosToEnd zerosToEnd = new ZerosToEnd();

        int[] input = new int[]{1,0,3,2,0,1,2,0,5};
        zerosToEnd.shiftToEnd3(input);


        System.out.println(Arrays.toString(input));
        
        
    }

    public void shiftToEnd(int[] nums){

        // outer for loop to shift per each index
        for(int j = 0; j < nums.length; j++){
            //inner for loop to swap any zero coicidence til the end            
            for(int i = 0; i < nums.length-1; i++){
                int actual = nums[i];
                
                if(actual == 0){
                    
                    int temp = nums[i+1];
                    nums[i+1] = actual;
                    nums[i] = temp;
                }
            }
        }
    }
    //Leetcode solution 
    public void shiftToEnd3(int[] nums){
        int zeroCount = 0;
            for(int i = 0; i < nums.length; i++){
                if(nums[i] == 0){
                    zeroCount++;
                } else if( zeroCount > 0){
                    int temp = nums[i];
                    nums[i] = 0;
                    nums[i-zeroCount] = temp;
                }
            }                   
    }

    // public void shiftToEnd2(int[] nums){
    //     Queue<Integer> zeroBag = new LinkedList<>();
    //     int tail = nums.length-1;
        
    //     //inner for loop to take out zero coicidence and shift all to the left           
    //     for(int i = 0; i <= tail; i++){
    //         int actual = nums[i];
    //         if(actual == 0){ 
    //             zeroBag.offer(actual);
    //             swapTilEnd(nums, i, i+1);
    //         }
    //     }

    //     //populate zeros
    //     while(!zeroBag.isEmpty()){
    //         nums[tail] = zeroBag.poll();
    //         tail--;
    //     }
        
    // }

    // public void swapTilEnd(int[] nums, int index1, int index2){
    //     if(nums.length-1 == index1) return;
    //     nums[index1] = nums[index2];
    //     swapTilEnd(nums, index1+1, index2+1);
    // }

    

    // public void shiftToEnd1(int[] nums){

    //     boolean shifted = true;
    //     int tail = nums.length-1;
    //     // outer for loop to shift per each index
    //     while(shifted){
    //         //inner for loop to swap any zero coicidence til the end            
    //         for(int i = 0; i < nums.length; i++){
    //             int actual = nums[i];
    //             //shifted = false;

    //             if(actual == 0){
    //                 shifted = true;
    //                 while(nums[tail] == 0){
    //                     tail--;
    //                 }
    //                 int temp = nums[i];
    //                 nums[i] = nums[tail];
    //                 nums[tail] = temp;
    //                 tail --;
    //             }
    //             if(tail == i){
    //                 shifted = false;
    //                 break;
    //             }
    //         }
    //     }
    // }
}