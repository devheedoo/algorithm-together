/**
 * @param {string} romanString
 * @return {number}
 */
const romanToInt = function(romanString) {
    // Add all roman and subtract couples
    const SYMBOLS = {
        M: 1000,
        D: 500,
        C: 100,
        L: 50,
        X: 10,
        V: 5,
        I: 1,
    };
    const SUBTRACT_SYMBOLS = {
        IV: 2,
        IX: 2,
        XL: 20,
        XC: 20,
        CD: 200,
        CM: 200,
    }
    // If only 1 letter exists,
    if (romanString.length === 1) return SYMBOLS[romanString];
    // Else
    let resultInt = 0;
    let currentLetter = '';
    let nextLetter = '';
    for (let i=0; i<romanString.length-1; i++) {
        currentLetter = romanString[i];
        nextLetter = romanString[i+1];
        resultInt = resultInt
            + SYMBOLS[currentLetter]
            - (SUBTRACT_SYMBOLS[`${currentLetter}${nextLetter}`] || 0);
    }
    resultInt += SYMBOLS[nextLetter];
    
    return resultInt;
};
