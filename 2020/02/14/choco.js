// Runtime: 40 ms, faster than 99.71% of JavaScript online submissions for House Robber.
// Memory Usage: 33.8 MB, less than 76.19% of JavaScript online submissions for House Robber.

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    // 2개까지 직접 구현
    let a = 0;
    if (nums.length === 0) return a;
    
    let b = nums[0];
    if (nums.length === 1) return b;
    
    let c = nums[0] > nums[1] ? nums[0] : nums[1];
    if (nums.length === 2) return c;
    
    // 더할 수록 커지므로 rob(numsBeforeOne) <= rob(nums)
    // 만약 numsAfterOne = [...nums, k] 라고 하면
    // rob(numsAfterOne) = MAX(rob(numsBeforeOne) + k, rob(nums))
    for (let i=2; i<nums.length; i++) {
        a = b;
        b = c ;
        c = a + nums[i] > b ? a + nums[i] : b;
    }
    return c;
};
