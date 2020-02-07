class Solution {
    public boolean isValid(String s) {
        boolean result = false;
        int cnt = 0;
        String tempStr = s;
        String compareStr = "";
            
        if(s.length()%2 == 1){
            result = false;
        } else {
            while(true){
                tempStr = tempStr.replaceAll("\\(\\)", "");
                tempStr = tempStr.replaceAll("\\{\\}", "");
                tempStr = tempStr.replaceAll("\\[\\]", "");
                
                if(compareStr.equals(tempStr)){
                    break;
                }
                
                compareStr = tempStr;
                cnt++;
            }
            
            if("".equals(tempStr)){
                result = true;
            } else {
                result = false;
            }
        }
        return result;
    }
}
