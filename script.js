/**
 * ALFGAMEX STUDIO - OFFICIAL SCRIPT
 * Multi-Language (EN/UZ) & Dual Theme (Dark/Light)
 * Developer: Alfa | Founded: February 17, 2025
 */

// ================= COMPLETE TRANSLATION DICTIONARY =================
const TRANSLATIONS = {
  en: {
    doc_title: "AlfGAmeX Studio | Official Independent Game Studio",
    top_est: "Studio founded: <strong>February 17, 2025</strong>",
    top_status: "Solo Indie Game Studio &bull; Developer Alfa",
    nav_home: "Home",
    nav_about: "About Us",
    nav_projects: "Games & Apps",
    nav_features: "Principles",
    nav_contact: "Contact",
    theme_dark: "Dark",
    theme_light: "Light",
    hero_badge: "AlfGAmeX Studio &bull; Founded: Feb 17, 2025",
    hero_subtitle: "GAME STUDIO",
    hero_lead: "The realm of intellectual mobile games and useful daily applications created by solo indie game developer <strong>Alfa</strong>. Every project is crafted with high quality, modern logic, and brain-sharpening entertainment.",
    hero_btn_about: "About Us",
    hero_btn_projects: "Our Games & Apps",
    hero_stat1_label: "Published Play Store Projects",
    hero_stat2_label: "Solo Indie Development",
    hero_stat3_label: "Founded on February 17",
    emblem_tag: '<i class="fa-solid fa-certificate"></i> Official Emblem',
    emblem_dev: "Developer Alfa &bull; Est. 17.02.2025",
    emblem_status: "Active",
    badge_float1: "Memory Game v2",
    badge_float2: "TestMaker.TXT Pro",
    about_tag: '<i class="fa-solid fa-id-card"></i> Solo Game Developer',
    about_title: "About Us & Developer Alfa",
    about_subtitle: "AlfGAmeX Studio is the creative platform of a solo developer who turned passion into published Google Play products.",
    profile_role: "Solo Indie Game & Android Developer",
    badge_game_dev: "Game Dev",
    badge_android: "Android Native",
    badge_uiux: "UI/UX Design",
    detail_founded_label: "Founded:",
    detail_founded_val: "February 17, 2025",
    detail_format_label: "Work Format:",
    detail_format_val: "Solo Developer",
    detail_focus_label: "Primary Focus:",
    detail_focus_val: "Brain Games & Utility Apps",
    detail_store_label: "Publishing Platform:",
    story_title: "History & Philosophy of AlfGAmeX",
    story_p1: "On <strong>February 17, 2025</strong>, AlfGAmeX Studio was officially founded. I am an independent game developer crafting each project from scratch as a solo creator.",
    story_p2: "Currently, <strong>2 fully developed projects</strong> are successfully published on Google Play and regularly updated. For me, games and apps are more than lines of code — they are thought-provoking logic, clean user experiences, and meaningful digital tools.",
    value1_title: "Brain Development",
    value1_desc: "Engaging puzzle mechanics designed to sharpen memory, attention, and cognitive focus.",
    value2_title: "High Performance",
    value2_desc: "Lightweight, optimized code running smoothly offline without unnecessary bloat.",
    value3_title: "Sleek & Serious Design",
    value3_desc: "Distraction-free, modern user interface balancing dark studio aesthetics and classic comfort.",
    value4_title: "Continuous Updates",
    value4_desc: "Active enhancements, new levels, and user-driven improvements with every release.",
    projects_tag: '<i class="fa-brands fa-google-play"></i> Updated Portfolio',
    projects_title: "Our Games and Applications",
    projects_subtitle: "Official projects published on Google Play by AlfGAmeX. Explore the latest versions, new icons, and screenshot galleries!",
    filter_all: "All (2)",
    filter_games: "Games (1)",
    filter_apps: "Apps (1)",
    card_tag_game: "Official Game",
    card_tag_app: "Utility App",
    version_badge: "New Version",
    meta_rating: "5.0 Rating",
    meta_puzzle: "Puzzle",
    meta_offline: "Offline",
    meta_education: "Education",
    meta_fast: "Fast",
    view_screenshots: "View Screenshots",
    memory_desc_short: "Boost your brain power and sharpen your focus! <strong>Memory: Brain Training Game</strong> is a premium memory puzzle designed to test recall and pattern recognition skills.",
    testmaker_desc_short: "A fast and convenient educational tool to generate and take interactive tests directly from plain .TXT files. Perfect for teachers, students, and quiz enthusiasts!",
    memory_chip1: "50+ Unique Levels",
    memory_chip2: "Progressive Difficulty",
    memory_chip3: "Sleek & Serious UI",
    memory_chip4: "100% Offline Play",
    testmaker_chip1: "Import TXT Files",
    testmaker_chip2: "Real-Time Testing",
    testmaker_chip3: "Multiple Choice Questions",
    testmaker_chip4: "Performance Analytics",
    btn_download_from: "Download on",
    btn_download_now: "Google Play",
    btn_details: "Details",
    feat_tag: '<i class="fa-solid fa-shield-halved"></i> Our Principles',
    feat_title: "Why Choose AlfGAmeX?",
    feat_subtitle: "We combine enjoyable gameplay mechanics with real practical utility in every release.",
    feat1_title: "Serious & Clean Design",
    feat1_desc: "Modern aesthetic without distracting banners or cluttered menus, optimized for visual comfort.",
    feat2_title: "Secure & Reliable",
    feat2_desc: "Compliant with all Google Play security policies with zero unlawful data collection.",
    feat3_title: "Broad Device Support",
    feat3_desc: "Runs smoothly and efficiently across a wide variety of Android devices and screen sizes.",
    feat4_title: "Direct Community Feedback",
    feat4_desc: "Developer Alfa personally reviews community suggestions to implement them in upcoming patches.",
    contact_pill: '<i class="fa-solid fa-envelope"></i> Get In Touch',
    contact_title: "Contact Developer Alfa",
    contact_subtitle: "Have questions, suggestions, or game collaboration proposals? Your feedback is always welcome!",
    contact_play_title: "Google Play Profile",
    contact_play_sub: "Alfgamex Developer Page",
    contact_email_title: "Email Address",
    contact_loc_title: "Location",
    contact_loc_val: "Uzbekistan",
    footer_desc: "Independent indie game and software development studio. Crafting high-quality, thoughtful digital experiences.",
    footer_est: "Founded: <strong>February 17, 2025</strong>",
    footer_quick_links: "Quick Links",
    footer_play_projects: "Play Store Projects",
    footer_dev_title: "Developer",
    footer_dev_lead: "Developer: Alfa",
    footer_dev_sub: "Solo Indie Game Developer",
    footer_dev_note: "Every line of code crafted with care and dedication.",
    footer_rights: "All rights reserved.",
    footer_dev_credit: "Developer: <strong>Alfa</strong> &bull; Founded: <strong>17.02.2025</strong>",
    modal_about_heading: "About Game / Application",
    modal_feat_heading: "Key Features",
    modal_btn_copy: "Copy Link",
    modal_btn_play: "Open in Google Play",
    toast_copied: "Google Play link copied to clipboard!",
    toast_lang_switched: "Language switched to English"
  },
  uz: {
    doc_title: "AlfGAmeX Studio | Rasmiy Mustaqil O'yin Studiyasi",
    top_est: "Studiya asos solingan sana: <strong>17-fevral, 2025-yil</strong>",
    top_status: "Mustaqil (Solo) Indie Game Studio &bull; Dasturchi Alfa",
    nav_home: "Asosiy",
    nav_about: "Biz haqimizda",
    nav_projects: "O'yin & Ilovalar",
    nav_features: "Tamoyillar",
    nav_contact: "Aloqa",
    theme_dark: "Tungi",
    theme_light: "Kunduzgi",
    hero_badge: "AlfGAmeX Studio &bull; Asos solingan: 17-fevral, 2025",
    hero_subtitle: "GAME STUDIO",
    hero_lead: "Mustaqil game dasturchisi <strong>Alfa</strong> tomonidan yaratilgan intellektual mobil o'yinlar va qulay kundalik ilovalar. Har bir loyiha yuqori sifat, zamonaviy mantiq va aqliy rivojlanishga qaratilgan.",
    hero_btn_about: "Biz haqimizda",
    hero_btn_projects: "Bizning o'yin va ilovalarimiz",
    hero_stat1_label: "Nashr etilgan Play Store Loyihasi",
    hero_stat2_label: "Solo Indie Ishlanma",
    hero_stat3_label: "17-Fevralda Asos Solingan",
    emblem_tag: '<i class="fa-solid fa-certificate"></i> Rasmiy Emblema',
    emblem_dev: "Dasturchi Alfa &bull; Est. 17.02.2025",
    emblem_status: "Faol",
    badge_float1: "Memory Game v2",
    badge_float2: "TestMaker.TXT Pro",
    about_tag: '<i class="fa-solid fa-id-card"></i> Mustaqil Game Dasturchi',
    about_title: "Biz haqimizda & Dasturchi Alfa",
    about_subtitle: "AlfGAmeX Studio — g'oyadan Google Play'dagi real mahsulotgacha o'z bilimi va mustaqil mehnati bilan yetib kelgan solo dasturchining ijodiy platformasi.",
    profile_role: "Solo Indie Game & Android Dasturchisi",
    badge_game_dev: "Game Dev",
    badge_android: "Android Native",
    badge_uiux: "UI/UX Dizayn",
    detail_founded_label: "Asos solingan:",
    detail_founded_val: "17-fevral, 2025-yil",
    detail_format_label: "Ishlash formati:",
    detail_format_val: "Yolg'iz (Solo Developer)",
    detail_focus_label: "Asosiy yo'nalish:",
    detail_focus_val: "Brain Games & Utility Apps",
    detail_store_label: "Tarqatish maydoni:",
    story_title: "AlfGAmeX Tarixi va Falsafasi",
    story_p1: "<strong>2025-yilning 17-fevralida</strong> AlfGAmeX studiyasiga asos solindi. Men yangi mustaqil game dasturchiman va barcha loyihalarni noldan boshlab yolg'iz (solo) tarzda ishlab chiqaman.",
    story_p2: "Hozirda Google Play do'konida <strong>2 ta to'liq real loyiham</strong> muvaffaqiyatli nashr etilgan va doimiy ravishda yangilanib bormoqda. Men uchun har bir loyiha shunchaki kod emas — bu aql charxlovchi mantiq, qulay interfeys va insonlarning vaqtini unumli o'tkazishga ko'maklashuvchi yechimdir.",
    value1_title: "Aqliy Rivojlanish",
    value1_desc: "Mantiqiy, xotirani mustahkamlovchi va diqqatni oshiruvchi o'yin mexanikasi.",
    value2_title: "Yuqori Ishlash Tezligi",
    value2_desc: "Keraksiz yuklamalarsiz, optimallashtirilgan va oflayn rejimda ham barqaror ishlovchi kod.",
    value3_title: "Jiddiy va Sof Dizayn",
    value3_desc: "Oddiy, tushunarli, zamonaviy va chalg'itmaydigan foydalanuvchi interfeysi.",
    value4_title: "Doimiy Yangilanishlar",
    value4_desc: "Foydalanuvchilar fikr-mulohazalari asosida muntazam yaxshilanishlar va yangi bosqichlar.",
    projects_tag: '<i class="fa-brands fa-google-play"></i> Yangilangan Portfolio',
    projects_title: "Bizning O'yin va Ilovalarimiz",
    projects_subtitle: "AlfGAmeX tomonidan Google Play do'koniga rasman yuklangan loyihalar. Yangi versiyalar, yangilangan ikonkalar va skrinshotlar bilan tanishing!",
    filter_all: "Barchasi (2)",
    filter_games: "O'yinlar (1)",
    filter_apps: "Ilovalar (1)",
    card_tag_game: "Rasmiy O'yin",
    card_tag_app: "Foydali Ilova",
    version_badge: "Yangi Versiya",
    meta_rating: "5.0 Reyting",
    meta_puzzle: "Boshqotirma",
    meta_offline: "Oflayn",
    meta_education: "Ta'lim",
    meta_fast: "Tezkor",
    view_screenshots: "Skrinshotlarni ko'rish",
    memory_desc_short: "Miyangizni charxlang va diqqatingizni oshiring! <strong>Memory: Brain Training Game</strong> — eslab qolish qobiliyatini va vizual naqshlarni topish mahoratini sinovdan o'tkazuvchi yuqori sifatli intellektual boshqotirma o'yini.",
    testmaker_desc_short: "Oddiy .TXT formatdagi matnli fayllardan bir zumda interaktiv testlar yaratish va ularni yechish uchun qulay ta'lim ilovasi. O'qituvchilar, talabalar va test tuzuvchilar uchun ideal yordamchi!",
    memory_chip1: "50+ Takrorlanmas Bosqich",
    memory_chip2: "Rivojlanuvchi Qiyinchilik",
    memory_chip3: "Minimalist & Jiddiy UI",
    memory_chip4: "100% Oflayn O'yin",
    testmaker_chip1: "TXT Fayllarni Import Qilish",
    testmaker_chip2: "Real-Vaqtda Test Yechish",
    testmaker_chip3: "Ko'p Tanlovli Savollar",
    testmaker_chip4: "Natijalar Tahlili",
    btn_download_from: "Google Play'dan",
    btn_download_now: "Yuklab Olish",
    btn_details: "Batafsil",
    feat_tag: '<i class="fa-solid fa-shield-halved"></i> Bizning Tamoyillar',
    feat_title: "Nega AlfGAmeX Loyihalari?",
    feat_subtitle: "Biz har bir o'yinda qiziqarli mexanika va har bir dasturda haqiqiy amaliy qulaylikni ta'minlaymiz.",
    feat1_title: "Jiddiy va Toza Dizayn",
    feat1_desc: "Ortiqcha chalg'ituvchi unsurlarsiz, ko'zni toliqtirmaydigan qorong'u va klassik yorug' interfeys uyg'unligi.",
    feat2_title: "Xavfsiz va Ishonchli",
    feat2_desc: "Google Play xavfsizlik standartlariga to'liq javob beruvchi, shaxsiy ma'lumotlarni noqonuniy yig'maydigan toza kod.",
    feat3_title: "Qurilmalarga Moslashuvchan",
    feat3_desc: "Har qanday zamonaviy va avvalgi avlod Android smartfonlarida tez, yengil va qotmasdan ishlaydi.",
    feat4_title: "Foydalanuvchi Bilan Aloqa",
    feat4_desc: "Dasturchi Alfa har bir fikr va taklifni shaxsan o'rganib chiqib, yangi versiyalarda amalga oshiradi.",
    contact_pill: '<i class="fa-solid fa-envelope"></i> Bog\'lanish',
    contact_title: "Dasturchi Alfa Bilan Aloqa",
    contact_subtitle: "Savollaringiz, takliflaringiz yoki hamkorlik g'oyalaringiz bormi? Fikr-mulohazangiz biz uchun juda qadrli!",
    contact_play_title: "Google Play Profil",
    contact_play_sub: "Alfgamex Dasturchi Sahifasi",
    contact_email_title: "Email Pochta",
    contact_loc_title: "Joylashuv",
    contact_loc_val: "O'zbekiston",
    footer_desc: "Mustaqil indie o'yin va ilovalar studiyasi. Sifat, samimiylik va intellektual mobil loyihalar makoni.",
    footer_est: "Asos solingan: <strong>17-fevral, 2025-yil</strong>",
    footer_quick_links: "Tezkor Havolalar",
    footer_play_projects: "Play Store Loyihalari",
    footer_dev_title: "Dasturchi",
    footer_dev_lead: "Dasturchi: Alfa",
    footer_dev_sub: "Solo Indie Game Developer",
    footer_dev_note: "Har bir kod va dizayn sinchkovlik bilan yaratilgan.",
    footer_rights: "Barcha huquqlar himoyalangan.",
    footer_dev_credit: "Dasturchi: <strong>Alfa</strong> &bull; Asos solingan: <strong>17.02.2025</strong>",
    modal_about_heading: "Ilova / O'yin Haqida",
    modal_feat_heading: "Asosiy Xususiyatlar",
    modal_btn_copy: "Havolani nusxalash",
    modal_btn_play: "Google Play'da Ochish",
    toast_copied: "Google Play havolasi nusxalandi!",
    toast_lang_switched: "Til o'zbekchaga o'zgartirildi"
  }
};

// ================= APP DATABASE (BILINGUAL) =================
const APP_DATABASE = {
  memory: {
    icon: "assets/images/memory-icon.png",
    screenshots: [
      "assets/images/memory-screen1.jpg",
      "assets/images/memory-screen2.jpg",
      "assets/images/memory-screen3.jpg"
    ],
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.alfgamex.Memory",
    en: {
      title: "Memory: Brain Training Game",
      category: "Logic Puzzle & Cognitive Training",
      description: `Boost your brain power and sharpen your focus with Memory: Brain Training Game! Challenge yourself with a high-quality memory puzzle designed to test recall and pattern recognition skills.

With over 50 unique and progressively challenging levels, this game offers hours of educational entertainment for players of all ages.

How to Play:
1. Carefully observe the pattern of highlighted tiles on the grid.
2. Memorize their exact positions.
3. Once they disappear, tap the correct tiles to clear the level!`,
      features: [
        "50+ Unique Levels: Test your memory across varied grid sizes and complex patterns.",
        "Progressive Difficulty: Challenges naturally evolve as your concentration improves.",
        "Sleek & Serious Design: Clean minimalist visuals with zero unnecessary distractions.",
        "100% Offline Playable: No internet required — train your recall anytime, anywhere.",
        "Cognitive Health: A proven and fun method to exercise short-term memory and focus."
      ]
    },
    uz: {
      title: "Memory: Brain Training Game",
      category: "Mantiqiy Boshqotirma & Aqliy Mashq",
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
    }
  },
  testmaker: {
    icon: "assets/images/testmaker-icon.png",
    screenshots: [
      "assets/images/testmaker-screen1.jpg",
      "assets/images/testmaker-screen2.jpg",
      "assets/images/testmaker-screen3.jpg"
    ],
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.alfgamex.testmakertxt",
    en: {
      title: "TestMaker.TXT",
      category: "Education & Productivity Utility",
      description: `The ultimate tool for creating and taking interactive tests directly from plain .TXT files!

Designed for students, teachers, tutors, and quiz enthusiasts, TestMaker.TXT makes test creation, import, and evaluation fast, effortless, and organized.

Why Choose TestMaker.TXT?
Save time and effort: Import prepared TXT files and manage all your questionnaires in one lightweight app. Perfect for exam preparation, quizzes, or classroom assessments!`,
      features: [
        "Create Tests from TXT Files: Instantly import formatted text files into interactive tests.",
        "Real-Time Testing: Take tests and receive immediate score feedback on every question.",
        "Multiple-Choice Questions: Conveniently manage multiple answer choices and answer keys.",
        "User-Friendly Interface: Smooth, intuitive, and distraction-free design for students & educators.",
        "Track Your Progress: Review your results and monitor your learning trajectory over time."
      ]
    },
    uz: {
      title: "TestMaker.TXT",
      category: "Ta'lim & Foydali Utilit Dastur",
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
  }
};

let currentModalAppKey = null;

// ================= LANGUAGE CONTROLLER =================
function getStoredLanguage() {
  return localStorage.getItem('alfgamex_lang') || 'en';
}

function applyLanguage(lang, showNotification = false) {
  const dict = TRANSLATIONS[lang] || TRANSLATIONS.en;
  document.documentElement.lang = lang;
  localStorage.setItem('alfgamex_lang', lang);

  // Update all [data-i18n] elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) {
      // If translation contains HTML tags (e.g. <strong>, <i>), use innerHTML
      if (dict[key].includes('<')) {
        el.innerHTML = dict[key];
      } else {
        el.textContent = dict[key];
      }
    }
  });

  // Update document title
  if (dict.doc_title) {
    document.title = dict.doc_title;
  }

  // Update active state in language selector
  document.querySelectorAll('.lang-btn').forEach(btn => {
    if (btn.getAttribute('data-lang') === lang) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  // Update Theme Button label in current language
  updateThemeButtonLabel();

  // If a modal is currently open, refresh its content in the new language
  if (currentModalAppKey && document.getElementById('appModal').classList.contains('active')) {
    openAppModal(currentModalAppKey, false);
  }

  if (showNotification) {
    showToast(dict.toast_lang_switched);
  }
}

function initLanguage() {
  const currentLang = getStoredLanguage();
  applyLanguage(currentLang, false);

  // Setup language button clicks
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const selectedLang = btn.getAttribute('data-lang');
      if (selectedLang !== getStoredLanguage()) {
        applyLanguage(selectedLang, true);
      }
    });
  });
}

// ================= THEME CONTROLLER =================
function getStoredTheme() {
  return localStorage.getItem('alfgamex_theme') || 'dark';
}

function updateThemeButtonLabel() {
  const theme = document.documentElement.getAttribute('data-theme') || 'dark';
  const lang = getStoredLanguage();
  const dict = TRANSLATIONS[lang] || TRANSLATIONS.en;
  const themeLabel = document.getElementById('themeLabel');
  if (themeLabel) {
    themeLabel.textContent = theme === 'dark' ? dict.theme_dark : dict.theme_light;
  }
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('alfgamex_theme', theme);
  updateThemeButtonLabel();
}

function initTheme() {
  const savedTheme = getStoredTheme();
  applyTheme(savedTheme);

  const themeToggle = document.getElementById('themeToggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      applyTheme(newTheme);

      const lang = getStoredLanguage();
      const msg = newTheme === 'dark' 
        ? (lang === 'en' ? "Dark theme activated" : "Tungi (Qora) rejim yoqildi")
        : (lang === 'en' ? "Light theme activated" : "Kunduzgi (Klassik Oq) rejim yoqildi");
      showToast(msg);
    });
  }
}

// ================= MODAL LOGIC =================
function openAppModal(appKey, setPrimaryScreenshot = true) {
  const app = APP_DATABASE[appKey];
  if (!app) return;

  currentModalAppKey = appKey;
  const lang = getStoredLanguage();
  const localized = app[lang] || app.en;

  const modal = document.getElementById('appModal');
  const icon = document.getElementById('modalAppIcon');
  const title = document.getElementById('modalAppTitle');
  const cat = document.getElementById('modalAppCategory');
  const screenshot = document.getElementById('modalScreenshot');
  const thumbnailsContainer = document.getElementById('modalThumbnails');
  const desc = document.getElementById('modalAppDesc');
  const featuresList = document.getElementById('modalAppFeatures');
  const playLink = document.getElementById('modalPlayLink');

  icon.src = app.icon;
  icon.alt = localized.title;
  title.textContent = localized.title;
  cat.textContent = localized.category;
  desc.textContent = localized.description;
  playLink.href = app.playStoreUrl;

  // Set primary screenshot if required
  if (setPrimaryScreenshot) {
    screenshot.src = app.screenshots[0];
    screenshot.alt = `${localized.title} Screenshot`;

    // Build screenshot thumbnails
    thumbnailsContainer.innerHTML = '';
    app.screenshots.forEach((scr, idx) => {
      const btn = document.createElement('button');
      btn.className = `thumb-btn ${idx === 0 ? 'active' : ''}`;
      btn.innerHTML = `<img src="${scr}" alt="Thumbnail ${idx + 1}">`;
      btn.addEventListener('click', () => {
        document.querySelectorAll('.thumb-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        screenshot.src = scr;
      });
      thumbnailsContainer.appendChild(btn);
    });
  }

  // Populate features list
  featuresList.innerHTML = '';
  localized.features.forEach(feat => {
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

// Close modal triggers
document.addEventListener('click', (e) => {
  const modal = document.getElementById('appModal');
  if (e.target === modal) {
    closeAppModal();
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeAppModal();
  }
});

// Copy link function
function copyCurrentAppLink() {
  if (!currentModalAppKey) return;
  const app = APP_DATABASE[currentModalAppKey];
  const link = app.playStoreUrl;
  const lang = getStoredLanguage();
  const dict = TRANSLATIONS[lang] || TRANSLATIONS.en;

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(link).then(() => {
      showToast(dict.toast_copied);
    }).catch(() => fallbackCopy(link, dict.toast_copied));
  } else {
    fallbackCopy(link, dict.toast_copied);
  }
}

function fallbackCopy(text, msg) {
  const textarea = document.createElement('textarea');
  textarea.value = text;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  document.body.removeChild(textarea);
  showToast(msg);
}

// Toast notification helper
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

// ================= DOM INITIALIZATION =================
document.addEventListener('DOMContentLoaded', () => {
  // Initialize language first, then theme
  initLanguage();
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
