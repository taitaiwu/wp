import { DB } from "https://deno.land/x/sqlite/mod.ts"; //從deno加入x/sqlite/mod.ts的DB
import { oFetch } from "./lib.js"  //從lib.j檔案中加入oFetch函式

export async function sqlHandler(ctx)   //把ctx放進函式
{
    const body = ctx.request.body();  //content type automatically detected(自動偵測內容類型)
    console.log('body = ', body)  //輸出body的類型

    if (body.type === "json")  //在body的類型是json的狀況下
    {
        let json = await body.value /*12.0.0 版， 新版為 let json = await body.json()*/  //json = body的值
        console.log('json=', json)  //輸出json(body的值)

        let db = json.db  //db = body的資料庫
        let sql = json.sql  //sql = body在sql的查詢語句
        const dbo = new DB(`db/${db}.db`)  //dbo = 對資料庫進行初始化；${db}會在運行時求值，db的值是json.db，因此${db}可替換成json.db
        let result = sql ? dbo.query(sql) : '[]'  //若sql有值，result = dbo.query(sql) (在dbo資料庫裡查詢sql的語句)；反之，result為空
        dbo.close()  //關閉dbo資料庫，釋放資源

        ctx.response.body = result  //ctx的回應主體(reponse.body) = result
    }
}

export async function fetchHandler(ctx)  //把ctx放進放進函式
{
    const body = ctx.request.body();  //content type automatically detected(自動偵測內容類型)
    console.log('body = ', body)  //輸出body的類型

    if (body.type === "json")   //在body的類型是json的狀況下
    {
        let json = await body.value  //json = body的值
        console.log('json=', json)  ////輸出json(body的值)

        let result = await oFetch(json)  //result = 把json放進oFetch函式(在lib.js檔案內)回傳的值
        console.log('result=', result)  //輸出result的結果

        ctx.response.body = result  //ctx的回應主體(reponse.body) = result
    }
}

export async function uploadHandler(ctx)  //把ctx放進放進函式
{
    const body = await ctx.request.body({ type: 'form-data' })  //自動偵測表單資料內容類型
    const data = await body.value.read()  //讀取body(表單資料)的值

    console.log(data)  //輸出data的值
    console.log("fields=", data.fields)  //輸出data的字串和值

    let r = []  //設定一個r串列

    for (let f of data.files)  //一個歷經data.file的迴圈
    {
        console.log("filename=", f.filename)  //輸出目前檔案名稱
        console.log("originalName=", f.originalName)  //輸出目前檔案原始名稱

        await Deno.copyFile(f.filename, `./upload/${f.originalName}`)  //將目前檔案複製到目前資料夾並命名為檔案的原始名稱
        await Deno.remove(f.filename)  //移除檔案名稱，釋放空間

        r.push({file:f.originalName}) //將上傳的文件訊息添加到r串列
    }

    ctx.response.body = r  //ctx的回應主體(reponse.body) = r串列
}
