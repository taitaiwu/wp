import {sqlFetch} from '../lib/sql.js'  //從sql.j檔案加入函式

export var R = {}  //設定一個空的R串列

let _id=0, _title=1, _body=2  //設定變數的屬性

window.onhashchange = async function () 
{
  var r

  var tokens = window.location.hash.split('/')  //辨識當前網址，並用split將網址斜線的地方分割城串列
  console.log('tokens=', tokens)  //輸出tokens(串列)的值

  switch (tokens[0])  //分析第一筆傳入
  {
    case '#show':
      let r = await sqlFetch('blog', `SELECT id, title, body FROM posts WHERE id=${tokens[1]}`)  //r = 將blog的資料放入sqlFetch函式(在sql.js檔案)結果
      R.show(r[0])  //取得第一筆傳入 (雖然只會有一筆，但 SELECT 預設會傳回很多筆，所以用 results[0] 只取第一筆)
      break

    case '#new':
      R.new()  //更新R串列
      break

    default:
      let posts = await sqlFetch('blog', `SELECT id, title, body FROM posts`)  //post = 將blog的資料放入sqlFetch(在sql.js檔案)函式結果
      R.list(posts)  //R加入posts
      break
  }
}

window.onload = async function () 
{
  await sqlFetch('blog', `CREATE TABLE IF NOT EXISTS posts (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, body TEXT)`)  //將blog的資料放入sqlFetch(在sql.js檔案)函式
  window.onhashchange()
}

R.layout = function (title, content)  //把標題和留言放進函式
{
  document.querySelector('title').innerText = title  //加入標題
  document.querySelector('#content').innerHTML = content  //加入留言
}

R.list = function (posts)   //把貼文放入函式
{
  let list = []  //設定一個空的list串列

  for (let post of posts)  //一個經歷posts的迴圈
  {
    list.push
    (`
      <li>
        <h2>${post[_title]}</h2>
        <p><a id="show${post[_id]}" href="#show/${post[_id]}">Read post</a></p>
      </li>
    `)
  }

  let content = 
  `
    <h1>Posts</h1>
    <p>You have <strong>${posts.length}</strong> posts!</p>
    <p><a id="createPost" href="#new">Create a Post</a></p>
    <ul id="posts">
      ${list.join('\n')}
    </ul>
  `
  return R.layout('Posts', content)
}

R.new = function () {
  R.layout('New Post', `
  <h1>New Post</h1>
  <p>Create a new post.</p>
  <form>
    <p><input id="title" type="text" placeholder="Title" name="title"></p>
    <p><textarea id="body" placeholder="Contents" name="body"></textarea></p>
    <p><input id="savePost" type="button" value="Create"></p>
  </form>
  `)
  document.querySelector('#savePost').onclick = ()=>R.savePost()
}

R.show = function (post) {
  return R.layout(post[_title], `
    <h1>${post[_title]}</h1>
    <p>${post[_body]}</p>
  `)
}

R.savePost = async function () {
  let title = document.querySelector('#title').value
  let body = document.querySelector('#body').value
  await sqlFetch('blog', `INSERT INTO posts (title, body) VALUES ('${title}', '${body}')`)
  window.location.hash = '#list'
}
