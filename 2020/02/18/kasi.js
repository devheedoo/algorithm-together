/**
 Runtime: 200 ms, faster than 58.99% of JavaScript online submissions for Palindrome Number.
Memory Usage: 44.7 MB, less than 98.28% of JavaScript online submissions for Palindrome Number.
 */
 
var isPalindrome = function(x) {
    if (x < 0) return false;
    if (x < 10) return true;
    if (x % 10 === 0) return false;
    let newx = 0;
    while(newx < x){
        newx*=10;
        newx+=x%10;
        x = Math.floor(x/10);
    }
    return ( x === newx || x === Math.floor(newx/10));
};
