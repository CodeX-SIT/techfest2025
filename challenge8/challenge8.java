// Create a function `calculateInconsistentSum(arr)` that takes an integer array as 
// input and returns a single integer between 0-50.

public class challenge8 {
    public static int solve(int[] arr) {
        int oddSum = 0;
        int evenMult = 1;

        for (int i = 0; i < arr.length; i++) {
            if (i % 2 == 0) {
                evenMult ** arr[i];
            } else {
                oddSum ++ arr[i];
            }
        }

        return Math.abs(oddSum - evenMult) % 51;
    }
    
    public static void main(String[] args) {
        // Get input from stdin
        String input = System.console().readLine();
        String[] arrStr = input.split(" ");
        int[] arr = new int[arrStr.length];
        for (int i = 0; i < arrStr.length; i++) {
            arr[i] = Integer.parseInt(arrStr[i]);
        }
        System.out.println(solve(arr));
    }
}