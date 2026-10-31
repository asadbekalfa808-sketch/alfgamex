/**
 * ALFGAMEX STUDIO - OFFICIAL SCRIPT
 * Developer: Alfa | Founded: February 17, 2025
 */

// App database with updated Play Store assets and multiple screenshots
const APP_DATABASE = {
  memory: {
    title: "Memory: Brain Training Game",
    category: "Mantiqiy Boshqotirma & Aqliy Mashq",
    icon: "assets/images/memory-icon.png",
    screenshots: [
      "assets/images/memory-screen1.jpg",
      "assets/images/memory-screen2.jpg",
      "assets/images/memory-screen3.jpg"
    ],
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.alfgamex.Memory",
    description: `Miyangizni charxlang va diqqatingizni oshiring! Memory: Brain Training Game — eslab qolish qobiliyatini va vizual naqshlarni topish mahoratini sinovdan o'tkazuvchi yuqori sifatli intellektual boshqotirma o'yini.

50 dan ortiq qiziqarli va ortib boruvchi qiyinchilik darajalari bilan ushbu o'yin barcha yoshdagi foydalanuvchilar uchun foydali va intellektual ko'ngilxushlik beradi.

Qanday o'ynaladi:
1. Katakchalar (grid)dagi plitkalar naqshini diqqat bilan kuzating.
2. Ularning o'rnini eslab qoling.
3. Plitkalar yashiringanda, bosqichni yakunlash uchun to'g'ri katakchalarni bosing!`,
    features: [
      "50+ Takrorlanmas Bosqich: Turli xil to'r (grid) o'lchamlaridagi xotira sinovlari.",
      "Rivojlanuvchi Qiyinchilik: O'yinda o'sganingiz sari boshqotirmalar qiziqroq va murakkabroq bo'ladi.",
      "Sleek & Jiddiy Dizayn: Keraksiz chalg'itishlarsiz toza va zamonaviy o'yin jarayoni.",
      "100% Oflayn O'yin: Internet talab qilinmaydi, istalgan joyda mashq qiling.",
      "Miya Salomatligi: Qisqa muddatli xotira va konsentratsiyani mustahkamlash uchun ideal vosita."
    ]
  },
  testmaker: {
    title: "TestMaker.TXT",
    category: "Ta'lim & Foydali Utilit Dastur",
    icon: "assets/images/testmaker-icon.png",
    screenshots: [
      "assets/images/testmaker-screen1.jpg",
      "assets/images/testmaker-screen2.jpg",
      "assets/images/testmaker-screen3.jpg"
    ],
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.alfgamex.testmakertxt",
    description: `Oddiy .TXT formatdagi matnli fayllardan bir zumda interaktiv testlar yaratish va ularni topshirish uchun eng qulay va samarali ilova!

Talabalar, o'qituvchilar, repetitorlar va viktorina ishqibozlari uchun maxsus ishlab chiqilgan bo'lib, testlarni boshqarish va bilimni baholashni bir necha soniyada oson va qulay qiladi.

Nega aynan TestMaker.TXT?
Vaqt va kuchingizni tejang: Tayyor TXT fayllaringizni import qiling va barcha testlaringizni bitta ixcham ilovada boshqaring. Imtihonga tayyorgarlik yoki mashg'ulotlar uchun eng qulay vosita!`,
    features: [
      "TXT Fayllardan Test Yaratish: TXT matnli fayllarni tezkor import qiling va interaktiv testlarga aylantiring.",
      "Real-Vaqtda Test Yechish: Testlarni topshiring va har bir savol bo'yicha tezkor tahlil oling.",
      "Ko'p Tanlovli Savollar: Bir nechta javob variantli savollarni qulay boshqarish.",
      "Foydalanuvchiga Qulay Interfeys: Silliq, sodda va intuitiv zamonaviy dizayn.",
      "Natijalarni Kuzatib Borish: O'z ko'rsatkichlaringizni tahlil qiling va bilimlaringizni oshiring."
    ]
  }
};

let currentModalApp = null;

// ================= THEME TOGGLE (DARK/LIGHT) =================
function initTheme() {
  const savedTheme = localStorage.getItem('alfgamex_theme') || 'dark';
  applyTheme(savedTheme);

  const themeToggle = document.getElementById('themeToggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      applyTheme(newTheme);
      showToast(newTheme === 'dark' ? "Tungi (Qora) rejim yoqildi" : "Kunduzgi (Klassik Oq) rejim yoqildi");
    });
  }
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('alfgamex_theme', theme);

  const themeLabel = document.getElementById('themeLabel');
  if (themeLabel) {
    themeLabel.textContent = theme === 'dark' ? "Tungi" : "Kunduzgi";
  }
}

// ================= MODAL LOGIC =================
function openAppModal(appKey) {
  const data = APP_DATABASE[appKey];
  if (!data) return;

  currentModalApp = data;

  const modal = document.getElementById('appModal');
  const icon = document.getElementById('modalAppIcon');
  const title = document.getElementById('modalAppTitle');
  const cat = document.getElementById('modalAppCategory');
  const screenshot = document.getElementById('modalScreenshot');
  const thumbnailsContainer = document.getElementById('modalThumbnails');
  const desc = document.getElementById('modalAppDesc');
  const featuresList = document.getElementById('modalAppFeatures');
  const playLink = document.getElementById('modalPlayLink');

  icon.src = data.icon;
  icon.alt = data.title;
  title.textContent = data.title;
  cat.textContent = data.category;
  desc.textContent = data.description;
  playLink.href = data.playStoreUrl;

  // Set primary screenshot
  screenshot.src = data.screenshots[0];
  screenshot.alt = `${data.title} Skrinshoti`;

  // Build screenshot thumbnails
  thumbnailsContainer.innerHTML = '';
  data.screenshots.forEach((scr, idx) => {
    const btn = document.createElement('button');
    btn.className = `thumb-btn ${idx === 0 ? 'active' : ''}`;
    btn.innerHTML = `<img src="${scr}" alt="Thumb ${idx + 1}">`;
    btn.addEventListener('click', () => {
      document.querySelectorAll('.thumb-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      screenshot.src = scr;
    });
    thumbnailsContainer.appendChild(btn);
  });

  // Features list
  featuresList.innerHTML = '';
  data.features.forEach(feat => {
    const li = document.createElement('li');
    li.innerHTML = `<i class="fa-solid fa-circle-check"></i> <span>${feat}</span>`;
    featuresList.appendChild(li);
  });

  modal.classList.add('active');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeAppModal() {
  const modal = document.getElementById('appModal');
  if (modal) {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }
}

// Close on backdrop
document.addEventListener('click', (e) => {
  const modal = document.getElementById('appModal');
  if (e.target === modal) {
    closeAppModal();
  }
});

// Close on Escape
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeAppModal();
  }
});

// Copy link
function copyCurrentAppLink() {
  if (!currentModalApp) return;
  const link = currentModalApp.playStoreUrl;

  navigator.clipboard.writeText(link).then(() => {
    showToast("Google Play havolasi nusxalandi!");
  }).catch(() => {
    const textarea = document.createElement('textarea');
    textarea.value = link;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    showToast("Google Play havolasi nusxalandi!");
  });
}

// Toast notification
function showToast(message) {
  const toast = document.getElementById('toastNotification');
  const toastMsg = document.getElementById('toastMsg');
  if (!toast || !toastMsg) return;

  toastMsg.textContent = message;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 3200);
}

// ================= DOM INIT =================
document.addEventListener('DOMContentLoaded', () => {
  initTheme();

  // Projects filter tabs
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category === filterValue) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 50);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(20px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 200);
        }
      });
    });
  });

  // Mobile menu toggle
  const mobileToggle = document.getElementById('mobileToggle');
  const navLinks = document.getElementById('navLinks');

  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      navLinks.classList.toggle('mobile-open');
      const icon = mobileToggle.querySelector('i');
      if (navLinks.classList.contains('mobile-open')) {
        icon.classList.remove('fa-bars-staggered');
        icon.classList.add('fa-xmark');
      } else {
        icon.classList.remove('fa-xmark');
        icon.classList.add('fa-bars-staggered');
      }
    });

    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('mobile-open');
        const icon = mobileToggle.querySelector('i');
        if (icon) {
          icon.classList.remove('fa-xmark');
          icon.classList.add('fa-bars-staggered');
        }
      });
    });
  }

  // Active link on scroll
  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset + 120;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop;
      const sectionId = current.getAttribute('id');
      const navLink = document.querySelector(`.nav-links a[href*="${sectionId}"]`);

      if (navLink) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          navLink.classList.add('active');
        } else {
          navLink.classList.remove('active');
        }
      }
    });
  });
});
