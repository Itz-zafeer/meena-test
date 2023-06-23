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