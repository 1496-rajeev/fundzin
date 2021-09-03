function onformSubmit() {
  submitted = true;
  localStorage.setItem("form_submitted", submitted);
}

function showHidealert() {
  console.log("func call on pageload");
  if (localStorage.getItem("form_submitted") === "true") {
    var element = document.getElementById("success_alert");
    element.classList.add("show");
    setTimeout(function () {
      console.log("called after 5 sec");
      element.classList.remove("show");
    }, 5000);
  } else {
    var element = document.getElementById("success_alert");
    element.classList.add("hide");
  }
}
