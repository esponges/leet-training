/*Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false
 

Constraints:

1 <= s.length <= 104
s consists of parentheses only '()[]{}'.
{{()}}
*/

import java.util.HashMap;
import java.util.Stack;

class Brackets{

    public static void main(String[] args) { 
        String input = "{}()";
                //  0123

        Brackets brackets = new Brackets();
        brackets.isValid(input);        
    }

    public boolean isValid(String s) {
        HashMap<Character,Character> closingBrackets = new HashMap<>();
        Stack<Character> openBrackets = new Stack<>();

        closingBrackets.put('}','{');
        closingBrackets.put(']','[');
        closingBrackets.put(')','(');  
        
        for(char c:s.toCharArray()){
            if(closingBrackets.containsKey(c) && !openBrackets.empty()){
                if(openBrackets.peek() == closingBrackets.get(c)) {
                    openBrackets.pop();
                }   
                else return false;                                            
            }
            else{
                if(closingBrackets.containsKey(c)) return false;
                openBrackets.push(c);
                
                
            }
        }
        return openBrackets.empty();
    }
    
    // Leetcode solution
    public boolean isValid1(String s) {
        
        int length;
    
        do {
            length = s.length(); // Store the current length of the string
            s = s.replace("()", "").replace("{}", "").replace("[]", ""); // Replace valid pairs with an empty string
        } while (length != s.length()); // Continue loop until no more valid pairs can be found
    
        return s.length() == 0; // Return true if the resulting string length is 0, indicating validity
        }   

}
