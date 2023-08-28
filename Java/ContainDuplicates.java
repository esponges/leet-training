class ContainDuplicates{
    public static void main(String[] args) {
        ContainDuplicates containDuplicates = new ContainDuplicates();
        System.out.println(containDuplicates.containsDuplicate(new int[]{1,2,3,1}));
        
    }

    public boolean containsDuplicate(int[] nums) {
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
}