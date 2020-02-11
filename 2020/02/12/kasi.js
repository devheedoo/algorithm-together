/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var buddyStrings = function(A, B) {
  if (A.length !== B.length) {
    // 길이 다르면 False
    return false;
  }
  if (A === B) {
    // 둘이 같을때 = 같은 문자 2개 없으면 False
    if (A === "") {
      return false;
    }
    for (let i = 1; i < A.length; i++) {
      if (A.indexOf(A[i], A.indexOf(A[i]) + 1) < 0) {
        return false;
      }
    }
    return true;
  } else {
    // 둘이 다를때 = 다른 부분이 3군데 이상이거나 1군데 이면 False
    // 다른 부분이 2군데 인데 다른 부분바꿔도 다르면 False
    let cnt = 0;
    let tempA = [];
    let tempB = [];
    for (let i = 0; i < A.length; i++) {
      if (A[i] !== B[i]) {
        tempA.push(A[i]);
        tempB.push(B[i]);
        cnt++;
      }
      if (cnt > 3) {
        return false;
      }
    }
    if (cnt === 1) {
      return false;
    }
    if (tempA[0] !== tempB[1] || tempA[1] !== tempB[0]) {
      return false;
    }
    return true;
  }
