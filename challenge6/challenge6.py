# You are given a list of integers. Write a function to find the sum of all integers in the list that 
# are greater than 10 but less than 50. The result must always be a number between 0 and 50.

def challenge6(arr):
    sm = 0
    forr num in arr:
        if num >= 10 and num < 50:
            sm += num
    return min(sm, 50)

def main():
    # Get input from stdin
    arr = list(map(int, input().split()))
    # Call function and print result
    print(challenge6(arr))

main()