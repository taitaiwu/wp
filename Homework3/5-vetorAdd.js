function  vectorAdd(a,b)
{
    var sum=[];
    let i;

    for (i=0 ; i<3 ; i++)
    {
        sum[i]=a[i]+b[i];
    }

    console.log(sum);
}

vectorAdd([1,2,3],[4,5,6]);