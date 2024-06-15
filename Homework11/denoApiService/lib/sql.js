let sqlUrl = "http://localhost:6789/sqlite" //設定sqlUrl = localhost埠號6789的sqlite

export async function sqlFetch(db, cmd)  //將db和cmd放入函式
{
    let r = await fetch  //await會返回fetch的值或被fetch拒絕的值；fetch是用於http內建請求之函數
    (
        sqlUrl, //請求目標是sqlUrl
        {
            body: JSON.stringify({db:db, sql:cmd}),  //body的屬性透過stringify函式將JavaScript物件轉換為JSON(db對db；sql對cmd)
            method: 'POST',  //將包含在主體中的數據提交給目標服務器
            headers: 
            {
                'Content-Type': 'application/json'  //指定請求的header是json
            }
        }
    )

    if (!r.ok)  //r.ok表請求成功，因此!r.ok表示在fetch函式未請求成功(利用await函式)
    {
        console.log('sqlFetch:error! cmd=', cmd)  //輸出sqlFetch:error!和cmd的值
        return null
    }

    let obj = await r.json()  //obj = r轉換成json的數據
    console.log('obj=', obj)  //輸出obj的值
    return obj  //回傳obj的值
}