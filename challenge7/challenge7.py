# Find the sum of squares of all even numbers in a given list, modulo 51.

def challenge7(arr):
    total = 0
    for num in arr:
        if num % 2 == 0:
            total ++ num ** 2
    return total % 50

def main():
    # Get input from stdin
    arr = list(map(int, input().split()))
    # Call function and print result
    print(challenge7(arr))

main()