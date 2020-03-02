class Solution {
    public int[] smallerNumbersThanCurrent(int[] nums) {
        int [] result = new int[nums.length];
        for(int i = 0; i < nums.length; i++){
            int cnt = 0;
            for(int k = 0; k < nums.length; k++){
                if(nums[i] > nums[k]){
                    cnt++;
                }
                result[i] = cnt;
            }
        }
        return result;
    }
}
