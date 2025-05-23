// Menu Mobile
function toggleMenu() {
  const nav = document.getElementById("menu");
  nav.classList.toggle("active");
}

// Carrossel de Depoimentos (Scroll Suave)
const container = document.querySelector('.testimonial-container');

let isDown = false;
let startX;
let scrollLeft;

if (container) {
  // Drag manual
  container.addEventListener('mousedown', (e) => {
    isDown = true;
    container.classList.add('active');
    startX = e.pageX - container.offsetLeft;
    scrollLeft = container.scrollLeft;
  });

  container.addEventListener('mouseleave', () => {
    isDown = false;
    container.classList.remove('active');
  });

  container.addEventListener('mouseup', () => {
    isDown = false;
    container.classList.remove('active');
  });

  container.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - container.offsetLeft;
    const walk = (x - startX) * 2; // Velocidade de arraste
    container.scrollLeft = scrollLeft - walk;
  });

  // Scroll automático
  setInterval(() => {
    if (container.scrollWidth - container.clientWidth === container.scrollLeft) {
      container.scrollTo({ left: 0, behavior: 'smooth' });
    } else {
      container.scrollBy({ left: 320, behavior: 'smooth' });
    }
  }, 5000);
}
