import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.function.Predicate;

import javax.xml.crypto.Data;

public class SpecialArray {
//An array is considered special if the parity of every pair of adjacent elements is different. In other words, one element in each pair must be even, and the other must be odd.
// You are given an array of integers nums. Return true if nums is a special array, otherwise, return false.

// Example 1:
// Input: nums = [1]
// Output: true
// Explanation:
// There is only one element. So the answer is true.

// Example 2:
// Input: nums = [2,1,4]
// Output: true
// Explanation:
// There is only two pairs: (2,1) and (1,4), and both of them contain numbers with different parity. So the answer is true.

// Example 3:
// Input: nums = [4,3,1,6]
// Output: false
// Explanation:
// nums[1] and nums[2] are both odd. So the answer is false. 
    public static void main(String[] args) {
        SpecialArray specialArray = new SpecialArray();
        System.out.println("Is special array: " + specialArray.isSpecialArray(new int[]{1,2,3,4,5,6,7,7}));
        
    }

    public boolean isSpecialArray(int[] input) {

        for(int i = 0; i < input.length -1; i++) {
            if(input[i] % 2 == input[i+1] % 2) return false;
        }
        return true;
    }

}
