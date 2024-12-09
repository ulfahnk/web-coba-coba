// Function to switch between languages
const translations = {
    en: {
      heroTitle: "Hello, I'm <span class='text-yellow-400'>Your Name</span>",
      heroSubtitle: "A passionate web developer based in Sumedang",
      heroDescription: "[Add some personal slogan or mission]",
      aboutTitle: "About Me",
      aboutText: "I am a dedicated web developer with experience in building scalable web applications. I love creating beautiful, functional websites and always keep learning the latest technologies.",
      projectsTitle: "My Projects",
      project1Title: "Project 1",
      project1Description: "Description of Project 1. A brief explanation of the project and the technologies used.",
      project2Title: "Project 2",
      project2Description: "Description of Project 2. A brief explanation of the project and the technologies used.",
      project3Title: "Project 3",
      project3Description: "Description of Project 3. A brief explanation of the project and the technologies used.",
      contactTitle: "Contact Me",
      contactText: "Feel free to reach out to me for any project inquiries or collaborations."
    },
    id: {
      heroTitle: "Halo, Saya <span class='text-yellow-400'>Ulfah</span>",
      heroSubtitle: "Seorang pengembang web yang berdedikasi, berbasis di Sumedang",
      heroDescription: "[Tambahkan slogan atau misi pribadi]",
      aboutTitle: "Tentang Saya",
      aboutText: "Saya adalah seorang pengembang web yang berdedikasi dengan pengalaman dalam membangun aplikasi web yang dapat diskalakan. Saya senang menciptakan situs web yang indah dan fungsional serta selalu belajar teknologi terbaru.",
      projectsTitle: "Proyek Saya",
      project1Title: "Proyek 1",
      project1Description: "Deskripsi Proyek 1. Penjelasan singkat tentang proyek dan teknologi yang digunakan.",
      project2Title: "Proyek 2",
      project2Description: "Deskripsi Proyek 2. Penjelasan singkat tentang proyek dan teknologi yang digunakan.",
      project3Title: "Proyek 3",
      project3Description: "Deskripsi Proyek 3. Penjelasan singkat tentang proyek dan teknologi yang digunakan.",
      contactTitle: "Hubungi Saya",
      contactText: "Jangan ragu untuk menghubungi saya untuk pertanyaan proyek atau kolaborasi."
    }
  };
  
  // Event listener for language change
  document.getElementById('language-select').addEventListener('change', (event) => {
    const selectedLanguage = event.target.value;
    translatePage(selectedLanguage);
  });
  
  // Function to apply translations
  function translatePage(language) {
    document.getElementById('hero-title').innerHTML = translations[language].heroTitle;
    document.getElementById('hero-subtitle').innerHTML = translations[language]
  }