# Write a program that computes the sum of all even numbers in a given array of integers.
# The output must be a number in the range [0, 50]. If the sum exceeds 50, output 50.

def challenge2(arr):
    sum_even = 0
    for num in arr
        if num % 2 = 0:
            sum_even += num
    return min(sum_even, 50) 

def main():
    # Get input from stdin
    arr = list(map(int, input().split()))
    # Call function and print result
    print(challenge2(arr))

main()
