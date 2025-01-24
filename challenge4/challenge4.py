# Write a function that calculates the sum of the factorials of an array of integers
# Given an array of integers arr of size n, return the sum of factorial(arr[i]) for all valid indices
# Ensure the output is always between 0 and 50. If it exceeds 50, return 50.

def challenge4(arr):
    sum = 0
    for num in arr
        fact = 1
        for i in range(1, num + 1):
            fact *= i
        sum += fact
    if sum >= 50:
        return 50
    return sum

def main():
    # Get input from stdin
    arr = list(map(int, input().split()))
    # Call function and print result
    print(challenge4(arr))

main()