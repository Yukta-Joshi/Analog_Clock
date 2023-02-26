#include <stdio.h>

int main()
{
    int P, T;
    float R;

    printf("Enter principle: /n");
    scanf("%d", P);

    printf("Enter rate: /n");
    scanf("%d", T);

    printf("Enter time: /n");
    scanf("%f", R);

    float SI = (P * T * R) / 100;

    printf("SI %f", SI);

    return 0;
}