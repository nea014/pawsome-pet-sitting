// ===== Mobile Nav Toggle =====
const hamburger = document.getElementById('hamburger');
const mainNav = document.getElementById('main-nav');

hamburger.addEventListener('click', () => {
  mainNav.classList.toggle('open');
});

mainNav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => mainNav.classList.remove('open'));
});

// ===== Gallery Filter =====
const filterBtns = document.querySelectorAll('.filter-btn');
const galleryItems = document.querySelectorAll('.gallery-item');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;

    galleryItems.forEach(item => {
      const show = filter === 'all' || item.dataset.cat === filter;
      item.classList.toggle('hidden', !show);
    });
  });
});

// ===== FAQ Accordion =====
document.querySelectorAll('.accordion-item').forEach(item => {
  const head = item.querySelector('.accordion-head');
  const body = item.querySelector('.accordion-body');

  head.addEventListener('click', () => {
    const isOpen = item.classList.contains('open');

    document.querySelectorAll('.accordion-item').forEach(other => {
      other.classList.remove('open');
      other.querySelector('.accordion-body').style.maxHeight = null;
    });

    if (!isOpen) {
      item.classList.add('open');
      body.style.maxHeight = body.scrollHeight + 'px';
    }
  });
});

// ===== Booking Form =====
const bookingForm = document.getElementById('booking-form');
const formNote = document.getElementById('form-note');

bookingForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  formNote.textContent = `Thanks, ${name || 'friend'}! We'll wag our tails back to you within 24 hours 🐾`;
  bookingForm.reset();
});

// ===== Newsletter Form =====
const newsletterForm = document.getElementById('newsletter-form');
const newsletterNote = document.getElementById('newsletter-note');

newsletterForm.addEventListener('submit', (e) => {
  e.preventDefault();
  newsletterNote.textContent = 'You\'re in! Check your inbox for pet tips 🐶';
  newsletterForm.reset();
});

// ===== Sticky Header Shadow =====
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  header.style.boxShadow = window.scrollY > 10 ? '0 4px 20px rgba(51,39,42,0.08)' : 'none';
});

// ===== Back to Top =====
const backToTop = document.getElementById('back-to-top');
window.addEventListener('scroll', () => {
  backToTop.classList.toggle('visible', window.scrollY > 500);
});
backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ===== Scroll Reveal =====
const revealEls = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

revealEls.forEach(el => observer.observe(el));
