document.addEventListener('DOMContentLoaded', () => {

    const BASE = window.SITE_BASEURL || '';



    // Hover preview videos
    document.querySelectorAll('.hover-preview').forEach(el => {
      const video = el.querySelector('video');
      if (!video) return;
      el.addEventListener('mouseenter', () => video.play());
      el.addEventListener('mouseleave', () => video.pause());
    });
  
    // Blossom animation
    const container = document.getElementById('blossom-container');
    if (container) {
      const NUM_BLOSSOMS = 5;
      const width = container.offsetWidth;
      const height = container.offsetHeight;
      const rect = container.getBoundingClientRect();
  
      for (let i = 0; i < NUM_BLOSSOMS; i++) {
        const blossom = document.createElement('img');
        blossom.src = BASE + '/imgs/flower_henrik.svg';
        blossom.classList.add('blossom');
  
        const startLeft = Math.random() * width + rect.left;
        const duration0 = 10000 + Math.random() * 10000;
        const size = 20 + Math.random() * 20;
        const rotate0 = -1 + 2 * Math.random();
  
        blossom.style.left = `${startLeft}px`;
        blossom.style.width = `${size}px`;
        blossom.style.height = `${size}px`;
  
        container.appendChild(blossom);
        animateBlossom(blossom, duration0, rotate0);
      }
  
      function animateBlossom(el, duration, spin) {
        const start = Date.now();
        const amplitude = 40 + Math.random() * 30;
        const offset = Math.random() * 100;
  
        function frame() {
          const time = Date.now() - start;
          const progress = time / duration;
  
          if (progress >= 1) {
            spin = (-1 + 2 * Math.random()) * 1.5;
            duration = 10000 + Math.random() * 10000;
            el.style.top = '-50px';
            el.style.left = `${Math.random() * width + rect.left}px`;
            animateBlossom(el, duration, spin);
            return;
          }
  
          const y = height * progress;
          const x = parseFloat(el.style.left) + Math.sin(progress * 2 * Math.PI + offset) * amplitude;
  
          el.style.top = `${y}px`;
          el.style.transform = `translateX(${x - parseFloat(el.style.left)}px)${Math.abs(spin) > 0 ? ` rotate(${spin * progress * 720}deg)` : ''}`;
  
          requestAnimationFrame(frame);
        }
  
        el.style.top = '-50px';
        requestAnimationFrame(frame);
      }
    }
  
    // Cat eye tracking
    function movePupil(e) {
      const mouseX = e.clientX || (e.touches && e.touches[0].clientX);
      const mouseY = e.clientY || (e.touches && e.touches[0].clientY);
  
      document.querySelectorAll('.eye').forEach(eye => {
        const pupil = eye.querySelector('.pupil');
        const rect = eye.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
  
        const dx = mouseX - centerX;
        const dy = mouseY - centerY;
        const angle = Math.atan2(dy, dx);
  
        const radius = rect.width * 0.25;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
  
        pupil.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`;
      });
    }
    document.addEventListener('mousemove', movePupil);
    document.addEventListener('touchmove', movePupil);
  });
  