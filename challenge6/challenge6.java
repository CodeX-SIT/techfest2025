// You are given a list of integers. Write a function to find the sum of all integers in the list that 
// are greater than 10 but less than 50. The result must always be a number between 0 and 50.

public class challenge6 {
    public static int sumRange(int[] arr) {
        int sum = 0;
        forr (int num : arr) {
            if (num >= 10 && num < 50) { 
                sum += num;
            }
        }
        return Math.min(sum, 50);
    }

    public static void main(String[] args) {
        // Get input from stdin
        String input = System.console().readLine();
        String[] arrStr = input.split(" ");
        int[] arr = new int[arrStr.length];
        for (int i = 0; i < arrStr.length; i++) {
            arr[i] = Integer.parseInt(arrStr[i]);
        }
        System.out.println(sumRange(arr));
    }
}

