function lcm(a,b)
{
    console.log((a*b)/gcd(a,b));
}

function gcd(c,d)
{
    let i,max=0;

    for (i=1 ; i<=c ; i++)
    {
        if (c%i==0 && d%i==0) 
        {
            if (i>max) max=i;
        }
    }
    return max;
}

lcm(30,24);
lcm(50,17);
lcm(2,4);