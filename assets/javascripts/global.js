const handleLang = (selected) => {
    selected.parentElement.classList.add("active");
    setTimeout(() => {
        if (window.location.href.includes("/ar/")) {
            window.location.href = window.location.href.replace("/ar/", "/");
          } else {
            window.location.href =
              window.location.origin + "/ar" + window.location.pathname;
          }
    }, 800);
  };


  // HAMBURGER 
  var menu = document.querySelector(".menu")
var spantwo = document.querySelector(".line-2");
var spanone = document.querySelector(".line-1");
var spanthree = document.querySelector(".line-3");
var sidebar = document.querySelector(".sidebar");
const body = document.querySelector("body");

menu.onclick = () => {
  spantwo.classList.toggle("li2ne");
  spanone.classList.toggle("l1ine");
  spanthree.classList.toggle("lin3e");
  sidebar.classList.toggle("active");
  body.classList.toggle("active");
};