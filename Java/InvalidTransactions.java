// A transaction is possibly invalid if:

// the amount exceeds $1000, or;
// if it occurs within (and including) 60 minutes of another transaction with the same name in a different city.
// You are given an array of strings transaction where transactions[i] consists of comma-separated values representing the name, time (in minutes), amount, and city of the transaction.

// Return a list of transactions that are possibly invalid. You may return the answer in any order.

// Example 1:

// Input: transactions = ["alice,20,800,mtv","alice,50,100,beijing"]
// Output: ["alice,20,800,mtv","alice,50,100,beijing"]
// Explanation: The first transaction is invalid because the second transaction occurs within a difference of 60 minutes, have the same name and is in a different city. Similarly the second one is invalid too.
// Example 2:

// Input: transactions = ["alice,20,800,mtv","alice,50,1200,mtv"]
// Output: ["alice,50,1200,mtv"]
// Example 3:

// Input: transactions = ["alice,20,800,mtv","bob,50,1200,mtv"]
// Output: ["bob,50,1200,mtv"]
 

// Constraints:

// transactions.length <= 1000
// Each transactions[i] takes the form "{name},{time},{amount},{city}"
// Each {name} and {city} consist of lowercase English letters, and have lengths between 1 and 10.
// Each {time} consist of digits, and represent an integer between 0 and 1000.
// Each {amount} consist of digits, and represent an integer between 0 and 2000.


import java.util.LinkedList;
import java.util.List;

public class InvalidTransactions {
    public static void main(String[] args) {
        InvalidTransactions invalidTransactions = new InvalidTransactions();
        String[] input = {"alice,20,800,mtv","alice,50,100,mtv","alice,51,100,frankfurt"};
        System.out.println(invalidTransactions.invalidTrans(input));

    }

    public List<String> invalidTrans(String[] transactions){
        List<String[]> transactionsList = new LinkedList<>();

        for(String t: transactions){
            String[] transactionSplit = t.split(",");
            transactionsList.add(transactionSplit);
        }
        // 0 -> names
        // 1 -> times
        // 2 -> amounts
        // 3 -> cities
        List<String> invalidList = new LinkedList<>();

        for(int i = 0; i < transactionsList.size(); i++){

            String[] prev = transactionsList.get(i);

            String prevName = prev[0];
            int prevTime = Integer.parseInt(prev[1]);
            int prevAmount = Integer.parseInt(prev[2]);
            String prevCity = prev[3];

            if(prevAmount > 1000){
                invalidList.add(transactions[i]);          
            } else {
                for(int j = 0; j < transactionsList.size(); j++){
                    String[] actual = transactionsList.get(j);

                    String actualName = actual[0];
                    int actualTime = Integer.parseInt(actual[1]);
                    String actualCity = actual[3];
                    //System.out.println(Arrays.toString(prev) + " " +  Arrays.toString(actual));

                    if(i != j && prevName.equals(actualName) && !prevCity.equals(actualCity) && Math.abs(actualTime-prevTime) <= 60){
                        invalidList.add(transactions[i]);
                        break;
                    }

                }

            }
             
        }
        return invalidList;
    }
}

