(function(){
var q=document.getElementById('q');
if(q)q.addEventListener('keydown',function(e){if(e.key==='Enter'&&q.value.trim())location.href='places.html?q='+encodeURIComponent(q.value.trim())});
var cards=[].slice.call(document.querySelectorAll('#cards .card'));
if(cards.length){
 var btns=[].slice.call(document.querySelectorAll('.filters button[data-f]')),f='all',none=document.getElementById('none');
 var p=new URLSearchParams(location.search).get('q')||'';if(q)q.value=p;
 function apply(){var s=(q.value||'').trim().toLowerCase(),n=0;cards.forEach(function(c){var ok=(f==='all'||c.dataset.c.indexOf(f)>-1)&&c.textContent.toLowerCase().indexOf(s)>-1;c.hidden=!ok;if(ok)n++});none.style.display=n?'none':'block'}
 btns.forEach(function(b){b.addEventListener('click',function(){f=b.dataset.f;btns.forEach(function(x){x.setAttribute('aria-pressed',x===b)});apply()})});
 q.addEventListener('input',apply);apply();
}
var form=document.getElementById('form');
if(form)form.addEventListener('submit',function(e){e.preventDefault();var a=form.querySelectorAll('[required]');for(var i=0;i<a.length;i++)if(!a[i].value){a[i].focus();return}document.getElementById('ok').style.display='block';form.reset()});
})();
