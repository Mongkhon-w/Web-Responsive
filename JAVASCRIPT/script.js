function toggleHamburger(el) {
    el.classList.toggle("change");
    const slide = document.getElementById("slide");
    
    if (slide.style.display === "none" || slide.style.display === "") {
      slide.style.display = "block";
    } else {
      slide.style.display = "none";
    }
  }
  
  window.addEventListener("resize", function () {
    const slide = document.getElementById("slide");
    if (window.innerWidth >= 768) {
      slide.style.display = "none"; 
    }
    if (window.innerWidth <= 1023) {
      slide.style.display = "none"; 
    }else {
      slide.style.display = "flex"; 
    }
  });