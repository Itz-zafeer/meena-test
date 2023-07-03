
// AOS 
AOS.init({ once: true });

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
const faqEl = document.querySelectorAll(".faq")

faqEl.forEach((faq)=>{
  faq.addEventListener("click",()=>{
  const selectedFaq = faq 
  setTimeout(() => {
    const yOffset  = -(window.innerWidth / 100 * 4.97135416667)
  const y = selectedFaq.getBoundingClientRect().top + window.pageYOffset + yOffset;
  window.scrollTo({top: y, behavior: 'smooth'});
  }, 800);
  
  faqEl.forEach((v)=>{
   const otherFaq = v
   if(otherFaq === selectedFaq){
    otherFaq.classList.toggle("active")
   }else{
    otherFaq.classList.remove("active")
   }
  }) 
  })
})

const allInputEl = document.querySelectorAll(["input","textarea"]) 
const handelForm = (e)=>{
  e.preventDefault()  
  
  allInputEl.forEach((allInput)=>{
    if(!allInput.value){
  allInput.parentElement.parentElement.classList.add("error")

setTimeout(()=>{
  allInput.parentElement.parentElement.classList.remove("error")

},1000)
    }
  })
  
}

document.querySelector("form")?.addEventListener("submit",handelForm)