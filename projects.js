async function doThingApi(n) {
    const res = await fetch(`https://scratch.mit.edu/site-api/users/all/ko-math/`);
    return await res.text();
}

async function doThing() {
    const removeElements = document.getElementsByClassName('doThingElement');
    for (let removeElement of removeElements){
        removeElement.remove();

    }
    const count =document.getElementById('doThingCount').value;
    let doThing = await doThingApi(count);   // ★ const → let

    doThing = doThing.replaceAll(            // ★ 追加
      'href="/',
      'href="https://scratch.mit.edu/'
    );

    const wrapper = document.createElement('div');
    wrapper.classList.add('doThingElement');
    wrapper.innerHTML = doThing;
    document.getElementById('topProjectApi').appendChild(wrapper);
}



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
