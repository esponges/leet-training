import java.util.HashMap;
import java.util.Map;

public class RomanToInteger {
    public static void main(String[] args) {
        RomanToInteger romanToInteger = new RomanToInteger();
        System.out.println(romanToInteger.romanToInt("MCMXCIV"));
        System.out.println(romanToInteger.romanToInt("LVIII"));

        
    }

    public int romanToInt(String roman){

        HashMap<Character,Integer> translator = new HashMap<>();

        translator.put('I', 1);
        translator.put('V', 5);
        translator.put('X', 10);
        translator.put('L', 50);
        translator.put('C', 100);
        translator.put('D', 500);
        translator.put('M', 1000);

        int romanInt = 0;

        for(int i = 0; i < roman.length()-1; i++){

            int actual = translator.get(roman.charAt(i));
            int next = translator.get(roman.charAt(i+1));

            if( actual < next ){
                romanInt -= actual;
            } else {
                romanInt += actual;
            }           
        }

        romanInt += translator.get(roman.charAt(roman.length()-1));
        return romanInt;
    
    }
    
}
