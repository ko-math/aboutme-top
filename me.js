const pages = {
  about:`
    <iframe src="./doThing.html"></iframe>
  `,
  top: `
  <h1>My projects</h1>
   <iframe src="./topProjects.html"></iframe>
  `,
  message: `
    <h1>message</h1>
  `
};

function loadPage(name) {
  document.getElementById('content').innerHTML = pages[name];
}

// 初期表示
loadPage('about');
