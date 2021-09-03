console.log("custom js");

const nextBtn = document.getElementById("nextBtn");

nextBtn.addEventListener("click", function () {
  localStorage.setItem("form_submitted", submitted);
});
