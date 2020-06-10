/**
 * @param {string} str
 * @return {number}
 */
const INT_MAX = 2**31 - 1;
const INT_MIN = -(2**31);
const NUMBERS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const isNumberCharacter = character => NUMBERS.indexOf(character) > -1;
const SPACE = ' ';
const MINUS = '-';
const PLUS = '+';

const myAtoi = function(str) {
    let pointerIndex = 0;
    
    // Find first character
    while (str[pointerIndex] === SPACE) {
        pointerIndex++;
    }
    
    // Fails if all spaces
    if (pointerIndex === str.length) return 0;
    
    const startIndex = pointerIndex;
    const firstCharacter = str[startIndex];
    
    // Fails if first character is not a number or a sign
    if (
        !isNumberCharacter(firstCharacter) &&
        firstCharacter !== MINUS &&
        firstCharacter !== PLUS
    ) return 0;
    
    // Add pointer index only if first character is a sign
    if (
        firstCharacter === MINUS ||
        firstCharacter === PLUS
    ) pointerIndex++;
    
    // Find a index of the last number character
    while (isNumberCharacter(str[pointerIndex])) {
        pointerIndex++;
    }
    const endIndex = pointerIndex;
    
    // Fails if only a sign exists
    if (
        (firstCharacter === MINUS || firstCharacter === PLUS) &&
        startIndex === endIndex - 1
    ) return 0;
    
    // Get a number
    const numberCharacters = str.slice(startIndex, endIndex);
    const number = Number(numberCharacters);
    
    // Convert if out of positive range and negative range
    if (number > INT_MAX) return INT_MAX;
    if (number < INT_MIN) return INT_MIN;
    
    return number;
};
