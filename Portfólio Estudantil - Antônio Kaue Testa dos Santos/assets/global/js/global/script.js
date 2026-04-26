const dotsEl = document.getElementById('dots');
  for(let i=0; i<64; i++){
    const d = document.createElement('div');
    d.className='dot';
    dotsEl.appendChild(d);
  }
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const id = a.getAttribute('href');
      if(id === '#') return;
      e.preventDefault();
      document.querySelector(id)?.scrollIntoView({behavior:'smooth'});
    });
  });
