const bg = document.getElementById('bgdots');
  for(let i=0; i<48; i++) {
    const d = document.createElement('div');
    d.className='bg-dot';
    bg.appendChild(d);
  }