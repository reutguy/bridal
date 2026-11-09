
const its=[...document.querySelectorAll('.it')],lb=document.getElementById('lb'),im=lb.querySelector('img'),c=document.getElementById('lbc');let k=0;
function show(i){k=(i+its.length)%its.length;im.src=its[k].href;c.textContent=its[k].dataset.cap||'';lb.hidden=false}
its.forEach((a,i)=>a.addEventListener('click',e=>{e.preventDefault();show(i)}));
lb.querySelector('.x').onclick=()=>lb.hidden=true;lb.querySelector('.pv').onclick=()=>show(k+1);lb.querySelector('.nx').onclick=()=>show(k-1);
lb.addEventListener('click',e=>{if(e.target===lb)lb.hidden=true});
document.addEventListener('keydown',e=>{if(lb.hidden)return;if(e.key==='Escape')lb.hidden=true;if(e.key==='ArrowLeft')show(k+1);if(e.key==='ArrowRight')show(k-1)});
let sx=0;lb.addEventListener('touchstart',e=>sx=e.touches[0].clientX);lb.addEventListener('touchend',e=>{const d=e.changedTouches[0].clientX-sx;if(Math.abs(d)>50)show(k+(d<0?1:-1))});
