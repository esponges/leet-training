// Given an integer numRows, return the first numRows of Pascal's triangle.

// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:
// Example 1:

// Input: numRows = 6
// Output: [[1],  -> 1
//         [1,1],
//        [1,2,1],
//       [1,3,3,1],
//      [1,4,6,4,1],
//    [1,5,10,10,5,1]] .. -> 6
// Example 2:

// Input: numRows = 1
// Output: [[1]]
 

// Constraints:

// 1 <= numRows <= 30

import java.util.LinkedList;
import java.util.*;


public class PascalTriangle {

    public static void main(String[] args) {
        PascalTriangle pascalTringle = new PascalTriangle();
        System.out.println(pascalTringle.generate(3));
        
        
        
    }
    
    public List<List<Integer>> generate(int numRows){ // numRows = 3
        List<List<Integer>> mainList = new LinkedList<>();
        List<Integer> caseOne = Arrays.asList(1);
        mainList.add(caseOne);

        if(numRows == 1){
            return mainList;
        } else {
            for(int i = 2; i <= numRows; i++){
                int listTail = mainList.size()-1;
                List<Integer> prevCase = mainList.get(listTail);
                List<Integer> tempList = new LinkedList<>();
                int pointer = 0;
                for(int j = 1; j <= i; j++){
                    if(j == 1 || j == i){
                        tempList.add(1);
                    }else {
                        int prev = prevCase.get(pointer);
                        int next = prevCase.get(pointer + 1);
                        tempList.add(prev+next);
                        pointer++;
                    }

                }
                mainList.add(tempList);

            }
            
        }

        return mainList;

        
    }
}
