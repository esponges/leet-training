import java.util.Arrays;
import java.util.HashSet;
import java.util.List;
import java.util.stream.Collectors;

class ContainDuplicates{
    public static void main(String[] args) {
        ContainDuplicates containDuplicates = new ContainDuplicates();
        System.out.println(containDuplicates.containsDuplicates1(new int[]{1,2,3,4,5}));
        
    }

    public boolean containsDuplicates(int[] nums) {
        int left = 0;
        int rigth = left + 1; 
        int end = nums.length-1;
                             //    l r     -> 
        while(left != end){ // 1 2 3 4
            if(nums[left] == nums[rigth]) return true;
            if(rigth == end){
                left++;
                rigth = left + 1;
            } else {
                rigth++;
            }            
        }  
        return false;     
    }

    public boolean containsDuplicates1(int[] nums){
        HashSet<Integer> numsSet = new HashSet<>();

        for(int i : nums){
            numsSet.add(i);
        }

        List<Integer> numsList = Arrays.stream(nums)
                                        .distinct()
                                        .boxed()
                                        .collect(Collectors.toList());

        if(numsList.size() == nums.length) return false;
        return true;
    }
}