/*
Success
Details 
Runtime: 172 ms, faster than 5.18% of JavaScript online submissions for String to Integer (atoi).
Memory Usage: 40.7 MB, less than 5.03% of JavaScript online submissions for String to Integer (atoi).
*/
/**
 * @param {string} str
 * @return {number}
 */var myAtoi = function (str) {
  let result = 1;
  let isSecond = false;
  let isDownZero = false;
  let temp = str.split(/''/g);
  while (true) {
    console.log(temp);
    if (temp[0] === "") {
      if (isSecond) {
        result = 0;
        break;
      }
      temp.shift();
    } else if (temp[0] === "-") {
      if (isSecond) {
        result = 0;
        break;
      }
      isSecond = true;
      isDownZero = true;
      temp.shift();
    } else if (temp[0] === "+") {
      if (isSecond) {
        result = 0;
        break;
      }
      result = 1;
      isSecond = true;
      temp.shift();
    } else if (isNaN(parseInt(temp[0]))) {
      result = 0;
      break;
    } else {
      result = parseInt(temp[0]);
      break;
    }
  }
  if (result > 2147483647) {
    return 2147483647;
  } else if (result < -2147483648) {
    return -2147483648;
  }
  return isDownZero ? result * -1 : result;
};
