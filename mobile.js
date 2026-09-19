document.getElementById('menuBtn')?.addEventListener('click',function(){document.body.classList.toggle('nav-open');});
document.getElementById('scrim')?.addEventListener('click',function(){document.body.classList.remove('nav-open');});
document.querySelector('.sidebar')?.addEventListener('click',function(e){if(e.target.closest('.nav-item'))document.body.classList.remove('nav-open');});
