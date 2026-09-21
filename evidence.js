const DATA={
performance:[
'Screenshot 2026-09-18 161553.png',
'Screenshot 2026-09-18 164229.png',
'Screenshot 2026-09-18 165102.png',
'Screenshot 2026-09-18 200445.png',
'Screenshot 2026-09-18 201156.png',
'Screenshot 2026-09-18 201818.png',
'Screenshot 2026-09-18 201834.png',
'Screenshot 2026-09-18 202347.png',
'Screenshot 2026-09-18 202421.png'
],
analytics:[
'Screenshot 2026-09-18 204207.png',
'Screenshot 2026-09-18 204247.png'
],
automation:[
'Screenshot 2026-09-18 202746.png',
'Screenshot 2026-09-18 202802.png',
'Screenshot 2026-09-18 202822.png',
'Screenshot 2026-09-18 202832.png',
'Screenshot 2026-09-18 202851.png',
'Screenshot 2026-09-18 202908.png',
'Screenshot 2026-09-18 202918.png'
],
seo:[
'Screenshot 2026-09-18 203328.png',
'Screenshot 2026-09-18 203424.png',
'Screenshot 2026-09-18 203435.png',
'Screenshot 2026-09-18 203528.png',
'Screenshot 2026-09-18 203553.png',
'Screenshot 2026-09-18 203747.png',
'Screenshot 2026-09-18 203809.png',
'Screenshot 2026-09-18 203856.png',
'Screenshot 2026-09-18 203953.png'
]};
const section=document.body.dataset.section;
const gallery=document.getElementById('gallery');
const labels={
  performance:'Paid media evidence',
  analytics:'Analytics & reporting evidence',
  automation:'Automation workflow',
  seo:'SEO visibility'
};
const label=labels[section]||'Portfolio evidence';
const files=DATA[section]||[];
const asset=f=>'assets/'+encodeURIComponent(f);
const box=document.getElementById('lightbox'),boxImg=document.getElementById('lightboxImg'),mask=document.getElementById('lightboxMask');
function openBox(src){
  boxImg.src=src;
  mask.className='';
  if(section==='performance')mask.className='lb-paid';
  if(section==='automation')mask.className='lb-auto';
  box.classList.add('open');
  document.body.style.overflow='hidden'
}
function closeBox(){box.classList.remove('open');document.body.style.overflow=''}
files.forEach((file,i)=>{
 const item=document.createElement('article');
 item.className='shot';
 item.innerHTML='<div class="shot-media"><img loading="lazy" src="'+asset(file)+'" alt="'+label+' '+(i+1)+'">'+(section==='performance'?'<div class="mask-paid"></div>':'')+(section==='automation'?'<div class="mask-auto"></div>':'')+'</div><div class="shot-caption"><strong>'+label+' '+String(i+1).padStart(2,'0')+'</strong><span>Click image for full resolution</span></div>';
 item.querySelector('.shot-media').addEventListener('click',()=>openBox(item.querySelector('img').src));
 gallery.appendChild(item);
});
document.getElementById('close').addEventListener('click',closeBox);
box.addEventListener('click',e=>{if(e.target===box)closeBox()});
addEventListener('keydown',e=>{if(e.key==='Escape')closeBox()});
const p=document.getElementById('progress'),n=document.getElementById('nav'),m=document.getElementById('menu');
function prog(){const x=document.documentElement.scrollHeight-innerHeight;p.style.width=(x?scrollY/x*100:0)+'%'}
addEventListener('scroll',prog,{passive:true});prog();
m.addEventListener('click',()=>n.classList.toggle('open'));
