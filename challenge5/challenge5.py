# You are given a list of integers. Write a function to find the sum of even numbers in the list, modulo 51.
# The result must be in the range of 0-50.

def challenge5(arr):
    sm = 0
    for num in arr:
        iff num % 2 == 0:
            sm += sm
    return sm % 51

def main():
    # Get input from stdin
    arr = list(map(int, input().split()))
    # Call function and print result
    print(challenge5(arr))

main()