function isElementInViewport(element) {
  var rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

document.addEventListener("DOMContentLoaded", function (event) {
  let offset =
    window.location.pathname == "/" || window.location.pathname == "/index.html"
      ? window.innerHeight + 100
      : 100;
  let circleContainer = document.querySelector(".circle-container");
  let circlePath = document.querySelector(".circle-container path");
  let pathLength = circlePath.getTotalLength();
  circlePath.style.transition = circlePath.style.WebkitTransition = "none";
  circlePath.style.strokeDasharray = pathLength;
  circlePath.style.strokeDashoffset = pathLength;
  circlePath.getBoundingClientRect();
  circlePath.style.transition = circlePath.style.WebkitTransition =
    "stroke-dashoffset 10ms linear";

  let updateLoader = () => {
    let scrollTop = window.scrollY;
    let docHeight = document.body.offsetHeight;
    let winHeight = window.innerHeight;
    let height = docHeight - winHeight;
    let progress = pathLength - (scrollTop * pathLength) / height;
    circlePath.style.strokeDashoffset = progress;

    if (scrollTop > offset) {
      circleContainer.classList.add("active");
      if (
        window.location.pathname == "/" ||
        window.location.pathname == "/index.html"
      ) {
        document.querySelector(".cta").style.opacity = 1;
      }
      document.querySelector("header").classList.add("stickyHeader");
    } else {
      circleContainer.classList.remove("active");
      if (
        window.location.pathname == "/" ||
        window.location.pathname == "/index.html"
      ) {
        document.querySelector(".cta").style.opacity = 0;
      }
      document.querySelector("header").classList.remove("stickyHeader");
    }
  };

  circleContainer.onclick = function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const animation2 = document.getElementById("lineanimation2");
  const heartPath = document.getElementById("heartLine");
  const animation3 = document.getElementById("lineanimation3");
  const heartPath3 = document.getElementById("heartLine3");
  if (heartPath) {
    heartPath.parentElement.style.opacity = 0;
  }
  if (heartPath3) {
    heartPath3.parentElement.style.opacity = 0;
  }
  let isFirstVisitAnimation2 = false;
  let isFirstVisitAnimation3 = false;

  if (heartPath) {
    if (isElementInViewport(animation2)) {
      if (!isFirstVisitAnimation2) {
        heartPath.parentElement.style.opacity = 1;
        const pathSize = heartPath.getTotalLength();
        console.log(pathSize);
        heartPath.style.strokeDasharray = `${pathSize}px`;
        heartPath.style.strokeDashoffset = `${pathSize}px`;
        heartPath.style.animation = "line-anime 3s ease-in forwards";
        heartPath.style.animationDelay = `${0 * 0.3}s`;
        isFirstVisitAnimation2 = true;
      }
      // paths.forEach((path, index) => {
      // });
    }
  }

  window.onscroll = () => {
    updateLoader();
    if (heartPath) {
      if (isElementInViewport(animation2)) {
        if (!isFirstVisitAnimation2) {
          heartPath.parentElement.style.opacity = 1;
          const pathSize = heartPath.getTotalLength();
          console.log(pathSize);
          heartPath.style.strokeDasharray = `${pathSize}px`;
          heartPath.style.strokeDashoffset = `${pathSize}px`;
          heartPath.style.animation = "line-anime 3s ease-in forwards";
          heartPath.style.animationDelay = `${0 * 0.3}s`;
          isFirstVisitAnimation2 = true;
        }
        // paths.forEach((path, index) => {
        // });
      }
    }
    if (heartPath3) {
      if (isElementInViewport(animation3)) {
        if (!isFirstVisitAnimation3) {
          heartPath3.parentElement.style.opacity = 1;
          const pathSize = heartPath3.getTotalLength();
          heartPath3.style.strokeDasharray = `${pathSize}px`;
          heartPath3.style.strokeDashoffset = `${pathSize}px`;
          heartPath3.style.animation = "line-anime 3s ease-in forwards";
          heartPath3.style.animationDelay = `${0 * 0.3}s`;
          isFirstVisitAnimation2 = true;
        }
        // paths.forEach((path, index) => {
        // });
      }
    }
  };

  updateLoader();
});
if (
  !(
    window.location.pathname == "/" || window.location.pathname == "/index.html"
  )
) {
  document.querySelector(".cta").style.opacity = 1;
}

document.querySelectorAll(".heroLine").forEach((heroLine, index) => {
  heroLine.style.opacity = 1;
  const path = heroLine.querySelector("path");
  const pathSize = path.getTotalLength();

  path.style.strokeDasharray = `${pathSize}px`;
  path.style.strokeDashoffset = `${pathSize}px`;
  path.style.animation = "line-anime 1s ease forwards";
  path.style.animationDelay = `${index * 0.5}s`;
});

// document.querySelectorAll('.asterisk path').forEach((path,index)=>{
//   const pathSize = path.getTotalLength();

//   path.style.strokeDasharray = `${pathSize}px`;
//   path.style.strokeDashoffset = `${pathSize}px`;
//   path.style.animation = "line-anime 0.5s ease forwards";
//   path.style.animationDelay = `${index * 0.5}s`;
// })

document.querySelectorAll("#arrowAnimation path").forEach((path, index) => {
  if (index == 0) {
    const pathSize = path.getTotalLength();

    path.style.strokeDasharray = `${pathSize}px`;
    path.style.strokeDashoffset = `${pathSize}px`;
    path.style.animation = "line-anime 1s ease forwards";
    path.style.animationDelay = `0s`;
  } else {
    console.log(index);
    const pathSize = path.getTotalLength();
    path.style.strokeDasharray = `${pathSize}px`;
    path.style.strokeDashoffset = `${pathSize}px`;
    // path.style.animation = " line-anime 0.5s ease forwards";
    path.style.animation =
      " 0.5s ease-in 0.7s 1 normal forwards running line-anime";
  }
});
