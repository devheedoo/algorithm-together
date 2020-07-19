/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    const cache = new Array(n);
    for (let i=1; i<=n; i++) {
        cache[i] = -1;
    }
    cache[1] = 1;
    cache[2] = 2;
    const climbSubStairs = function(a) {
        if (cache[a] === -1) cache[a] = climbSubStairs(a-1) + climbSubStairs(a-2);
        return cache[a];
    }
    return climbSubStairs(n);
};
