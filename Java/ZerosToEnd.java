import java.util.Arrays;
import java.util.LinkedList;
import java.util.List;
import java.util.Queue;
import java.util.stream.Collectors;
import java.util.stream.Stream;
import java.util.ArrayList;


public class ZerosToEnd {
    public static void main(String[] args) {
        
        ZerosToEnd zerosToEnd = new ZerosToEnd();

        int[] input = new int[]{1,0,3,2,0,1,2,0,5};
        zerosToEnd.shiftToEnd(input);


        System.out.println(Arrays.toString(input));
        
    }

    public void shiftToEnd(int[] nums){

        boolean shifted = true;
        // outer for loop to shift per each index
        for(int j = 0; j < nums.length; j++){
            //inner for loop to swap any zero coicidence til the end            
            for(int i = 0; i < nums.length-1; i++){
                int actual = nums[i];
                shifted = false;

                if(actual == 0){
                    shifted = true;
                    int temp = nums[i+1];
                    nums[i+1] = actual;
                    nums[i] = temp;
                }
            }
        }
    }
}