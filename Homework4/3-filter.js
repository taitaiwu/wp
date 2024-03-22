function filter (a,f)
{
    let i=1,m;

    for (i=0 ; i<a.lengh ; i++)
    {
        m=f(a[i]);
        if (m==1) console.log(a[i]);
    }
}

function f(x)
{
    return (x%2);
}

filter([1,2,3,4,5,6,7,8,9,10]);