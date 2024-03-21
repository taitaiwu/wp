function matrixAdd(a,b)
{
    var sum=[];
    let i,j;

    for (i=0 ; i<a.length || i<b.length ; i++)
    {
        sum[i]=[];
        for (j=0 ; j<a[i].length || j<b[i].length ; j++)
        {
            sum[i][j]=a[i][j]+b[i][j];
        }
    }
    console.log(sum);
}
matrixAdd([[1,2,3,4,5],[6,7,8,9,10]],[[11,12,13,14,15],[16,17,18,19,20]]);