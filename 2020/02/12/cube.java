class Solution {
    public boolean buddyStrings(String A, String B) {
        if(A.length() != B.length()){
            return false;
        }
        int cnt = 0;
        
        List<String> AList = new ArrayList<String>();
        List<String> BList = new ArrayList<String>();
        
        if(A.equals(B)){
            for(int i = 0; i < A.length(); i++){
                String Achar = A.substring(i,i+1);
                
                if(A.indexOf(Achar) != A.lastIndexOf(Achar)){
                    return true;
                }
            }
        }else{
            for(int i = 0; i < A.length(); i++){
                String Achar = A.substring(i,i+1);
                String Bchar = B.substring(i,i+1);
                
                
                if(!Achar.equals(Bchar)){
                    AList.add(Achar);
                    BList.add(Bchar);
                    cnt++;
                }
            }
            
            if(cnt == 2){
                
                if(AList.containsAll(BList))
                return true;
            }
            
        }
        return false;
    }
}
