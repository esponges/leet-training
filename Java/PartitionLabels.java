import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;
import java.util.List;

public class PartitionLabels {
    public static void main(String[] args) {
    // You are given a string s. We want to partition the string into as many parts as possible 
    // so that each letter appears in at most one part. For example, the string "ababcc" can be partitioned into ["abab", "cc"],
    // but partitions such as ["aba", "bcc"] or ["ab", "ab", "cc"] are invalid.
    // 
    // Note that the partition is done so that after concatenating all the parts in order, the resultant string should be s.
    // 
    // Return a list of integers representing the size of these parts.
    // 
    //  
    // 
    // Example 1:
    // 
    // Input: s = "ababcbacadefegdehijhklij"
    // Output: [9,7,8]
    // Explanation:
    // The partition is "ababcbaca", "defegde", "hijhklij".
    // This is a partition so that each letter appears in at most one part.
    // A partition like "ababcbacadefegde", "hijhklij" is incorrect, because it splits s into less parts.
    // Example 2:
    // 
    // Input: s = "eccbbbbdec"
    // Output: [10]
        PartitionLabels partitionLabels = new PartitionLabels();
        System.out.println(partitionLabels.getCountList("abcdasdf"));
    }
    public List<Integer> getCountList(String s) {
        // First we can split the first letter and the rest and check for the first one repeated inside second one.
        // If second contains the first -> concat until that coincidence
        // Now we look right next that coincidence inside the first word after concat
        // if we have another coincidence we continue with concat and so on
        // if not we have our first word
        List<Integer> partitionedInts = new ArrayList<>();
        Map<Character, Integer> letterImpact = new HashMap<>();
        // Filling the impact
        for(int i = 0; i < s.length(); i++) {
            Character letter = s.charAt(i);
            letterImpact.put(letter, i);
        }
        // Calculate positions and fill result
        int max = 0;
        int prev = -1;
        for(int i = 0; i < s.length(); i++) {
            Character letter = s.charAt(i);
            max = max < letterImpact.get(letter) ? letterImpact.get(letter): max;
            if(max == i) {
                partitionedInts.add(max-prev);
                prev = max;
            }
        } 
        return partitionedInts;      
    }
}
