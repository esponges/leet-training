import java.util.Arrays;
import java.util.Comparator;

public class SortEvenOdd {
    public static void main(String[] args) {
    // You are given a 0-indexed integer array nums. Rearrange the values of nums according to the following rules:

    // Sort the values at odd indices of nums in non-increasing order.
    // For example, if nums = [4,1,2,3] before this step, it becomes [4,3,2,1] after. 
    // The values at odd indices 1 and 3 are sorted in non-increasing order.
    // Sort the values at even indices of nums in non-decreasing order.
    // For example, if nums = [4,1,2,3] before this step, it becomes [2,1,4,3] after. 
    // The values at even indices 0 and 2 are sorted in non-decreasing order.
    // Return the array formed after rearranging the values of nums.

    // Example 1:

    // Input: nums = [4,1,2,3]
    // Output: [2,3,4,1]
    // Explanation: 
    // First, we sort the values present at odd indices (1 and 3) in non-increasing order.
    // So, nums changes from [4,1,2,3] to [4,3,2,1].
    // Next, we sort the values present at even indices (0 and 2) in non-decreasing order.
    // So, nums changes from [4,1,2,3] to [2,3,4,1].
    // Thus, the array formed after rearranging the values is [2,3,4,1].

    // Example 2:

    // Input: nums = [2,1]
    // Output: [2,1]
    // Explanation: 
    // Since there is exactly one odd index and one even index, no rearrangement of values takes place.
    // The resultant array formed is [2,1], which is the same as the initial array. 
     
    // [1,2,3,4,5,6,7,8] -> [1,8,3,6,5,4,7,2]
    // Constraints:

    // 1 <= nums.length <= 100
    // 1 <= nums[i] <= 100
    SortEvenOdd sortEvenOdd = new SortEvenOdd();
    Arrays.stream(sortEvenOdd.sortEvenOdd(new int[]{1,2,3,4,5,6,7})).forEach(System.out::println);
    }

    public int[] sortEvenOdd(int[] nums) {
        // This is a piramid, higher values in the middle and the it drops to the sides.
        // The fist thing that came to my mind is to use a tree, to use a collection that provides that order. 
        // Maybe sorting the nums and populate the output following that pattern.
        // Order two arrays sepaartly one with odds and another one with evens. Sorting firstone decending and second decresing and then merge.
        int len = nums.length;
        int mid = len/2;
        int[] oddArray = new int[mid];
        int[] evenArray = new int[len-mid];
        int incIndex = 0;
        int decIndex = 0;
        for(int i = 0; i < len; i++) {
            if(i % 2 == 0) {
                evenArray[incIndex++] = nums[i];
            } else {
                oddArray[decIndex++] = nums[i];
            }
        }
        Arrays.sort(oddArray);
        Arrays.sort(evenArray);
        incIndex = 0;
        decIndex = oddArray.length-1;
        for(int i = 0; i < len; i++) {
            if(i % 2 == 0) {
                nums[i] = evenArray[incIndex++];
            } else {
                nums[i] = oddArray[decIndex--];
            }
        }
        return nums;
    }
}
