function filter (a,f)
{
    var result=[];
    let i;

    for (i=0 ; i<a.length ; i++)
    {
        if (f(a[i])) result.push(a[i]);
    }

    console.log (result);
}

filter([1,2,3,4,5,6,7,8,97,102], function (x) { return x%2 == 1 ; });