class Solution {
    public boolean isValid(String s) {
        boolean result = false;
        String tempStr = s;
        String compareStr = "";
            
        if(s.length()%2 == 1){
            return false;
        } else {
            while(true){
                tempStr = tempStr.replaceAll("\\(\\)", "");
                tempStr = tempStr.replaceAll("\\{\\}", "");
                tempStr = tempStr.replaceAll("\\[\\]", "");
                
                if(compareStr.equals(tempStr)){
                    break;
                }
                compareStr = tempStr;
            }
            
            if("".equals(tempStr)){
                return true;
            }
        }
        return result;
    }
}
