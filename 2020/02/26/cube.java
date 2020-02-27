class Solution {
    public int lengthOfLastWord(String s) {
        String [] split = s.split(" ");
        if(split.length == 0){
            return 0;
        }
        
        return split[split.length-1].length();
    }
}
