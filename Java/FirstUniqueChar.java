// Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

// Example 1:

// Input: s = "leetcode"
// Output: 0
// Example 2:

// Input: s = "loveleetcode"
// Output: 2
// Example 3:

// Input: s = "aabb"
// Output: -1

// Constraints:

// 1 <= s.length <= 105
// s consists of only lowercase English letters.

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class FirstUniqueChar {
    public static void main(String[] args) {
        FirstUniqueChar firstUniqueChar = new FirstUniqueChar();
        System.out.println(firstUniqueChar.firstIndex("aabb"));
        
    }

    public int firstIndex(String s){
        int letterCount[] = new int[26];

        for(int i = 0; i < s.length(); i++){
            letterCount[s.charAt(i)-'a']++;
        } 

        for(int i = 0; i < s.length(); i++){
            if(letterCount[s.charAt(i)-'a'] == 1)
            return i;
        } 
        return -1;   

      

    }
    
}
