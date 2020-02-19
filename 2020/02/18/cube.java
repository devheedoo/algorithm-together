class Solution {
    public boolean isPalindrome(int x) {
        if(x < 0){
            return false;
        }
        
        String str = String.valueOf(x);
        
        int left = 0;
        int right = str.length();
        
        String [] temp = str.split("");
        
        while(true){
            if(left >= right){
                break;
            }
            if(!temp[left].equals(temp[right-1])){
                return false;
            }
            left++;
            right--;
        }
        
        return true;
    }
}
