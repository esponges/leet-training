// An ugly number is a positive integer whose prime factors are limited to 2, 3, and 5.

// Given an integer n, return the nth ugly number.

// Example 1:

// Input: n = 10
// Output: 12
// Explanation: [1, 2, 3, 4, 5, 6, 8, 9, 10, 12] is the sequence of the first 10 ugly numbers.
// Example 2:

// Input: n = 1
// Output: 1
// Explanation: 1 has no prime factors, therefore all of its prime factors are limited to 2, 3, and 5.

//  1, 2, 3, 4, 5, 6, 8, 9, 10, 12
//  n   2   3   5   ugly
//  1   0   0   0   1
//  2   1   0   0   2
//  3   0   1   0   3
//  4   0   2   0   4
//  5   0   0   1   5
//  6   0   1   1   6
//  7   3   0   0   8
//  8   0   2   0   9
//  9   2   1   0   12

import java.util.List;
import java.util.ArrayList;


class UglyNumbers{
    public static void main(String[] args) {

        UglyNumbers uglyNumbers = new UglyNumbers();

        System.out.println(uglyNumbers.getUgly(9));
        
    }

    public int getUgly(int n){

        if(n == 1) return 1;

        List<Integer> uglyList = new ArrayList<>();

        uglyList.add(1);

        int a2 = 0, b3 = 0, c5 = 0;
        
        for(int i = 0; i < n; i++){

            int nextUgly = Math.min(uglyList.get(a2) * 2, uglyList.get(b3) * 3);
            nextUgly = Math.min(nextUgly,uglyList.get(c5) * 5 );

            uglyList.add(nextUgly);

            if(nextUgly == uglyList.get(a2) * 2) a2++;
            if(nextUgly == uglyList.get(b3) * 3) b3++;
            if(nextUgly == uglyList.get(c5) * 5) c5++;    
                
        }

        return uglyList.get(uglyList.size()-1);
    
    }
}