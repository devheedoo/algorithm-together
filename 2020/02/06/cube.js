/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    var tempStr = s;
    var compStr = "";
    while(true){
        tempStr = tempStr.replace("\(\)", "");
        tempStr = tempStr.replace("\{\}", "");
        tempStr = tempStr.replace("\[\]", "");
        
        if(compStr === tempStr){
            break;
        }
        compStr = tempStr;
    }
    
    if("" === tempStr){
        return true;
    }
    
    return false;
};
