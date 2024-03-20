function sumPrime(n)
{
    let i,j,k,sum=0;
    for (i=2 ; i<=n ; i++)
    {
        k=0;
        for (j=2 ; j<i ; j++)
        {
            if (i%j==0)
            {
                k=1;
                break;
            }
        }
        if (k==0) sum=sum+i;
    }
    console.log(sum);
}
sumPrime(100);