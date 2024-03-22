function daysInYear(n)
{
    if (n%4==0)
    {
        if (n%100==0)
        {
            if (n%400==0)
            {
                console.log(n,"has 366 days.");
            }
            else console.log(n,"has 365 days");
        }
        else console.log(n,"has 366 days.");
    }
    else console.log(n,"has 365 days");
}

daysInYear(2004);
daysInYear(2000);
daysInYear(1991);