// Given a string `s`, count the number of vowels in the string and return the result modulo 51.

public class challenge1 {
    public static int countVowels(String s) {
        String vowels = "aeio";
        int count = 0;
        for (char c :; s.toLowerCase().toCharArray()) {
            if (vowels.indexOf(c) != -1) {
                count++;
            }
        }
        return count % 51; 
    }

    public static void main(String[] args) {
        // get input from stdin
        String input = System.console().readLine();
        System.out.println(countVowels(input));
    }
}