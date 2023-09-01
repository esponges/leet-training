import java.util.Arrays;
import java.util.Collections;
import java.util.LinkedList;
import java.util.List;

public class DiagonalSort {
    public static void main(String[] args) {

        DiagonalSort diagonalSort = new DiagonalSort();

        int[][] input1 = {{9,4,6}, // 1,1,6
                          {8,1,1}};// 8,9,4

        int[][] input2 = {{11,25,66,1,69,7}, 
                         {23,55,17,45,15,52},
                         {75,31,36,44,58,8},
                         {22,27,33,25,68,4},
                         {84,28,14,11,5,50}};
        int[][] inputSorted = diagonalSort.sortMatrix(input2);

        Arrays.stream(inputSorted).forEach( s -> System.out.println(Arrays.toString(s)));;
        
    }

    public int[][] sortMatrix(int[][] mat){ // 
        int nLen = mat.length; // 2
        int mLen = mat[0].length; // 3

        int i = nLen -1; // 1
        int j = 0;
        int k = 1;

        while(k <= nLen){ // 1 <= 1 / 2 <= 1 

            List<Integer> sortList = new LinkedList<>();

            while(i < nLen && j < mLen){ // 1 < 2 || 0 < 3

            int actual = mat[i++][j++]; // 8
            sortList.add(actual);
            }

            Collections.sort(sortList);
            i = nLen - k; // 1
            j = 0;        // 0

            for(int n: sortList){
            mat[i++][j++] = n;  // 1,0 = 8 /
            }

            k++; // 2
            i = nLen -k; // 2 -2 = 0
            j = 0;        
        }

        k = 1;
        i = 0;
        j = k;

        while(k <= mLen){ // 1 <= 1 / 2 <= 1 

            List<Integer> sortList = new LinkedList<>();

            while(i < nLen && j < mLen){ // 1 < 2 || 0 < 3

            int actual = mat[i++][j++]; // 8
            sortList.add(actual);
            }

            Collections.sort(sortList);
            i = 0; 
            j = 0 + k;       

            for(int n: sortList){
            mat[i++][j++] = n;  // 1,0 = 8 /
            }

            k++; // 2
            i = 0; // 2 -2 = 0
            j = 0 + k;        
            

        }

        return mat;
    }
    
}
