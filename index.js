import{a as f,S as p,i as n}from"./assets/vendor-DvfmeZXB.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const m=f.create({baseURL:"https://pixabay.com/api/",params:{key:"53514821-85afacbf4adfab5c71570a964",image_type:"photo",orientation:"horizontal",safesearch:!0}});function g(a){return m.get("",{params:{q:a}}).then(r=>r.data)}const l=document.querySelector(".gallery"),c=document.querySelector(".loader"),y=new p(".gallery a",{captions:!0,captionsData:"alt",captionDelay:500});function h(a){const r=a.map(({webformatURL:i,largeImageURL:o,tags:e,likes:t,views:s,comments:u,downloads:d})=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${o}">
          <img class="gallery-image" src="${i}" alt="${e}" />
        </a>
        <div class="gallery-info">
          <p><b>Likes</b> ${t}</p>
          <p><b>Views</b> ${s}</p>
          <p><b>Comments</b> ${u}</p>
          <p><b>Downloads</b> ${d}</p>
        </div>
      </li>
    `).join("");l.insertAdjacentHTML("beforeend",r),y.refresh()}function b(){l.innerHTML=""}function L(){c.classList.remove("hidden")}function v(){c.classList.add("hidden")}const S=document.querySelector(".form");S.addEventListener("submit",w);function w(a){a.preventDefault();const r=a.currentTarget.elements["search-text"].value.trim();if(!r){n.warning({message:"Please enter a search word!",position:"topRight"});return}b(),L(),g(r).then(i=>{const{hits:o}=i;if(!o||o.length===0){n.info({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}h(o)}).catch(i=>{console.error(i),n.error({message:"Please try again later.",position:"topRight"})}).finally(()=>{v(),a.target.reset()})}
//# sourceMappingURL=index.js.map
