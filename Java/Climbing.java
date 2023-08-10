// You are climbing a staircase. It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

// Example 1:

// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps
// Example 2:

// Input: n = 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step
 
// Constraints:

// 1 <= n <= 45

// 1 -> 1
// 2 -> 11
//      2
// 3 -> 111
//      12
//      21
// 4 -> 1111
//      112
//      22
//      211
//      121
// 5 -> 11111
//      1112
//      1121
//      1211
//      2111
//      221
//      122
//      212

public class Climbing {
    public static void main(String args[]){

        Climbing climbing = new Climbing();
        int n = 10;

        for(int i = 1; i < n; i++ ){
            System.out.println(climbing.climbingWays1(i));
        }
        

    }

    // public int climbingWays(int n){
    //     if(n == 1) return 1;
    //     if(n == 2) return 2;
    //     // 1 2 3 5 8 ...x

        
        
    //     return climbingWays(n-1);

    // }

     public int climbingWays1(int n){
        int n1 = 1;
        int n2 = 2;
        int acc = 0;
        if(n == 1) return 1;
        if(n == 2) return 2;
        for(int i = 2; i < n; i++){ // 4 5 6

            acc = n1 + n2; // 3 5 8 13
            n1 = n2;       // 2 3 5
            n2 = acc;      // 3 5 8
        }
        return acc;

    }
    
}
