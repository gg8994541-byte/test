// Oddiy JS: year chiqarish, tema almashtirish, va formni "simulyatsiya" qilib ko'rsatish
document.getElementById('year').textContent = new Date().getFullYear();

const themeBtn = document.getElementById('themeBtn');
themeBtn.addEventListener('click', () => {
  document.documentElement.classList.toggle('dark');
  themeBtn.textContent = document.documentElement.classList.contains('dark') ? 'Kunning rejimiga o‘t' : 'Tungi rejim';
});

// Formni emulyatsiya qilamiz — haqiqiy backend yo'q
const form = document.getElementById('contactForm');
const status = document.getElementById('status');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  status.textContent = 'Yuborilmoqda...';
  // 1.5s so‘ng xabar ko‘rsatish
  setTimeout(() => {
    status.textContent = 'Raxmat! Xabaringiz qabul qilindi.';
    form.reset();
  }, 1500);
});
