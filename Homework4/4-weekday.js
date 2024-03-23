var num = { Sunday:"0" , Monday:"1" , Tuesday:"2" , Wednesday:"3" , Thursday:"4" , Friday:"5" , Saturday:"6"}

function weekday (str)
{
    var n=[];
    let i;

    for (i in str)
    {
        var str_word=str[i];
        var num_word=num[str_word];
        n.push(num_word);
    }
    return n;
}

console.log("weekday:", Deno.args);
var n=weekday(Deno.args);
console.log("transformed:",n);