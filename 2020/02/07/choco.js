/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function(nums) {
    let allowance1 = 0;
    let test1 = true;
    const nums1 = nums.slice();
    for (let i=0; i<nums1.length-1; i++) {
        if (nums1[i] > nums1[i+1]) {
            if (allowance1 === 0) {
                nums1[i] = nums1[i+1];
                allowance1 = 1;
                i=-1;
            } else {
                test1 = false;
            }
        }
    }
    let allowance2 = 0;
    let test2 = true;
    const nums2 = nums.slice();
    for (let i=0; i<nums2.length-1; i++) {
        if (nums2[i] > nums2[i+1]) {
            if (allowance2 === 0) {
                nums2[i+1] = nums2[i];
                allowance2 = 1;
                i=-1;
            } else {
                test2 = false;
            }
        }
    }
    return test1 || test2;
};
