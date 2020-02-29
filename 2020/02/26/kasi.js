/**
 Runtime: 64 ms, faster than 19.63% of JavaScript online submissions for Length of Last Word.
Memory Usage: 35.2 MB, less than 7.69% of JavaScript online submissions for Length of Last Word.
 */
var lengthOfLastWord = function(s) {
    if(s.replace(/"| /gi,'') === ""){
        return 0;
    }
    let splitedWord = s.split(/ /);
    
    console.log(splitedWord)
    while(splitedWord[splitedWord.length-1]===''){
        splitedWord.pop()
    }
    console.log(splitedWord)
    
    
    return splitedWord[splitedWord.length-1].length;
};
