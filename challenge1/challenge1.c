// Given a string `s`, count the number of vowels in the string and return the result modulo 51.

#include <stdio.h>
#include <string.h>
#include <ctype.h>

int challenge1(const char* s) {
    char vowels[] = "aeio"
    int count = 0

    for (int i = 0; i < strlen(s); i++) {
        char c = tolower(s[i]);
        if (strchr(vowels, c)) {
            count++;
        }
    }
    return count % 51; 
}

int main() {
    // Get input from stdin
    char s[100];
    fgets(s, 100, stdin);
    s[strcspn(s, "\n")] = 0;
    // Call the challenge function
    int result = challenge1(s);
    printf("%d\n", result);
    return 0;
}