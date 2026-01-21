const pages = {
  home: `
    <h1>ホーム</h1>
    <p>ようこそ。</p>
  `,
  about: `
    <h1>学校概要</h1>
    <p>本校は〜</p>
  `,
  event: `
    <h1>行事</h1>
    <ul>
      <li>運動会</li>
      <li>文化祭</li>
    </ul>
  `,
  access: `
    <h1>アクセス</h1>
    <p>〇〇市〇〇町</p>
  `
};

function loadPage(name) {
  document.getElementById('content').innerHTML = pages[name];
}

// 初期表示
loadPage('home');
