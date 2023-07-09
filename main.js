let allFilterButton = document.querySelectorAll(".filter-button span");
let allImages = document.querySelectorAll(".imges .box");

allFilterButton.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    allImages.forEach((img) => {
      img.style.display = "none";
    });
    allImages.forEach((img) => {
      if (e.target.dataset.filter === "all") {
        img.style.display = "block";
      } else if (e.target.dataset.filter === img.dataset.filter) {
        img.style.display = "block";
      }
    });
  });
});
