const pages = {
  about:`
    <iframe src="./doThing.html"></iframe>
  `,
  create: `
  
  `,
  message: `
    <h1>アクセス</h1>
    <p>〇〇市〇〇町</p>
  `
};

function loadPage(name) {
  document.getElementById('content').innerHTML = pages[name];
}

// 初期表示
loadPage('about');
