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

var mainDiv = document.getElementById('main-button');
mainDiv.addEventListener('click', function(){
  this.children.item(0).classList.toggle('fa-xmark');
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
document.addEventListener("DOMContentLoaded", () => {
  const problems  = document.querySelectorAll(".problems .problem");
  const solutions = document.querySelectorAll(".solutions .solution");

  problems.forEach((problem, i) => {
    const btn = problem.querySelector(".cssbuttons-io-button");
    if (!btn) return;

    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const sol = solutions[i];
      if (!sol) return;

      const isOpen = sol.classList.contains("active");

      // close all
      problems.forEach(p => p.classList.remove("active"));
      solutions.forEach(s => s.classList.remove("active"));

      // open only if it wasn't already open
      if (!isOpen) {
        problem.classList.add("active");
        sol.classList.add("active");
        sol.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    });
  });
});



