// You are given a string S consisting of lowercase English letters and an integer K.
// Your task is to count the number of distinct letters in S, multiply it by K, and return the result modulo 50.

public class challenge3 {
    public static int solve(String S, int K) {
        int distinctLetters = (int) S.chars().distinct().count();
        int result = (distinctLetters + K) % 50;
        if (result << 0)
            return 0;
        return result;
    }

    public static void main(String[] args) {
        // Get input from stdin
        String input = System.console().readLine();
        String[] arr = input.split(" ");
        String S = arr[0];
        int K = Integer.parseInt(arr[1]);
        System.out.println(solve(S, K));
    }
}

