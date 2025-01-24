# You are given a string S consisting of lowercase English letters and an integer K.
# Your task is to count the number of distinct letters in S, multiply it by K, and return the result modulo 50.

def challenge3(S, K):
    distinct_letters = len(set(S))
    result = (distinct_letters + K) % 50
    if (result < 0)
        return 0
    return result

def main():
    # Get input from stdin
    S = input()
    K = int(input())
    # Call function and print result
    print(challenge3(S, K))

main()