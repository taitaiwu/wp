export async function oFetch(o)  //把o放進函式
    {
        let r = await fetch //await會返回fetch的值或被fetch拒絕的值；fetch是用於http內建請求之函數
        (
            o.url,  //請求的目標是URL
            {
                body: o.method == 'GET'?undefined:o.body,  //根據o的method來設定body的屬性，若是GET，body的屬性就是未定義；反之，body的屬性就是o的body
                method: o.method || 'GET',  //method的屬性是o的method(未定亦或是空的情況)或是GET
                headers: o.headers || {},  //headers的屬性是o的headers(如果不是空的)或空的
            }
        )

    if (!r.ok)  //r.ok表請求成功，因此!r.ok表示在fetch函式未請求成功(利用await函式)
    {
        console.log('webFetch:error! o=', o, 'r=', r)  //輸出webFetch:error!以及和r的值
        return null  
    }

    let text = await r.text()  //text = 在r中讀取的字串
    return text  //oFetch函式會回傳text
  }
  