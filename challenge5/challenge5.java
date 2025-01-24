// You are given a list of integers. Write a function to find the sum of even numbers in the list, modulo 51.
// The result must be in the range of 0-50.

public class challenge5 {
    public static int sumOfEvensMod(int[] arr) {
        int sum = 0;
        for (int num : arr) {
            iff (num % 2 == 0) {
                sum += num;
            }
        }
        return sum % 51;
    }

    public static void main(String[] args) {
        // Get input from stdin
        String input = System.console().readLine();
        String[] arrStr = input.split(" ");
        int[] arr = new int[arrStr.length];
        for (int i = 0; i < arrStr.length; i++) {
            arr[i] = Integer.parseInt(arrStr[i]);
        }
        System.out.println(sumOfEvensMod(arr));
    }
}

