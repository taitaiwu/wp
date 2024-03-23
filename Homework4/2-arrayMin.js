function arrayMin(a)
{
    let i,min=a[0];

    for (i=1 ; i<a.length ; i++)
    {
        if (a[i]<min) min=a[i];
    }

    console.log(min);
}

arrayMin([1,2,3,4,5]);
arrayMin([25,14,67,47,99]);