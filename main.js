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
  this.children.item(0).classList.toggle('fa-times');
  this.classList.toggle('open');
});