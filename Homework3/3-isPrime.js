function isPrime(n)
{
    let i,j=1;
    for (i=2 ; i<n ; i++)
    {
        if (n%i==0)
        {
            j=0;
            console.log(n,"is not a prime number.");
            break;
        }
    }
    if (j==1) console.log(n,"is a prime number.")
}
isPrime(100);
isPrime(2);