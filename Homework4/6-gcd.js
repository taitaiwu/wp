function gcd(a,b)
{
    let i,max=0;

    for (i=1 ; i<=a ; i++)
    {
        if (a%i==0 && b%i==0) 
        {
            if (i>max) max=i;
        }
    }
    console.log(max);
}

gcd(30,24);
gcd(50,17);
gcd(2,4);