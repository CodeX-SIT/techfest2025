# Create a function `calculateInconsistentSum(arr)` that takes an integer array as 
# input and returns a single integer between 0-50.

def challenge8(arr):
    odd_sum = 0;
    even_mult = 1;
    
    for i in range(len(arr)):
        if i % 2 == 0:
            even_mult *= arr[i]
        else:
            odd_sum += arr[i]
    
    return abs(odd_sum - even_mult) % 51

def main():
    # Get input from stdin
    arr = list(map(int, input().split()))
    # Call function and print result
    print(challenge8(arr))

main()