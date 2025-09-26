import java.util.Arrays;

public class GridMaxWidth {
    
public static void main(String[] args) {
    // You are given a 0-indexed m x n integer matrix grid. The width of a column is the maximum length of its integers.

    // For example, if grid = [[-10], [3], [12]], the width of the only column is 3 since -10 is of length 3.
    // Return an integer array ans of size n where ans[i] is the width of the ith column.

    // The length of an integer x with len digits is equal to len if x is non-negative, and len + 1 otherwise.

    // Example 1:

    // Input: grid = [[1],[22],[333]]
    // Output: [3]
    // Explanation: In the 0th column, 333 is of length 3.
    // Example 2:

    // Input: grid = [[-15,1,3],
    //                [15,7,12],
    //                [5,6,-2]]
    // Output: [3,1,2]
    // Explanation: 
    // In the 0th column, only -15 is of length 3.
    // In the 1st column, all integers are of length 1. 
    GridMaxWidth gridMaxWidth = new GridMaxWidth();
    Arrays.stream(gridMaxWidth.getMaxWidth(new int[][]{new int[]{-15,1,3}, new int[]{15,7,12}, new int[]{5,6,-2}})).forEach(System.out::println);
}
public int[] getMaxWidth(int[][] grid) {
    int m = grid.length;
    int n = grid[0].length;
    int[] ans = Arrays.stream(grid[0]).map(x -> String.valueOf(x).length()).toArray();
    for(int i = 1; i < m; i++) {
        for(int j = 0; j < n; j++) {
            int integerLen = String.valueOf(grid[i][j]).length();
            if(integerLen > ans[j]) ans[j] = integerLen;
        }
    }
    return ans;
}
}
