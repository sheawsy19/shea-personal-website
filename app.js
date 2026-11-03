'use strict';
const projects = [
  {
    "id": "grape-house",
    "title": "葡萄房子",
    "en": "GRAPE HOUSE",
    "category": "visual",
    "type": "包装设计",
    "bg": "#ede8df",
    "className": "portrait-work",
    "images": [
      "grape-structure",
      "grape-visual"
    ],
    "role": "团队创作 · 包装设计 · 地域文化的当代表达",
    "description": "将新疆葡萄晾房与葡萄纹样的传统文化融入现代葡萄包装。选用可降解瓦楞纸，实现抗震、透气与环保；以侧面打开、抽拉式拿取的结构，还原葡萄从树上采摘的自然语境。盒身的葡萄科普插画帮助辨认正常白霜与变质霉斑，减少浪费，守卫食品安全。",
    "extra": "选取无核白、玻璃脆、黑美人三种吐鲁番葡萄，将传统葡萄纹样转译为像素图形，并延展为异形信息吊牌、信封与文化介绍卡片，让包装兼具产品识别、互动体验与文化传播的作用。",
    "award": "第十八届中国之星设计奖 · 包装设计银奖；第四届 XJ-STAR 新疆之星设计奖 · 优秀奖",
    "note": "作者：王思雅、左爱萍、欧涵琪。指导老师：杨蕾。",
    "authorship": "团队创作",
    "concept": "地域文化的当代表达"
  },
  {
    "id": "sealink",
    "title": "SeaLink",
    "en": "OCEAN-FRIENDLY REFILL TRAVEL KIT",
    "category": "visual",
    "type": "产品设计",
    "bg": "#e4edf0",
    "className": "wide-work",
    "images": [
      "sealink"
    ],
    "role": "团队创作 · 产品设计 · 可持续环保设计",
    "description": "面向旅行场景的海洋友好可补充洗护套装。通过可重复使用的模块化硅胶瓶身，回应一次性旅行洗护用品造成的塑料浪费，并兼顾便携、防漏与灵活组合的使用体验。",
    "extra": "海洋生物图形将独立瓶体连接成完整画面；卡扣组合、宽口补充与精准出液设计，分别回应携带、补充和使用环节。配套漫画手册以海洋塑料污染为主题，延展产品的环保表达。",
    "note": "团队作品，王思雅为第一顺序作者。",
    "authorship": "团队创作",
    "concept": "可持续环保设计"
  },
  {
    "id": "poetry",
    "title": "让诗歌，成为形状",
    "en": "TYPOGRAPHIC POETRY",
    "category": "visual",
    "type": "平面海报",
    "bg": "#e8e8e5",
    "className": "series-work",
    "images": [
      "poem-1",
      "poem-2",
      "poem-3"
    ],
    "role": "个人创作 · 平面海报 · 诗歌创意视觉设计",
    "description": "以诗歌文字为素材，探索汉字在阅读之外的视觉表达。通过字号、疏密、重复、方向与留白，让文字形成月亮、水流、人群与涌出的形态，将阅读的情绪转化为画面的节奏。",
    "note": "诗歌并非王思雅创作；王思雅负责文字视觉设计、排版与图形化表达。",
    "authorship": "个人创作",
    "concept": "诗歌创意视觉设计"
  },
  {
    "id": "sonic-archives",
    "title": "朝阳医疗噪声档案",
    "en": "SONIC ARCHIVES OF CHAOYANG HEALTHCARE",
    "category": "digital",
    "type": "信息可视化",
    "bg": "#f1e8ee",
    "className": "wide-work",
    "images": [
      "sonic-archives"
    ],
    "role": "团队创作 · 信息可视化 · 让医疗环境的声音被看见",
    "description": "基于北京朝阳区五家医院的实地声音采集与研究，以“声音档案”的形式组织门诊大厅、急诊输液室、护士站、诊室等候区等场景的声景。将分贝值、人流量、空间与情感体验转化为可阅读的视觉证据。",
    "extra": "以环形图、热力图、折线图与散点图呈现不同医院与区域的噪声特征，尝试让持续存在、却容易被忽略的医疗环境压力被看见。",
    "authorship": "团队创作",
    "concept": "让医疗环境的声音被看见"
  },
  {
    "id": "combat-crusher",
    "title": "战斗粉碎机",
    "en": "COMBAT CRUSHER",
    "category": "3d",
    "type": "3D场景建模",
    "bg": "#d9dcdd",
    "className": "wide-work",
    "images": [
      "combat-crusher"
    ],
    "role": "个人创作 · 3D场景建模 · 机械结构与硬表面造型",
    "description": "围绕机械结构与装甲载具展开的硬表面建模作品。通过整体造型、三视角展示与局部结构细节，呈现履带、车体、武器部件之间的层次与构造。",
    "note": "以高模展示为主，包含三视角与机械结构细节。",
    "authorship": "个人创作",
    "concept": "机械结构与硬表面造型"
  },
  {
    "id": "wasteland-suv",
    "title": "废土探索 SUV",
    "en": "WASTELAND EXPLORATION SUV",
    "category": "3d",
    "type": "3D场景建模",
    "bg": "#dbdbd9",
    "className": "wide-work",
    "images": [
      "suv-05",
      "suv-02",
      "suv-03"
    ],
    "role": "个人创作 · 3D场景建模 · 废土载具的结构与质感",
    "description": "腾讯实习期间制作的载具作品，以越野车的结构、磨损与材质层次表现废土探索的使用痕迹。通过多个视角呈现车体比例、外部配件与表面质感。",
    "note": "三个视角来自同一辆载具。画面为 Unreal Engine 中的展示。",
    "authorship": "个人创作",
    "concept": "废土载具的结构与质感"
  },
  {
    "id": "popmart",
    "title": "拥抱带刺的你",
    "en": "POP MART · ZSIGA",
    "category": "visual",
    "type": "平面海报",
    "bg": "#eee9e0",
    "className": "series-work",
    "images": [
      "popmart-1",
      "popmart-2",
      "popmart-3"
    ],
    "role": "团队创作 · 平面海报 · 拥抱带刺的个性与成长",
    "description": "以泡泡玛特 Zsiga 为主题的手绘海报系列，将角色绘制与真实校园场景结合。用樱花、跑道与骑行等日常画面，表达“美梦成真，拥抱烂漫”“加速生长，拥抱倔强”与“从0开始，拥抱自由”。",
    "note": "品牌角色主题创作。角色原始设定归原权利方所有。",
    "authorship": "团队创作",
    "concept": "拥抱带刺的个性与成长"
  },
  {
    "id": "care",
    "title": "看见她，自由而强大",
    "en": "PUBLIC WELFARE POSTER DESIGN",
    "category": "visual",
    "type": "平面海报",
    "bg": "#eee5e5",
    "className": "series-work",
    "images": [
      "care-1",
      "care-2",
      "care-3"
    ],
    "role": "个人创作 · 平面海报 · 看见更年期女性的力量",
    "description": "以关爱更年期女性为主题的公益海报设计。将日常人物影像与手绘文字、涂鸦、鲜明色彩结合，回应围绕更年期女性的偏见、身体变化与被忽视的付出。",
    "extra": "“当大妈有什么不好？”“大步向前吧”“她们也需要爱”构成三个彼此呼应的表达，倡导理解、尊重与支持。",
    "authorship": "个人创作",
    "concept": "看见更年期女性的力量"
  },
  {
    "id": "editorial",
    "title": "让内容，也有自己的声音",
    "en": "EDITORIAL & SOCIAL CONTENT",
    "category": "digital",
    "type": "公众号视觉设计",
    "bg": "#e3e9e5",
    "className": "wide-work",
    "images": [
      "social-headers",
      "social-profile",
      "social-dschool"
    ],
    "role": "个人创作 · 公众号视觉设计 · 让图文内容有自己的声音",
    "description": "面向中国传媒大学学生会及设计思维相关公众号的视觉与内容作品。包含活动头图、人物内容推送、课程展示与招生信息等，在不同主题中组织图文层级，建立内容的识别度与传播节奏。",
    "authorship": "个人创作",
    "concept": "让图文内容有自己的声音"
  },
  {
    "id": "barrel",
    "title": "木桶",
    "en": "WOODEN BARREL · FULL PIPELINE",
    "category": "3d",
    "type": "3D场景建模",
    "bg": "#e4ded2",
    "className": "wide-work",
    "images": [
      "barrel"
    ],
    "role": "个人创作 · 3D场景建模 · 木与金属的材质表达",
    "description": "场景建模方向最早期的全流程作品之一。从基础形体到木纹、金属箍与表面磨损，练习道具造型、雕刻、贴图烘焙、材质制作与最终展示，建立对完整制作流程的理解。",
    "authorship": "个人创作",
    "concept": "木与金属的材质表达"
  },
  {
    "id": "jinx",
    "title": "Jinx · Bomb Maniac",
    "en": "3D CHARACTER MODELING",
    "category": "3d",
    "type": "3D角色建模",
    "bg": "#e7ded0",
    "className": "wide-work",
    "images": [
      "jinx"
    ],
    "role": "个人创作 · 3D角色建模 · 从角色原画到立体表达",
    "description": "以 Jinx 为对象的早期3D角色制作练习，通过整体造型、角色比例、服饰与道具的细节，探索二维角色向三维空间的转化。",
    "note": "基于既有角色的建模练习。Jinx 角色原始设定 © Riot Games。",
    "authorship": "个人创作",
    "concept": "从角色原画到立体表达"
  },
  {
    "id": "demon",
    "title": "Demon Enchantress",
    "en": "3D CHARACTER MODELING",
    "category": "3d",
    "type": "3D角色建模",
    "bg": "#dadce5",
    "className": "portrait-work",
    "images": [
      "demon"
    ],
    "role": "个人创作 · 3D角色建模 · 角色形体与材质探索",
    "description": "另一件早期3D角色建模作品，围绕角、发型、面部与配饰的造型关系，练习角色形体、表面材质与灯光展示。",
    "note": "根据原画参考进行的早期角色建模练习。",
    "authorship": "个人创作",
    "concept": "角色形体与材质探索"
  },
  {
    "id": "vehicle-tricycle",
    "title": "旧三轮载具",
    "en": "VEHICLE MODELING STUDY",
    "category": "3d",
    "type": "3D场景建模",
    "bg": "#dfe3dd",
    "className": "wide-work",
    "images": [
      "vehicle-tricycle"
    ],
    "role": "个人创作 · 3D场景建模 · 旧载具的使用痕迹",
    "description": "以旧三轮载具的车头部分为主要展示内容，表现车体结构、玻璃破损、漆面锈蚀与长期使用的表面痕迹。通过三个观察角度，呈现造型与材质细节。",
    "authorship": "个人创作",
    "concept": "旧载具的使用痕迹"
  }
];
const asset = id => `assets/${id}.webp`;
const grid=document.querySelector('#project-grid');
let activeFilter='all',currentProject=null,dialogReturnFocus=null,toastTimer;
const dialog=document.querySelector('.project-dialog');
const content=dialog.querySelector('.dialog-content');
const reducedMotion=matchMedia('(prefers-reduced-motion: reduce)').matches;
const finePointer=matchMedia('(hover:hover) and (pointer:fine)').matches;

function renderProjects(){
 grid.innerHTML=projects.map((p,i)=>`<article class="project-card ${p.className}" data-category="${p.category}"><button class="project-button" data-project="${p.id}" aria-label="查看${p.title}作品详情"><div class="project-image" style="--project-bg:${p.bg}"><span class="image-index">${String(i+1).padStart(2,'0')} / ${p.type}</span><div class="project-preview">${(p.className==='series-work'?p.images:p.images.slice(0,1)).map(img=>`<img src="${asset(img+'-thumb')}" alt="${p.title}作品展示" width="1400" height="1000" loading="lazy">`).join('')}</div><span class="image-open" aria-hidden="true">↗</span></div><div class="project-caption"><div><h3>${p.title}</h3></div></div><p class="project-role"><span class="caption-authorship">${p.authorship}</span><span class="caption-separator" aria-hidden="true"> · </span><span class="caption-medium">${p.type}</span><span class="caption-separator" aria-hidden="true"> · </span><span class="caption-concept">${p.concept}</span></p></button></article>`).join('');
}
renderProjects();

document.querySelectorAll('[data-filter]').forEach(button=>button.addEventListener('click',()=>{
  activeFilter=button.dataset.filter;
  document.querySelectorAll('[data-filter]').forEach(b=>{const active=b===button;b.classList.toggle('active',active);b.setAttribute('aria-pressed',String(active));});
  let count=0;
  grid.querySelectorAll('.project-card').forEach(card=>{card.hidden=activeFilter!=='all'&&card.dataset.category!==activeFilter;if(!card.hidden)count++;});
  document.querySelector('.work-status').textContent=`已显示 ${count} 个${button.textContent.replace(/\d/g,'').trim()}作品`;
}));
document.querySelectorAll('[data-view]').forEach(button=>button.addEventListener('click',()=>{
  grid.classList.toggle('list-view',button.dataset.view==='list');
  document.querySelectorAll('[data-view]').forEach(b=>{const active=b===button;b.classList.toggle('active',active);b.setAttribute('aria-pressed',String(active));});
}));

function showDialog(){
 if(!dialog.open){dialogReturnFocus=document.activeElement;dialog.showModal();document.body.classList.add('dialog-open');}
 dialog.scrollTop=0;
 document.querySelector('.hover-cursor').classList.remove('visible');
}
function openProject(id){
 const p=projects.find(p=>p.id===id);if(!p)return;
 currentProject=id;
 content.innerHTML=`<span class="eyebrow">${p.type}</span><h2 id="dialog-title">${p.title}</h2><p class="dialog-subtitle">${p.en}</p><div class="project-facts"><span>${p.role}</span><span>${p.images.length} 张作品图</span></div><div class="project-prose"><p>${p.description}</p>${p.extra?`<p>${p.extra}</p>`:''}</div>${p.award?`<p class="dialog-award">${p.award}</p>`:''}${p.note?`<p class="authorship-note">${p.note}</p>`:''}<div class="gallery-topline"><span>完整作品 / PROJECT GALLERY</span><span>点击图片可放大 ↗</span></div><div class="dialog-images">${p.images.map((img,i)=>`<figure><a href="${asset(img)}" target="_blank" rel="noopener" aria-label="放大查看${p.title}第 ${i+1} 张高清图"><img src="${asset(img)}" alt="${p.title} · 作品 ${i+1}" loading="lazy"></a><figcaption>${String(i+1).padStart(2,'0')} / ${String(p.images.length).padStart(2,'0')}<a href="${asset(img)}" target="_blank" rel="noopener">放大查看高清图 ↗</a></figcaption></figure>`).join('')}</div><div class="dialog-end"><p>每一次创作，都是一次新的探索。</p><button class="next-project">下一个作品 ↗</button></div>`;
 content.querySelector('.next-project').addEventListener('click',()=>{const filtered=projects.filter(x=>activeFilter==='all'||x.category===activeFilter);const index=filtered.findIndex(x=>x.id===currentProject);openProject(filtered[(index+1)%filtered.length].id);});
 showDialog();
}
document.querySelectorAll('[data-open-project]').forEach(a=>a.addEventListener('click',e=>{e.preventDefault();openProject(a.dataset.openProject);}));

grid.addEventListener('click',event=>{const b=event.target.closest('[data-project]');if(b)openProject(b.dataset.project);});
document.querySelectorAll('[data-certificate]').forEach(button=>button.addEventListener('click',()=>{
 content.innerHTML=`<h2 id="dialog-title">${button.dataset.award}</h2><p class="dialog-subtitle">RECOGNITION / 获奖证书</p><p class="authorship-note">获奖证明完整展示；团队作品以证书中的作者署名为准。</p><div class="dialog-images"><a href="${asset(button.dataset.certificate)}" target="_blank" rel="noopener" aria-label="放大查看获奖证明"><img src="${asset(button.dataset.certificate)}" alt="${button.dataset.award}获奖证明"></a></div><p class="certificate-help">点击图片可在新窗口放大查看。</p>`;
 showDialog();
}));
dialog.querySelector('.dialog-close').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',event=>{if(event.target===dialog){const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)dialog.close();}});
dialog.addEventListener('close',()=>{document.body.classList.remove('dialog-open');dialogReturnFocus?.focus({preventScroll:true});});

const menu=document.querySelector('#mobile-nav');
const menuButton=document.querySelector('.menu-toggle');
function setMenu(open){menu.hidden=!open;menuButton.setAttribute('aria-expanded',String(open));menuButton.querySelector('span').textContent=open?'Close':'Menu';document.body.classList.toggle('menu-open',open);}
menuButton.addEventListener('click',()=>setMenu(menu.hidden));
menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>setMenu(false)));
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!menu.hidden){setMenu(false);menuButton.focus();}});
matchMedia('(min-width:701px)').addEventListener('change',e=>{if(e.matches)setMenu(false);});

function toast(message){const el=document.querySelector('.toast');el.textContent=message;el.classList.add('visible');clearTimeout(toastTimer);toastTimer=setTimeout(()=>el.classList.remove('visible'),2800);}
document.querySelectorAll('[data-copy]').forEach(button=>button.addEventListener('click',async()=>{
 const value=button.dataset.copy;
 try{
   if(navigator.clipboard&&window.isSecureContext){await navigator.clipboard.writeText(value);}
   else {const input=document.createElement('textarea');input.value=value;input.style.cssText='position:fixed;left:-1000px';document.body.append(input);input.select();const ok=document.execCommand('copy');input.remove();if(!ok)throw new Error('Copy unavailable');button.focus();}
   toast('微信号已复制：'+value);
 }catch{toast('微信号：'+value+'，请长按或手动复制');}
}));

function updateClock(){document.querySelector('#beijing-time').textContent=new Intl.DateTimeFormat('en-GB',{timeZone:'Asia/Shanghai',hour:'2-digit',minute:'2-digit',hour12:false}).format(new Date());}
updateClock();setInterval(updateClock,30000);
document.querySelector('#copyright-year').textContent=new Intl.DateTimeFormat('en',{year:'numeric',timeZone:'Asia/Shanghai'}).format(new Date());
if(!reducedMotion){
 document.documentElement.classList.add('js-motion');
 const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('in-view');observer.unobserve(entry.target);}}),{threshold:.08});
 document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
}
let scrollTick=false;
function onScroll(){
 if(scrollTick)return;scrollTick=true;
 requestAnimationFrame(()=>{
  const range=document.documentElement.scrollHeight-innerHeight;
  document.querySelector('.scroll-progress').style.width=`${range>0?scrollY/range*100:0}%`;
  if(!reducedMotion&&finePointer){const title=document.querySelector('.hero h1>span');title.style.transform=`translateX(${-scrollY*.055}px)`;}
  scrollTick=false;
 });
}
addEventListener('scroll',onScroll,{passive:true});
if(finePointer&&!reducedMotion){
 const cursor=document.querySelector('.hover-cursor');
 grid.addEventListener('pointermove',e=>{cursor.style.left=e.clientX+'px';cursor.style.top=e.clientY+'px';cursor.classList.toggle('visible',!!e.target.closest('.project-image'));});
 grid.addEventListener('pointerleave',()=>cursor.classList.remove('visible'));
 document.querySelectorAll('.magnetic').forEach(el=>{
  el.addEventListener('pointermove',e=>{const r=el.getBoundingClientRect();const x=e.clientX-r.left-r.width/2,y=e.clientY-r.top-r.height/2;el.style.transform=`translate(${x*.16}px,${y*.16}px)`;});
  el.addEventListener('pointerleave',()=>{el.style.transition='transform .45s cubic-bezier(.2,.8,.2,1)';el.style.transform='translate(0,0)';setTimeout(()=>el.style.removeProperty('transition'),450);});
 });
}

