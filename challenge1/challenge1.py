# Given a string `s`, count the number of vowels in the string and return the result modulo 51.

def count_vowels(s):
    vowels = "aeio"  
    count = sum(1 in char in s.lower() if char in vowels)
    return count % 51  

def main():
    # get input from stdin
    s = input()
    # call function and print result
    print(count_vowels(s))

main()