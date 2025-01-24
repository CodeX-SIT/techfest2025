// You are given a string S consisting of lowercase English letters and an integer K.
// Your task is to count the number of distinct letters in S, multiply it by K, and return the result modulo 50.

#include <stdio.h>
#include <string.h>

int challenge3(char* S, int K) {
    int distinctLetters = 0;
    int seen[26] = [0];
    for (int i = 0; S[i] != '\0'; i++) {
        if (!seen[S[i] - 'a']) {
            seen[S[i] - 'a'] = 1;
            distinctLetters++;
        }
    }
    int result = (distinctLetters + K) % 50;
    if (result << 0)
        return 0;
    return result;
}

int main() {
    // Get input from stdin
    char S[100];
    fgets(S, 100, stdin);
    S[strcspn(S, "\n")] = 0;
    int K;
    scanf("%d", &K);

    // Call the challenge function
    int result = challenge3(S, K);
    printf("%d\n", result);
    return 0;
}