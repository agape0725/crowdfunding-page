'use strict'

document.querySelectorAll('.box-offer').forEach((hidden) => hidden.addEventListener("click", () => {
  if (hidden.classList.contains("show")) {
    hidden.classList.add("show")
  } else {
    document.querySelectorAll('.box-offer').forEach(hidden => hidden.classList.remove("show"))
    hidden.classList.add("show");
  }
}))

let clicked = document.querySelectorAll('.box-offer').length;

for (let x = 0; x <= clicked; x++) {
  document.querySelectorAll(".box-offer")[x].addEventListener("click", function (event) {

    switch (x) {

      case 0:
        document.querySelectorAll(".amount-continue-flex")[0].classList.add("visible");
        document.querySelectorAll(".amount-continue-flex")[1].classList.remove("visible");
        document.querySelectorAll(".amount-continue-flex")[2].classList.remove("visible");

        document.querySelectorAll(".radio-button")[x].checked = true;

        errorElement1.classList.remove('error');
        errorElement2.classList.remove('error');
        amount2.value = '';
        break;

      case 1:
        document.querySelectorAll(".amount-continue-flex")[0].classList.remove("visible");
        document.querySelectorAll(".amount-continue-flex")[1].classList.add("visible");
        document.querySelectorAll(".amount-continue-flex")[2].classList.remove("visible");

        document.querySelectorAll(".radio-button")[x].checked = true;


        errorElement2.classList.remove('error');
        amount2.value = '';
        break;

      case 2:
        document.querySelectorAll(".amount-continue-flex")[0].classList.remove("visible");
        document.querySelectorAll(".amount-continue-flex")[1].classList.remove("visible");
        document.querySelectorAll(".amount-continue-flex")[2].classList.add("visible");

        document.querySelectorAll(".radio-button")[x].checked = true;

        errorElement1.classList.remove('error');
        amount1.value = '';
        break;

    }
  })
}


