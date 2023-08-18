import java.util.HashMap;
import java.util.Map;

public class BestRate {
    public static void main(String[] args) {
        BestRate bestRate = new BestRate();
        int[][] ratingsArray = new int[][]{{123,3},
                                           {121,3},
                                           {122,5},
                                           {121,5},
                                           {122,4}};
        System.out.println(bestRate.solution(ratingsArray.length, ratingsArray));
        
    }

    public int solution(int n, int[][] ratings){
       // Write your code here
        int result = 0;
        int maxRate = 0;
               
        

        Map<Integer,Integer> ratingsAvgMap = new HashMap<>(); 

        for(int i = 0; i < n; i++){ 
            int avg = 0;
            int count = 1;
            int sum = ratings[i][1]; // 3 // 3
            for(int j = i + 1; j < n; j++){
                if (ratings[i][0] == ratings[j][0]) { // 123 vs 121 - 122 - 121 / 121 vs 122 - 121
                    count++;
                    sum += ratings[j][1];
                }
            } 
            avg = sum / count;
            if(!ratingsAvgMap.containsKey(ratings[i][0])){
                ratingsAvgMap.put(ratings[i][0], avg);
            }
            
        }    
        ratingsAvgMap.forEach((k,v)->{
            System.out.println(k + " " + v);
        });  
        // for(int[] ratingRow : ratings){
        //     ratingsAvgMap.put(ratingRow[0], ratingRow[1]);
        // }
        for(Map.Entry<Integer,Integer> set : ratingsAvgMap.entrySet()) {
            if(set.getValue() > maxRate){
                maxRate = set.getValue();
                result = set.getKey();
            } else if(set.getValue() == maxRate){
                if(set.getKey() < result){
                    result = set.getKey();
                }
            }
        }

        return result;
    }    
}
