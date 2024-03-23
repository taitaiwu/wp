var counter={};

function countChar(str)
{
    let i;

    for (i=0 ; i<str.length ; i++)
    {
        if (counter[str[i]]) counter[str[i]]+=1;
        else counter[str[i]]=1;
    }
    console.log (counter);
}

countChar("aabccadefaac");