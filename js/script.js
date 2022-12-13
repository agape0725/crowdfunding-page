'use strict'

let bookmarkButton = document.querySelector('.bookmark-button');
let bookmarkIcon = document.querySelector('.bookmark-icon');
let bookmarkClick = document.querySelectorAll('.clicked').length;
let hoverBookmark = document.querySelector('.hover-bookmark');
let result = document.querySelectorAll(".pledge-output").length;
let continueButton = document.querySelectorAll(".continue-button").length;

let amount1 = document.getElementById("amount1");
let amount2 = document.getElementById("amount2");
let amount3 = document.getElementById("amount3");
let amount4 = document.getElementById("amount4");

let firstOutput = document.getElementById("first-output");
let secondOutput = document.getElementById("second-output");
let thirdOutput = document.getElementById("third-output");
let fourthOutput = document.getElementById("fourth-output");
let errorElement1 = document.getElementById("firstError");
let errorElement2 = document.getElementById("secondError");
let errorElement3 = document.getElementById("thirdError");
let errorElement4 = document.getElementById("fourthError");

function toggle() {
  let blur = document.getElementById('blur');
  blur.classList.toggle('blurred');
}

function bookMarked() {
  bookmarkButton.classList.toggle('bookmarked');
  bookmarkIcon.classList.toggle('bookmarked-icon');
  hoverBookmark.classList.toggle('hover-bookmark');
}

btn1.addEventListener("click", () => {
  firstOutput.textContent = `$${amount1.value}`;
  firstOutput.classList.remove("hide");
  secondOutput.classList.add("hide");
  thirdOutput.classList.add("hide");
  fourthOutput.classList.add('hide');
})

btn2.addEventListener("click", () => {
  secondOutput.textContent = `$${amount2.value}`;
  firstOutput.classList.add("hide");
  secondOutput.classList.remove("hide");
  thirdOutput.classList.add("hide");
  fourthOutput.classList.add('hide');
})

btn3.addEventListener("click", () => {
  thirdOutput.textContent = `$${outputReward1.value}`;
  firstOutput.classList.add("hide");
  secondOutput.classList.add("hide");
  thirdOutput.classList.remove("hide");
  fourthOutput.classList.add('hide');
})

btn4.addEventListener("click", () => {
  fourthOutput.textContent = `$${outputReward2.value}`;
  firstOutput.classList.add("hide");
  secondOutput.classList.add("hide");
  thirdOutput.classList.add("hide");
  fourthOutput.classList.remove('hide');
})


document.querySelectorAll(".continue-button").forEach((proceed) => proceed.addEventListener("click", (e) => {

  let parseAmount1 = parseInt(amount1.value);
  let parseAmount2 = parseInt(amount2.value);

  if (parseAmount2 < 75) {
    e.preventDefault()
    errorElement2.classList.add('error');
    errorElement2.textContent = "Please pledge to $75 or more."
    amount2.value = '';
  } else if (amount1.value === '' && amount2.value === '') {
    e.preventDefault();
    errorElement2.textContent = "Enter digit only.";
    errorElement2.classList.add('error');
    amount2.value = '';
  }

  if (parseAmount1 < 25) {
    e.preventDefault();
    errorElement1.classList.add('error');
    errorElement1.textContent = "Please pledge to $25 or more."
    amount1.value = '';
  } else if (amount1.value === '' && amount2.value === '') {
    e.preventDefault();
    errorElement1.textContent = "Enter digit only.";
    errorElement1.classList.add('error');
  } else {
    document.querySelector(".support-container").classList.add("popup");
    document.querySelector(".main-project-container").classList.remove("show");
    errorElement1.classList.remove('error');
    errorElement2.classList.remove('error');
    amount1.value = '';
    amount2.value = '';
  }

}))

document.querySelector(".got-it-button").addEventListener("click", function () {
  document.querySelector(".support-container").classList.remove("popup");
  document.body.style.overflow = "auto";
  toggle()
})

document.querySelector(".project-button").addEventListener("click", function (event) {
  document.querySelector(".main-project-container").classList.toggle("show");
  document.body.style.overflow = "hidden";
  toggle();
})

document.querySelector(".close-button").addEventListener("click", function (event) {
  document.querySelector(".main-project-container").classList.remove("show");
  document.body.style.overflow = "auto";
  errorElement1.classList.remove('error');
  errorElement2.classList.remove('error');
  toggle();
})

for (let click = 0; click <= bookmarkClick; click++) {
  document.querySelectorAll('.clicked')[click].addEventListener('click', function (event) {
    bookMarked();
  })
}


// document.querySelectorAll('.reward-close-button')[0].addEventListener('click', function () {
//   document.querySelectorAll('.selected')[0].classList.remove('select');
//   errorElement3.classList.remove('error');
//   errorElement4.classList.remove('error');
//   document.body.style.overflow = "auto";
//   toggle();
// })

// document.querySelectorAll('.reward-close-button')[1].addEventListener('click', function () {
//   document.querySelectorAll('.selected')[1].classList.remove('select');
//   errorElement3.classList.remove('error');
//   errorElement4.classList.remove('error');
//   document.body.style.overflow = "auto";
//   toggle();
// })

// for (let i = 0; i <= 0; i++) {
//   document.querySelectorAll('.reward-close-button')[i].addEventListener('click', function () {

//     switch (i) {
//       case 0:
//         document.querySelectorAll('.selected')[i].classList.remove('select');
//         document.body.style.overflow = "auto";
//         toggle();
//         break;

//       case 1:
//         document.querySelectorAll('.selected')[i].classList.remove('select');
//         document.body.style.overflow = "auto";
//         toggle();
//         break;
//     }

//   })
// }

// let rewardButton = document.querySelectorAll('.reward-button').length;

// for (let reward = 0; reward <= rewardButton; reward++) {
//   document.querySelectorAll('.reward-button')[reward].addEventListener('click', function () {
//     switch (reward) {
//       case 0:
//         document.querySelectorAll('.selected')[reward].classList.add('select');
//         errorElement3.classList.remove('error');
//         errorElement4.classList.remove('error');
//         document.body.style.overflow = "hidden";
//         toggle()
//         break;

//       case 1:
//         document.querySelectorAll('.selected')[reward].classList.add('select');
//         errorElement3.classList.remove('error');
//         errorElement4.classList.remove('error');
//         document.body.style.overflow = "hidden";
//         toggle()
//         break;

//       default:
//     }
//   })
// }


// Reward Button  // Reward Button  // Reward Button


