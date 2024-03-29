function matrixMul(a,b)
{
    var sum=[0];
    let i,j;

    for (i=0 ; i<a[i].length ; i++)
    {
        let j;
        for (j=0 ; j<b[j].length ; j++)
        {
            sum[i][j]+=a[i][j]*b[j][i];
        }
    }
    console.log(sum);
}
matrixMul([[1,2],[6,7]],[[11,12],[16,17]]);