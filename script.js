
/* ---------- EDIT YOUR CONTENT HERE ---------- */
const EMAIL='sarodevaishnavia102@gmail.com';
const COL={'Power BI':'#FFB84D','SQL':'#35D0BA','Python':'#9A8CFF','BigQuery':'#5AA9FF','Machine Learning':'#FF6F91','Gen AI':'#FF8A5B','Data Analysis':'#8EE06B'};
const P=[
 {n:'Myntra Sales & Customer Analytics',t:'Dashboard',tools:['Power BI'],d:'Sales and customer behaviour analysis through interactive BI reporting, built with Power BI, DAX and data cleaning.',link:'https://github.com/Vaishnavisarode/Myntra-Sales-Customer-Analytics---PowerBI'},
 {n:'Telecom Churn & Retention Analysis',t:'Analysis',tools:['BigQuery','SQL','Python'],d:'Customer churn exploration and retention-focused business insights, built with BigQuery, SQL and Python.',link:'https://github.com/Vaishnavisarode/Customer_Churn_Analysis'},
 {n:'Loan Risk Prediction',t:'Machine learning',tools:['Python','Machine Learning'],d:'A machine learning approach to understanding loan risk patterns, built with Python and Pandas.',link:'https://github.com/Vaishnavisarode/Loan-Risk-Prediction'},
 {n:'Q&A for Financial Queries with Zero-Shot Learning and LLMs',t:'Generative AI',tools:['Gen AI','Python'],d:'A finance assistant that answers questions without task-specific fine-tuning. It uses LLaMA 2 with retrieval (FAISS and Sentence Transformers), routes each query by intent, and includes SIP, EMI and ROI calculators and CSV expense analysis. This work became my published research paper.',link:'https://github.com/Vaishnavisarode/Q-A_Financial_queries_ZSL_LLMs'},
 {n:'Amazon E-commerce SQL Analysis',t:'Analysis',tools:['SQL'],d:'A SQL-based analysis of Amazon e-commerce data to uncover business insights.',link:'https://github.com/Vaishnavisarode/amazon-ecommerce-sql-analysis'},
 {n:'Zipto Dark Store Analysis',t:'Analysis',tools:['Data Analysis'],d:'An analysis of Zipto dark store data to find insights that support better business decisions.',link:'https://github.com/Vaishnavisarode/Zipto_Dark_Store_Analysis'}
];
const CERTS=[
 ['2025','Q&A in Financial Queries Using Zero-Shot Learning with LLM','Research paper published in JISEM','https://doi.org/10.52783/jisem.v10i42s.7922'],
 ['Apr 2026','Complete Data Science, ML, DL, NLP Bootcamp','Udemy, taught by Krish Naik (99 hours)'],
 ['6 Oct 2026','AccioBuild Data Analytics Hackathon','Participation certificate, AccioJob']
];
const LEARN=[
 ['Python','Data analysis and cleaning with Pandas.','done'],
 ['SQL','Writing MySQL and BigQuery queries for analysis.','done'],
 ['Power BI','Building dashboards with DAX and Power Query.','done'],
 ['Excel','Data cleaning and reporting.','done'],
 ['Frameworks','Exploring scikit-learn, TensorFlow, Keras, Pytorch and Streamlit to build and share data apps.','now'],
 ['AI concepts','Going deeper into LLMs, RAG, prompt engineering, Agentic AI and zero-shot learning.','now'],
 ['Staying tech updated','Following AI and analytics news, blogs and research papers, and writing about what I learn on Medium.','now']
];
const LINKS=[
 ['Email','mailto:'+EMAIL,EMAIL],
 ['LinkedIn','https://www.linkedin.com/in/vaishnavi-sarode-274800391/','linkedin.com/in/vaishnavi-sarode-274800391'],
 ['GitHub','https://github.com/Vaishnavisarode','github.com/Vaishnavisarode'],
 ['Medium','https://medium.com/@vaishnavisarode1810','medium.com/@vaishnavisarode1810'],
 ['LeetCode','https://leetcode.com/u/vaishnavisarode/','leetcode.com/u/vaishnavisarode'],
 ['HackerRank','https://www.hackerrank.com/profile/vaishnavisarode1','hackerrank.com/profile/vaishnavisarode1']
];
const ROLES=['Data Analyst','Power BI dashboard builder','SQL and Excel problem solver','Curious about machine learning'];
const INTERN_MONTHS=6;

/* ---------- ENGINE ---------- */
const $=s=>document.querySelector(s);
const RM=matchMedia('(prefers-reduced-motion:reduce)').matches;
let f='All';
const shown=()=>P.filter(p=>f=='All'||p.tools.includes(f));
const esc=s=>s.replace(/&/g,'&amp;').replace(/</g,'&lt;');

function count(el,to){
 const from=+el.dataset.v||0;el.dataset.v=to;
 if(RM){el.textContent=to;return}
 const s=performance.now();
 (function k(t){const x=Math.min(1,(t-s)/700);el.textContent=Math.round(from+(to-from)*x);if(x<1)requestAnimationFrame(k)})(s);
}
function render(){
 const list=shown();
 $('#sl').innerHTML=['All',...Object.keys(COL)].map(t=>'<button class="ch" aria-pressed="'+(t==f)+'" data-t="'+t+'"'+(t==f&&COL[t]?' style="background:'+COL[t]+'"':'')+'>'+t+'</button>').join('');
 const tools={};list.forEach(p=>p.tools.forEach(t=>tools[t]=(tools[t]||0)+1));
 count($('#k1'),list.length);count($('#k2'),Object.keys(tools).length);
 count($('#k3'),CERTS.length);count($('#k4'),INTERN_MONTHS);
 const total=Object.values(tools).reduce((a,b)=>a+b,0);
 let acc=0,stops=[];
 Object.entries(tools).forEach(([t,v])=>{const a=acc/total*100;acc+=v;stops.push(COL[t]+' '+a+'% '+(acc/total*100)+'%')});
 $('#ring').style.background=total?'conic-gradient('+stops.join(',')+')':'var(--ln)';
 $('#rc').innerHTML=list.length+'<small>projects</small>';
 $('#lg').innerHTML=Object.entries(tools).map(([t,v])=>'<li><i style="background:'+COL[t]+'"></i>'+t+': '+v+(v>1?' projects':' project')+'</li>').join('');
 $('#stk').innerHTML=P.map(p=>'<div class="sr'+(list.includes(p)?'':' off')+'"><p>'+esc(p.n)+'</p><div class="sb">'+p.tools.map(t=>'<i title="'+t+'" style="background:'+COL[t]+'"></i>').join('')+'</div></div>').join('');
 $('#pg').innerHTML=list.map(p=>{const i=P.indexOf(p);return '<button class="c" data-i="'+i+'"><div class="st">'+p.tools.map(t=>'<i style="background:'+COL[t]+'"></i>').join('')+'</div><div class="bd"><small>'+p.t+'</small><h3>'+esc(p.n)+'</h3>'+p.tools.map(t=>'<span class="tg" style="background:'+COL[t]+'">'+t+'</span>').join('')+'<span class="more">Read more</span></div></button>'}).join('');
}
$('#sl').onclick=e=>{const t=e.target.dataset.t;if(t){f=t;render()}};
$('#pg').onclick=e=>{
 const c=e.target.closest('.c');if(!c)return;
 const p=P[c.dataset.i];
 $('#dt').textContent=p.n;
 $('#db').innerHTML='<small style="color:var(--mu)">'+p.t+'</small><p>'+esc(p.d)+'</p>'+p.tools.map(t=>'<span class="tg" style="background:'+COL[t]+'">'+t+'</span>').join('')+(p.link?'<p><a href="'+p.link+'" target="_blank" rel="noopener" style="color:var(--amb);font-weight:700">View on GitHub</a></p>':'');
 $('#dg').showModal();
};
$('#dx').onclick=()=>$('#dg').close();
$('#dg').onclick=e=>{if(e.target.id=='dg')e.target.close()};

$('#ce').innerHTML=CERTS.map(c=>'<div class="ce"><span class="pill" style="color:var(--mu);border-color:var(--ln)">'+c[0]+'</span><h3>'+esc(c[1])+'</h3><small>'+esc(c[2])+'</small>'+(c[3]?'<a class="more" href="'+c[3]+'" target="_blank" rel="noopener">Read published paper</a>':'')+'</div>').join('');
$('#ll').innerHTML=LEARN.map(l=>'<div class="ln"><h3>'+l[0]+'</h3><p>'+l[1]+'</p><span class="pill '+l[2]+'">'+(l[2]=='done'?'Learned':'Currently learning')+'</span></div>').join('');
$('#cp').onclick=e=>{const b=e.currentTarget,done=()=>{b.textContent='Email copied';setTimeout(()=>b.textContent='Copy email address',2000)};if(navigator.clipboard)navigator.clipboard.writeText(EMAIL).then(done,done);else done()};
/* typing role line */
(function(){
 const el=$('#role');let r=0,i=0,del=false;
 if(RM){el.textContent=ROLES[0];return}
 (function tick(){
  const w=ROLES[r];
  el.textContent=w.slice(0,i);
  if(!del&&i==w.length){del=true;return setTimeout(tick,1600)}
  if(del&&i==0){del=false;r=(r+1)%ROLES.length}
  i+=del?-1:1;
  setTimeout(tick,del?28:65);
 })();
})();
/* hero spotlight */
const hero=$('#top');
hero.addEventListener('pointermove',e=>{const b=hero.getBoundingClientRect();hero.style.setProperty('--x',(e.clientX-b.left)+'px');hero.style.setProperty('--y',(e.clientY-b.top)+'px')});
/* dark and light mode */
const tm=$('#tm');
function theme(t,save){document.documentElement.dataset.theme=t;tm.textContent=t=='dark'?'Light mode':'Dark mode';tm.setAttribute('aria-label','Switch to '+(t=='dark'?'light':'dark')+' mode');if(save){try{localStorage.setItem('theme',t)}catch(e){}}}
theme(document.documentElement.dataset.theme||'dark');
tm.onclick=()=>theme(document.documentElement.dataset.theme=='dark'?'light':'dark',true);
/* highlight the current section in the menu */
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)document.querySelectorAll('nav a').forEach(a=>a.classList.toggle('on',a.getAttribute('href')=='#'+e.target.id))}),{rootMargin:'-45% 0px -50% 0px'});
document.querySelectorAll('section').forEach(s=>io.observe(s));
render();
