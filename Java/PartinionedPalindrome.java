import java.util.LinkedList;
import java.util.List;

public class PartinionedPalindrome {
    public static void main(String[] args) {
        
    }

    public List<List<String>> partition(String s){

        List<List<String>> outcomeList = new LinkedList<>();
        int left = 0;
        int right = 0;

        while(left < s.length() || right < s.length()){
            
        }

        

        
        
    }

    public boolean isPalindrome(String s){

        int left = 0;
        int right = s.length()-1;

        while(left<right){
            if(s.charAt(left) != s.charAt(right)) return false;
        }
        return true;

    }
}
