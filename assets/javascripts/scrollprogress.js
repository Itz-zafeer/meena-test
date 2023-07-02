document.addEventListener("DOMContentLoaded", function(event) {
        
    let offset = window.innerHeight+100;
    let circleContainer = document.querySelector(".circle-container");
    let circlePath = document.querySelector('.circle-container path');
    let pathLength = circlePath.getTotalLength();
    circlePath.style.transition =           circlePath.style.WebkitTransition = 'none';
    circlePath.style.strokeDasharray = pathLength;
    circlePath.style.strokeDashoffset = pathLength;
    circlePath.getBoundingClientRect();
    circlePath.style.transition = circlePath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';

    let updateLoader = () => {

      let scrollTop = window.scrollY;
      let docHeight = document.body.offsetHeight;
      let winHeight = window.innerHeight;
      let height = docHeight - winHeight;
      let progress = pathLength - (scrollTop * pathLength / height);
      circlePath.style.strokeDashoffset = progress;

      if (scrollTop > offset) {
        circleContainer.classList.add("active");
        document.querySelector('.cta').style.opacity= 1
        document.querySelector('header').classList.add('stickyHeader')
      } else {
        circleContainer.classList.remove("active");
        document.querySelector('.cta').style.opacity= 0
        document.querySelector('header').classList.remove('stickyHeader')


      }
            
    }

  circleContainer.onclick = function(){
    window.scrollTo({ top: 0, behavior: 'smooth'});
  }

  window.onscroll = () => {
    updateLoader();
  }

  updateLoader();

});