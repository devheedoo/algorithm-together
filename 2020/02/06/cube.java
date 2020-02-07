class Solution {
    public boolean isValid(String s) {
        boolean result = false;
        int cnt = 0;
        String tempStr = s;
            
        if(s.length()%2 == 1){
            result = false;
        } else {
            while(true){
                tempStr = tempStr.replaceAll("\\(\\)", "");
                tempStr = tempStr.replaceAll("\\{\\}", "");
                tempStr = tempStr.replaceAll("\\[\\]", "");
                
                System.out.println(tempStr);
                
                if(cnt > s.length()){
                    break;
                }
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
