// Given an integer array nums where every element appears three times except for one, which appears exactly once. Find the single element and return it.

// You must implement a solution with a linear runtime complexity and use only constant extra space.

// Example 1:

// Input: nums = [2,2,3,2]
// Output: 3
// Example 2:
//                          l  r  
// Input: nums = [0,1,0,1,0,99,1]
// Output: 99
 
// Constraints:

// 1 <= nums.length <= 3 * 104
// -231 <= nums[i] <= 231 - 1
// Each element in nums appears exactly three times except for one element which appears once.

import java.util.Arrays;

public class SingleNumber {
    public static void main(String[] args) {
        SingleNumber singleNumber = new SingleNumber();
        System.out.println(singleNumber.getSingle(new int[]{43,16,45,89,45,-2147483648,45,2147483646,-2147483647,-2147483648,43,2147483647,-2147483646,-2147483648,89,-2147483646,89,-2147483646,-2147483647,2147483646,-2147483647,16,16,2147483646,43}));;
        
    }

    public int getSingle(int [] nums){

        int len = nums.length;

        Arrays.sort(nums);
       

        
        for(int i = 0; i < len; i++){

            Integer prev =  i == 0 ? null : nums[i-1];
            Integer actual = nums[i];
            Integer next = i == len - 1 ? null : nums[i+1];
           


            if(i % 3 == 0 && !actual.equals(prev) && !actual.equals(next)) return actual;
            
        }

        return -1;

    }
    
}
