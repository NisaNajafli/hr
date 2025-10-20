window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  if (window.scrollY > 0) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
window.addEventListener("scroll", () => {
  const header = document.getElementById("site-header");
  if (window.scrollY > 150) {        
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

const mainButton = document.getElementById('main-button');

mainButton.addEventListener('click', function () {
  this.classList.toggle('open');
});
// document.addEventListener("DOMContentLoaded", () => {
//   const problems = document.querySelectorAll(".problems .problem");
//   const solutions = document.querySelectorAll(".solutions .solution");

//   problems.forEach((problem, i) => {
//     problem.addEventListener("click", () => {
//       const alreadyActive = problem.classList.contains("active");

//       // close everything first
//       problems.forEach(p => p.classList.remove("active"));
//       solutions.forEach(s => s.classList.remove("active"));

//       // if it was NOT already active, open it
//       if (!alreadyActive) {
//         problem.classList.add("active");
//         if (solutions[i]) {
//           solutions[i].classList.add("active");
//           solutions[i].scrollIntoView({ behavior: "smooth", block: "center" });
//         }
//       }
//     });
//   });
// });
// document.addEventListener("DOMContentLoaded", () => {
//   const problems  = document.querySelectorAll(".problems .problem");
//   const solutions = document.querySelectorAll(".solutions .solution");

//   problems.forEach((problem, i) => {
//     // create and insert button
//     const btn = document.createElement("div");
//     btn.className = "reveal-btn";
//     btn.textContent = "КАК МЫ РЕШАЕМ ЭТИ ПРОБЛЕМЫ?";
//     problem.appendChild(btn);

//     btn.addEventListener("click", (e) => {
//       e.stopPropagation(); 
//       const alreadyActive = solutions[i].classList.contains("active");

//       // close all
//       problems.forEach(p => p.classList.remove("active"));
//       solutions.forEach(s => s.classList.remove("active"));

//       // toggle this pair
//       if (!alreadyActive) {
//         problem.classList.add("active");
//         solutions[i].classList.add("active");
//         solutions[i].scrollIntoView({ behavior: "smooth", block: "center" });
//       }
//     });
//   });
// });
 document.addEventListener('click', function(e){
    const btn = e.target.closest('.problem-card__toggle');
    if(!btn) return;

    const id = btn.getAttribute('data-target');
    const card = document.getElementById(id);
    const body = card.querySelector('.problem-card__body');

    // Если уже раскрыта — сворачиваем
    if(card.classList.contains('expanded')){
      // возвращаем стартовую высоту
      body.style.height = 'var(--collapsed-h)';
      card.classList.remove('expanded');
      btn.textContent = 'Развернуть';
      return;
    }

    // раскрываем до фактической высоты контента
    // временно ставим auto, чтобы измерить
    const prev = body.style.height;
    body.style.height = 'auto';
    const full = body.scrollHeight + 'px';
    body.style.height = prev || 'var(--collapsed-h)';

    // в следующем тике запускаем анимацию высоты
    requestAnimationFrame(() => {
      card.classList.add('expanded');
      body.style.height = full;
      btn.textContent = 'Свернуть';
    });
  });
   document.addEventListener('click', function(e){
    const btn = e.target.closest('.technologies-card__toggle');
    if(!btn) return;

    const id = btn.getAttribute('data-target');
    const card = document.getElementById(id);
    const body = card.querySelector('.technologies-card__body');

    // Если уже раскрыта — сворачиваем
    if(card.classList.contains('expanded')){
      // возвращаем стартовую высоту
      body.style.height = 'var(--collapsed-h-tech)';
      card.classList.remove('expanded');
      btn.textContent = 'Развернуть';
      return;
    }

    // раскрываем до фактической высоты контента
    // временно ставим auto, чтобы измерить
    const prev = body.style.height;
    body.style.height = 'auto';
    const full = body.scrollHeight + 'px';
    body.style.height = prev || 'var(--collapsed-h-tech)';

    // в следующем тике запускаем анимацию высоты
    requestAnimationFrame(() => {
      card.classList.add('expanded');
      body.style.height = full;
      btn.textContent = 'Свернуть';
    });
  });
document.getElementById('year').textContent = new Date().getFullYear();

document.addEventListener('DOMContentLoaded', function () {
  new Swiper('.mySwiper', {
  loop: true, 
  slidesPerView: 6,
  spaceBetween: 30,
  autoplay: { delay: 3000, disableOnInteraction: false },
  pagination: { el: '.swiper-pagination', clickable: true },
  navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
  breakpoints: {
    0: {slidesPerView: 2},
    768: { slidesPerView: 3 },
    1200: { slidesPerView: 5}
  }
});
});


document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".spec-card");

  cards.forEach(card => {
    const btn = card.querySelector(".specialization-btn");
    btn.addEventListener("click", () => {
      card.classList.toggle("active");
      btn.textContent = card.classList.contains("active") 
        ? "СКРЫТЬ" 
        : "ПОСМОТРЕТЬ";
    });
  });
});
