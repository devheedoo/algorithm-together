class Solution {
    public int[] twoSum(int[] nums, int target) {
        int [] returnValue = {0,0};
        if(nums != null){
            int firstValue=0;
            int secondValue=0;
            
            for(int i = 0; i < nums.length; i++ ){
                firstValue = nums[i];
                for(int k = i+1; k < nums.length; k++ ){
                    secondValue = nums[k];
                    if(firstValue + secondValue == target){
                        returnValue[0] = i;
                        returnValue[1] = k;
                    }
                }
            }
        }
        return returnValue;
    }
}
