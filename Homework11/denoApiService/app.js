import { Application, Router} from "https://deno.land/x/oak@v12.0.0/mod.ts" // "https://deno.land/x/oak/mod.ts";
import { oakCors } from "https://deno.land/x/cors/mod.ts";  //從deno加入x/cors/mod.ts的oakCors
import { sqlHandler, fetchHandler, uploadHandler } from './handler.js' //從handler.js檔案加入三個函式

const app = new Application()  //Application是從deno來的函式
const router = new Router()  //Router是從deno來的函式

router.post('/fetch', fetchHandler)  //把post的請求路徑設為/fetch，當對fetch發送請求時，會由fetchHandler函式處理
router.post('/sqlite', sqlHandler)  //把post的請求路徑設為/sqlite，當對fetch發送請求時，會由sqliteHandler函式處理
router.post('/upload', uploadHandler)  //把post的請求路徑設為/upload，當對fetch發送請求時，會由uploadHandler函式處理

app.use(oakCors());  //Enable CORS for All Routes(為所有路由啟用 CORS)
app.use(router.routes())  //將router的路由定義掛載到 Oak 
app.use(router.allowedMethods())  //用於處理路由中的 HTTP 方法

console.log('Server run at http://127.0.0.1:6789')  //輸出伺服器位置
await app.listen({ port: 6789 })  //監聽端口再埠號6789
