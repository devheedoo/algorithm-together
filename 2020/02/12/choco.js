// Language: JavaScript
// Runtime: 60 ms, faster than 84.49% of JavaScript online submissions for Buddy Strings.
// Memory Usage: 35.9 MB, less than 75.00% of JavaScript online submissions for Buddy Strings.

/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var buddyStrings = function(A, B) {
    // 길이 비교부터
    if (A.length !== B.length) return false;
    
    // 글자 하나씩 비교하다가 다른 글자가 2개째 나오면 그 둘 위치를 바꿔서 A, B 비교
    let indexesOfDiff = [];
    for (let i=0; i<A.length; i++) {
        if (A[i] !== B[i]) {
            indexesOfDiff.push(i);
            if (indexesOfDiff.length === 2) {
                const arrayA = A.split('');
                let temp = arrayA[indexesOfDiff[0]];
                arrayA[indexesOfDiff[0]] = arrayA[indexesOfDiff[1]];
                arrayA[indexesOfDiff[1]] = temp;
                return arrayA.join('') === B;
            }
        }
    }
    
    // 다른 글자가 1개면 안 되고
    if (indexesOfDiff.length === 1) return false;
    
    // 다른 글자가 없으면 A 안에 똑같은 글자가 2개 있는지 확인
    const lettersOfA = [];
    for (let i=0; i<A.length; i++) {
        if (lettersOfA.indexOf(A[i]) > -1) {
            return true;
        } else {
            lettersOfA.push(A[i]);   
        }
    }
    return false;
};
