// SMOOTH NAV SCROLL
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(link.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
  });
});

// ABOUT SECTION SCROLL ANIMATION
const aboutSection = document.querySelector('.about');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      aboutSection.classList.add('show');
    }
  });
}, { threshold:0.3 });

observer.observe(aboutSection);

// SKILLS ANIMATION
const skillsSection = document.querySelector('.skills');
const skillsObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      skillsSection.classList.add('show');

      const progressBars = document.querySelectorAll('.skill-progress');
      progressBars[0].style.width = '95%'; // HTML
      progressBars[1].style.width = '90%'; // CSS
      progressBars[2].style.width = '85%'; // JS
      progressBars[3].style.width = '80%'; // Python
    }
  });
}, { threshold: 0.3 });
skillsObserver.observe(skillsSection);

// PROJECTS ANIMATION
const projectsSection = document.querySelector('.projects');
const projectsObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      projectsSection.classList.add('show');

      // Animate each project card individually
      const projectCards = document.querySelectorAll('.project-card');
      projectCards.forEach((card, index) => {
        setTimeout(() => {
          card.style.transform = 'translateY(0)';
          card.style.opacity = '1';
        }, index * 200);
      });
    }
  });
}, { threshold: 0.3 });
projectsObserver.observe(projectsSection);

// CERTIFICATIONS ANIMATION
const certificationsSection = document.querySelector('.certifications');
const certificationsObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      certificationsSection.classList.add('show');

      // Animate each certification card individually
      const certCards = document.querySelectorAll('.cert-card');
      certCards.forEach((card, index) => {
        setTimeout(() => {
          card.style.transform = 'translateY(0)';
          card.style.opacity = '1';
        }, index * 200);
      });
    }
  });
}, { threshold: 0.3 });
certificationsObserver.observe(certificationsSection);

// EDUCATION TIMELINE ANIMATION
const educationSection = document.querySelector('.education');
const timelineItems = document.querySelectorAll('.timeline-item');

const educationObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      educationSection.classList.add('show');

      timelineItems.forEach((item, index) => {
        setTimeout(() => {
          item.style.opacity = '1';
          item.style.transform = 'translateY(0)';
        }, index * 250);
      });
    }
  });
}, { threshold: 0.3 });

educationObserver.observe(educationSection);

// CONTACT ANIMATION
const contactSection = document.querySelector('.contact');
const contactObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      contactSection.classList.add('show');
    }
  });
}, { threshold: 0.3 });
contactObserver.observe(contactSection);

const cursor = document.querySelector(".custom-cursor");

let targetX = 0, targetY = 0;
let currentX = 0, currentY = 0;

document.addEventListener("mousemove", e => {
  targetX = e.clientX;
  targetY = e.clientY;
});

function animateCursor() {
  currentX += (targetX - currentX) * 0.1;
  currentY += (targetY - currentY) * 0.1;

  cursor.style.left = currentX + "px";
  cursor.style.top = currentY + "px";

  requestAnimationFrame(animateCursor);
}

animateCursor();
