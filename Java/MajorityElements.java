// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

 

// Example 1:

// Input: nums = [3,2,3]
// Output: 3
// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2
 

// Constraints:

// n == nums.length
// 1 <= n <= 5 * 104
// -109 <= nums[i] <= 109
 

// Follow-up: Could you solve the problem in linear time and in O(1) space?

import java.util.HashMap;
import java.util.Map;


public class MajorityElements {
    public static void main(String[] args) {

        MajorityElements majorityElements = new MajorityElements();
        System.out.println(majorityElements.majorNumber(new int[]{1,2,2,3,1,1,4,3}));
        
    }

    public int majorNumber(int[] nums){
        Map<Integer,Integer> mapCount = new HashMap<>();
        //loop to count repetition
        for(int i = 0; i < nums.length; i++){
            int actual = nums[i];
            if(mapCount.containsKey(actual)){
                mapCount.put(actual, mapCount.get(actual) + 1);
            } else {
                mapCount.put(actual,1);
            }
        }
        //loop to get the major number repeated
        int majorKey = 0;
        int majorValue = 0;
        for(Map.Entry<Integer,Integer> set : mapCount.entrySet()){
            if(set.getValue() > majorValue){
                majorValue = set.getValue();
                majorKey = set.getKey();  
            }          
        }
        return majorKey;

    }
    
}
