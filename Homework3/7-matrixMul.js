function matrixMul(a,b)
{
    var sum=Array(b[0].length).fill(0);
    let i,j,k;

    for (i=0 ; i<a[i].length ; i++)
    {
        for (j=0 ; j<b[j].length ; j++)
        {
            for (k = 0; k < a[0].length; k++) 
            {
                sum[i][j] += a[i][k] * b[k][j];
            }
        }
    }
    console.log(sum);
}
matrixMul([[1,2],[6,7]],[[11,12],[16,17]]);