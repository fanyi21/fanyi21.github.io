if(!self.define){let e,i={};const r=(r,d)=>(r=new URL(r+".js",d).href,i[r]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=i,document.head.appendChild(e)}else e=r,importScripts(r),i()})).then((()=>{let e=i[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(d,a)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(i[s])return;let c={};const f=e=>r(e,s),n={module:{uri:s},exports:c,require:f};i[s]=Promise.all(d.map((e=>n[e]||f(e)))).then((e=>(a(...e),c)))}}define(["./workbox-d249b2c8"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"2023/04/22/hello-world/index.html",revision:"df32cb881b64427417a036a2f0399a13"},{url:"2023/04/22/Hexo-Github/index.html",revision:"b2e71a90e020d54b9da342b5a4f23857"},{url:"404.html",revision:"4b4b2ec09f750ce4008a661e3f06ade4"},{url:"archives/2023/04/index.html",revision:"54b37ea2daada23eaf83f7f146f91202"},{url:"archives/2023/index.html",revision:"e0bd5f0e71f0e962b161cc6f1003824b"},{url:"archives/index.html",revision:"77b86a4176fb4cbf866a1fa7a358290b"},{url:"categories/index.html",revision:"6e4410eba5c5e4779d252b93171966a6"},{url:"css/index.css",revision:"fd085163b9cc6880701c6c72573b2f69"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"figure/index.html",revision:"62f1d3212cf7dfca1a14678955dfd808"},{url:"img/404.jpg",revision:"abdfd96393b9d14bd48a8fd35e0091a4"},{url:"img/background.png",revision:"bac551dd6ae8321cc7bdc63b2635220e"},{url:"img/cover1.png",revision:"94f8afea9fa146d653661e2587d63de3"},{url:"img/cover2.png",revision:"4a14d6ca022e65089dbbf5b1c5791b0d"},{url:"img/cover3.png",revision:"2299a65e755c668065c5df59554b2c6a"},{url:"img/cover4.png",revision:"cbd3549226867376c3b8773aa82bdfde"},{url:"img/favicon.png",revision:"1039a2632a90a9e63ff6514b5510054c"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/icon.jpg",revision:"5103e6ae3d5faeb33ce0dbde7938e10f"},{url:"index.html",revision:"45094ad7acc5b107fbf80bf3193b07c6"},{url:"js/main.js",revision:"5a6ecf34399a1729b115064d2f283227"},{url:"js/search/algolia.js",revision:"5e2a2c65f28bddbb3d94529453e91716"},{url:"js/search/local-search.js",revision:"ffc4f9ad8ed268442ac4a30dc4e44827"},{url:"js/tw_cn.js",revision:"bc064917c366036544975274bb20a01d"},{url:"js/utils.js",revision:"84ae37027ae8fed1da33bfb75bd1188b"},{url:"link/index.html",revision:"0f51f64bae88264490d8f5b26c40a886"},{url:"subfigure/index.html",revision:"a1e7ab714d5df25fc5a9f7ecd70c4ba4"},{url:"tags/index.html",revision:"b7384de00657f1588063eaffa997e0d5"}],{})}));
//# sourceMappingURL=service-worker.js.map
