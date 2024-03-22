function gcd(a,b)
{
    let i;

    for (i=1 ; i<=a ; i++)
    {
        if (a%i==0 && b%i==0) console.log(i);
    }
}
gcd(30,24);