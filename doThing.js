async function doThingApi(n) {
    const res = await fetch(`https://scratch.mit.edu/messages/ajax/user-activity/?user=ko-math&max=${n}`);
    return await res.text();
}

async function doThing() {
    const removeElements = document.getElementsByClassName('doThingElement');
    for (let removeElement of removeElements){
        removeElement.remove();
    }
    
    const count =document.getElementById('doThingCount').value;
    const doThing = await doThingApi(count);
    const wrapper = document.createElement('div');
    wrapper.classList.add('doThingElement');
    wrapper.innerHTML = doThing;
    document.getElementById('doThingApi').appendChild(wrapper);
}

const inputDoThing =document.getElementById('doThingButton');
inputDoThing.addEventListener("click",doThing);


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


async function aboutMeApi() {
    const res = await fetch("https://dawn-sunset-28f6.ktomita2012.workers.dev");
    return await res.json();
}

async function aboutMe() {
    const aboutMeValue = await aboutMeApi();

let html = `
  <h1>${aboutMeValue.username}</h1><br>
  <h2>私について</h2><br>
  <p>${aboutMeValue.profile?.bio ?? ""}</p><br>
  <h2>私が取り組んでいること</h2><br>
  <p>${aboutMeValue.profile?.status ?? ""}</p>
`;

html = html.replaceAll(
  'href="/',
  'href="https://scratch.mit.edu/'
);

const wrapper = document.createElement('div');
wrapper.classList.add('aboutMe');
wrapper.innerHTML = html;

document.getElementById('aboutMeApi').appendChild(wrapper);


    document.getElementById('aboutMeApi').appendChild(wrapper);
}

aboutMe();
