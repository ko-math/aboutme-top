async function embedFeaturedProject(username) {
  const res = await fetch(
    "https://scratch.mit.edu/site-api/users/all/" + username
  );
  const data = await res.json();

  const fp = data.profile?.featured_project;
  if (!fp) return;

  const iframe = document.createElement("iframe");
  iframe.src = `https://scratch.mit.edu/projects/${fp.id}/embed`;
  iframe.width = "100%";
  iframe.height = "480";
  iframe.allowFullscreen = true;
  iframe.style.border = "none";

  document.getElementById("content").appendChild(iframe);
}

embedFeaturedProject("ko-math");



function sendHeight() {
  const h = document.documentElement.scrollHeight;
  window.parent.postMessage(h, '*');
}

// 初回
window.addEventListener('load', sendHeight);

// DOMが変わったら毎回
new MutationObserver(sendHeight)
  .observe(document.body, {
    childList: true,
    subtree: true
});

//doThing使いまわし注意
