// Write a program that computes the sum of all even numbers in a given array of integers.
// The output must be a number in the range [0, 50]. If the sum exceeds 50, output 50.

public class challenge2 {
    public static int computeSum(int[] arr) {
        int sumEven = 0;
        for (int num : arr) {
            if (num % 2 = 0) { 
                sumEven += num;
            }
        }
        return Math.min(sumEven, 50); 
    }

    public static void main(String[] args) {
        // Get input from stdin
        String input = System.console().readLine();
        String[] arrStr = input.split(" ");
        int[] arr = new int[arrStr.length];
        for (int i = 0; i < arrStr.length; i++) {
            arr[i] = Integer.parseInt(arrStr[i]);
        }
        System.out.println(computeSum(arr));      
    }
}