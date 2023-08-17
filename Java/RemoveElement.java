import java.util.Arrays;

public class RemoveElement {
    public static void main(String[] args) {
        RemoveElement removeElement = new RemoveElement();
        int[] nums = {2,2,3,4,3,2,1};
        System.out.println(removeElement.remove(nums, 2) + Arrays.toString(nums));
        
    }
    public int remove(int[] nums, int val){
        
        int end = nums.length-1;
        int start = 0;
        int count = 0;

        while(start <= end){
            if(nums[start] == val && nums[end] != val){
                nums[start] = nums[end];
                end--;
                start++;
                count++;
                
                
            } else if(nums[end] == val){
                end--;
            } else {
                start++;
                count++;
            }
        }
        return count;

    }
    
}
