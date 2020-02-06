/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const brackets = [];
  for (let i=0; i<s.length; i++) {
    const aLetter = s[i];
    // Being opening bracket, push it
    if (aLetter === '(' || aLetter === '[' || aLetter === '{') {
      brackets.push(aLetter);
    }
    // False if end of brackets is not equal to current closing bracket
    if ((aLetter === ')' && brackets.pop() !== '(') ||
      (aLetter === ']' && brackets.pop() !== '[') ||
      (aLetter === '}' && brackets.pop() !== '{')
    ) {
      return false;
    }
  }
  // If all matched, all opening brackets must be popped
  return brackets.length === 0;
};