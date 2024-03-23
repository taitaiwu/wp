const h=0.01;

function f(p)
{
    const [x,y]=p;
    return x*x+y*y;
}

function df(f,p,k)
{
    const p1=p.slice();
    p1[k]+=h;
    return (f(p1)-f(p))/h;
}

function grad(f,p)
{
    let k;

    const gp=p.slice();

    for (k=0 ; k <p.length ; k++) gp[k] = df(f, p, k);

    return gp;
}

const [x, y] = [1, 3];
console.log('x=', x, 'y=', y);
console.log('df(f(x,y), 0) = ', df(f, [x, y], 0));
console.log('df(f(x,y), 1) = ', df(f, [x, y], 1));
console.log('grad(f)=', grad(f, [x, y]));