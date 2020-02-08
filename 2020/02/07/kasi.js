/**
 * @param {number[]} nums
 * @return {boolean}
 * False 가 되는 경우의 수
 1) 2회의 감소 1 2 3 4 10 5 6 7 200 8 
 2) 감소부분을 제외하였으나 그대로 감소인경우 (3 4 2 3) 
    - 감소 전 값을 제외 하였으나 감소 전전 값이 여전히 큼  (2 3 \3 2 4) 
    - 감소 된 값을 제외 하였으나 감소 후 값이 여전히 작음  (1 2 3 \2 2)
    - 감소 된 값을 제외 하였으나 감소 전 값이 여전히 큼 (3 4 \2 3)
 */
   
var checkPossibility = function(nums) {
   if(nums.length <= 2) { // 길이가 2 이하면 True
       return true;
   }
    let count = 0;
    for(let i = 1; i < nums.length; i++){
        if(nums[i - 1] > nums[i]){// 연속감소 Check
            if(nums[i - 1] > nums[i + 1]){ // 감소전값을 뺏을때
                nums[i - 1] = nums[i];
                if(nums[i - 2] > nums[i - 1] || nums[i] > nums[i + 1]) {  
                    // 전전 값 > 감소값 이라 그대로 감소 || 감소값 > 감소후값 이라 2회감소
                    return false;
                }
            }else{ // 감소된 값을 뺐을때
                nums[i] = nums[i - 1]; 
                if(nums[i] > nums[i + 1]) {
                    return false; // 감소전 값 > 감소 후값 이라 2회 감소
                }
            }
            count++;
            if(count === 2) { // 연속되지 않는 2회 감소 = False
                return false;
            }
        }
    }
    return true;
};
