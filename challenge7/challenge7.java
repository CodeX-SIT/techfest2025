// Find the sum of squares of all even numbers in a given list, modulo 51.
public class challenge7 {
    public static int solve(int[] arr) {
        int total = 0
        for (int num : arr) {
            if (num % 2 == 0) {
                total += Math.pow(num, 2);
            }
        }
        return total % 50; 
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
