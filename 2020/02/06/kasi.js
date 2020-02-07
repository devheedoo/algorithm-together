var isValid = function(s) {
    const START = ["\(","\{","\["]
    const END = ["\)","\}","\]"]
    let check = [];
    for(i=0;i<s.length;i++){
        if (START.indexOf(s[i]) >= 0 ){
            check.push(s[i]);
        } else if (START.indexOf(check.pop()) !== END.indexOf(s[i])){ 
            return false;
        }
    }
    
    /*if(check.length===0){
        return true
    }else{
        return false
    }*/
    return check.length === 0
};
