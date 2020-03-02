/**
Runtime: 80 ms, faster than 50.85% of JavaScript online submissions for How Many Numbers Are Smaller Than the Current Number.
Memory Usage: 35.8 MB, less than 100.00% of JavaScript online submissions for How Many Numbers Are Smaller Than the Current Number.
 */
var smallerNumbersThanCurrent = function(nums) {
    temp = []
    for(i=0;i<nums.length;i++){
        let cnt=0;
        for(j=0;j<nums.length;j++){
            if(nums[i]>nums[j]){
                cnt++   
            }
        }
        temp[i] = cnt;
    }
    return temp;
};
