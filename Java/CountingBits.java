import java.util.Arrays;

public class CountingBits {
    public static void main(String[] args) {
        CountingBits countingBits = new CountingBits();
        int[] ans = countingBits.countBits(5);
        System.out.println(Arrays.toString(ans));
        
    }

    public int[] countBits(int n){

        int[] ans = new int[n+1];

        for(int i = 0; i <= n; i++){ // 0 / 1 / 2

            int div = i / 2; // 0 / 0 / 1
            int remainder =  i % 2; // 0 / 1 / 0
            while( div != 0){ // t

                remainder += (div % 2); //  0 + 1 = 1
                div = div / 2; // 1 / 2 = 0
                
            }
            ans[i] = remainder;
        }
        return ans;

    }
}
