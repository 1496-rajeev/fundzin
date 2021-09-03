console.log("custom js");

function onformSubmit() {
  submitted = true;
  localStorage.setItem("form_submitted", submitted);
}

function showHidealert() {
  console.log("func call on pageload");
  console.log(localStorage.getItem("form_submitted"));
  if (localStorage.getItem("form_submitted") === "true") {
    var element = document.getElementById("success_alert");
    element.classList.add("show");
  } else {
    var element = document.getElementById("success_alert");
    element.classList.add("hide");
  }
}
