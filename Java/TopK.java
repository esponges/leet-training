import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.Comparator;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map.Entry;


public class TopK {
    public static void main(String[] args) {

        TopK topK = new TopK();
        int[] nums = {1,1,1,3,3,2,4};
        System.out.println(Arrays.toString(topK.topKFrequent(nums, 3)));
        System.out.println(Arrays.toString(topK.topKFrequent1(nums, 3)));;
        
    }

    public int[] topKFrequent(int[] nums, int k) {
        
        HashMap<Integer,Integer> numberCount = new HashMap<>();
        ArrayList<Integer> topK = new ArrayList<>();
        LinkedHashMap<Integer,Integer> sortedMap = new LinkedHashMap<>();
        int[] ans = new int[k];

        for(int num:nums){
            if(!numberCount.containsKey(num)){
                numberCount.put(num, 1);
            } else {
                numberCount.put(num, numberCount.get(num)+1);
            }
        }

        numberCount.forEach( (key, value) -> {
            topK.add(value);
        });

        Collections.sort(topK, Collections.reverseOrder());
        

        for(Integer num: topK){
            for(Entry<Integer,Integer> entry : numberCount.entrySet()) {
                if(entry.getValue().equals(num)) {
                    sortedMap.put(entry.getKey(), num);
                }
            }
        }

        //System.out.println(sortedMap);

        int i = 0;

        for(Entry<Integer,Integer> entry: sortedMap.entrySet()) {
            while( i < k){
                ans[i++] = entry.getKey();
                break;
            }
        }

        return ans;       

        
    }

    public int[] topKFrequent1(int[] nums, int k) {
        
        HashMap<Integer,Integer> numberCount = new HashMap<>();

        int[] ans = new int[k];

        for(int num:nums){
            if(!numberCount.containsKey(num)){
                numberCount.put(num, 1);
            } else {
                numberCount.put(num, numberCount.get(num)+1);
            }
        }

        List<Integer> topK = new ArrayList<>(numberCount.keySet());

        Collections.sort(topK, new Comparator<Integer>() {
            public int compare(Integer a, Integer b){
                return numberCount.get(b)-numberCount.get(a);
            }
        });

        ///System.out.println(topK);

       for(int i = 0; i < k; i++){
        ans[i] = topK.get(i);
       }

        return ans;       

        
    }
}
