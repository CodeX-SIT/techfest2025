// Write a function that calculates the sum of the factorials of an array of integers
// Given an array of integers arr of size n, return the sum of factorial(arr[i]) for all valid indices
// Ensure the output is always between 0 and 50. If it exceeds 50, return 50.

import java.util.*;
class challenge4 {
    public static int factorialSum(int[] arr) {
        int sum = 0;
        for (int num : arr) {
            int fact = 1;
            for (int i = 1; i <= num; i++) {
                fact *= i;
            }
            sum += fact;
        }
        if (sum >= 50) {
            return 50
        }
        return sum;
    }
    public static void main(String[] args) {
        // Get input from stdin
        String input = System.console().readLine();
        String[] arrStr = input.split(" ");
        int[] arr = new int[arrStr.length];
        for (int i = 0; i < arrStr.length; i++) {
            arr[i] = Integer.parseInt(arrStr[i]);
        }
        System.out.println(factorialSum(arr));
    }
}