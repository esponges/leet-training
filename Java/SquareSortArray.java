import java.util.Arrays;

public class SquareSortArray {
    public static void main(String[] args) {
    // Given an integer array nums sorted in non-decreasing order, 
    // return an array of the squares of each number sorted in non-decreasing order.
    // 
    // Example 1:
    // Input: nums = [-4,-1,0,3,10]
    // Output: [0,1,9,16,100]
    // Explanation: After squaring, the array becomes [16,1,0,9,100].
    // After sorting, it becomes [0,1,9,16,100].
    // 
    // Example 2:
    // Input: nums = [-7,-3,2,3,11]
    // Output: [4,9,9,49,121]
    //  
    // Constraints:
    // 
    // 1 <= nums.length <= 104
    // -104 <= nums[i] <= 104
    // nums is sorted in non-decreasing order.
        SquareSortArray squareSortArray = new SquareSortArray();
        Arrays.stream(squareSortArray.getSortedSquaredArray(new int[]{-4,-1,2,3,10})).forEach(System.out::print);
    }

    public int[] getSortedSquaredArray(int[] nums) {
        //return Arrays.stream(nums).map(x -> x*x).sorted().toArray();
        int len = nums.length;
        int x = 0;
        int y = len-1;
        int z = len-1;
        int[] ans = new int[len];

        while(x <= y) {
            int left = Math.abs(nums[x]);
            int right = Math.abs(nums[y]);
            if(left >right) {
                ans[z--] = left*left;
                x++;
            } else {
                ans[z--] = right*right;
                y--;
            }
        }
        return ans;
    }

}
