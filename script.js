
function revealOnScroll() {
  const reveals = document.querySelectorAll(".reveal");
  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const elementTop = reveals[i].getBoundingClientRect().top;
    const visiblePoint = 100;

    if (elementTop < windowHeight - visiblePoint) {
      reveals[i].classList.add("active");
    }
  }
}
window.addEventListener("scroll", revealOnScroll);
window.addEventListener("DOMContentLoaded", revealOnScroll);

// تفعيل أنيميشن حروف الهيدر
window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('header h1 span').forEach(span => {
    span.style.animationPlayState = 'running';
  });
});

// تغيير الهيدر عند التمرير
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// الوضع الليلي
window.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("themeToggle");
  if (!toggleBtn) return;

  // تفعيل الوضع المحفوظ
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    toggleBtn.textContent = "☀️";
  }

  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    const isDark = document.body.classList.contains("dark");
    toggleBtn.textContent = isDark ? "☀️" : "🌙";
    localStorage.setItem("theme", isDark ? "dark" : "light");
  });
});

// تحريك أعمدة المهارات الرأسية

function animateVerticalSkills() {
  const section = document.getElementById("skills");
  if (!section) return;
  const sectionTop = section.getBoundingClientRect().top;
  const triggerPoint = window.innerHeight - 100;

  if (sectionTop < triggerPoint) {
    verticalBars.forEach(bar => {
      const target = bar.getAttribute("data-height");
      bar.style.height = target;
    });
    window.removeEventListener("scroll", animateVerticalSkills);
  }
}
window.addEventListener("scroll", animateVerticalSkills);

// تأثير الكتابة الآلية
const typewriterText = [
  "I am a Web Developer",
  "I build modern websites",
  "I turn ideas into code",
  "I love creative coding"
];
const typewriterElement = document.getElementById("typewriter");
let typeIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  if (!typewriterElement) return;
  const currentText = typewriterText[typeIndex];
  const displayedText = currentText.substring(0, charIndex);

  typewriterElement.textContent = displayedText;

  if (!isDeleting && charIndex < currentText.length) {
    charIndex++;
    setTimeout(typeEffect, 100);
  } else if (isDeleting && charIndex > 0) {
    charIndex--;
    setTimeout(typeEffect, 50);
  } else {
    isDeleting = !isDeleting;
    if (!isDeleting) {
      typeIndex = (typeIndex + 1) % typewriterText.length;
    }
    setTimeout(typeEffect, 1000);
  }
}
typeEffect();
