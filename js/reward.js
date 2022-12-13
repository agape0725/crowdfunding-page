

// document.querySelectorAll('.proceed').forEach((button) => button.addEventListener('click', (e) => {
//   console.log('button')

//   document.querySelectorAll('.reward-container')[0].classList.add('show');
// }))

let clickedReward = document.querySelectorAll('.reward-button').length;
let outputReward1 = document.getElementById('selected-reward-output1');
let outputReward2 = document.getElementById('selected-reward-output2');
let outputError1 = document.getElementById('output1-error');
let outputError2 = document.getElementById('output2-error');

let reward = document.querySelectorAll('.confirm-reward').length;

let btn3 = document.getElementById('btn3');
let btn4 = document.getElementById('btn4');


document.querySelectorAll('.confirm-reward')[0].addEventListener('click', function () {
  let parseReward1 = parseInt(outputReward1.value);

  if (parseReward1 < 25) {

    outputError1.classList.add('show')
    outputError1.textContent = 'Pledge minimum of $25.'
    console.log(outputReward1.value);
    outputReward1.value = '';

  } else if (outputReward1.value === '') {

    outputError1.classList.add('show')
    outputError1.textContent = 'Enter digit.'
    console.log('Error');
    outputReward1.value = '';

  } else {

    console.log('Correct');

    document.querySelectorAll('.reward-container')[0].classList.remove('show');
    document.querySelector(".support-container").classList.add("popup");
    outputError1.classList.remove('show')
    outputReward1.value = '';

  }
})

document.querySelectorAll('.confirm-reward')[1].addEventListener('click', function () {
  let parseReward2 = parseInt(outputReward2.value);

  if (parseReward2 < 75) {

    outputError2.classList.add('show')
    outputError2.textContent = 'Pledge minimum of $75.'
    console.log('Error');
    outputReward2.value = '';

  } else if (outputReward2.value === '') {

    outputError2.classList.add('show')
    outputError2.textContent = 'Enter digit.'
    console.log('Error');
    outputReward2.value = '';

  } else {

    console.log('Correct');
    document.querySelectorAll('.reward-container')[1].classList.remove('show');
    document.querySelector(".support-container").classList.add("popup");
    outputError2.classList.remove('show');
    outputReward2.value = '';

  }
})

for (let i = 0; i <= clickedReward; i++) {



  document.querySelectorAll('.reward-button')[i].addEventListener('click', function (e) {
    let textContent = this.textContent;


    switch (i) {
      case 0:
        document.querySelectorAll('.reward-container')[i].classList.add('show');
        document.body.style.overflow = "hidden";
        e.preventDefault();
        toggle();

        break;

      case 1:
        document.querySelectorAll('.reward-container')[i].classList.add('show');
        document.body.style.overflow = "hidden";
        e.preventDefault();
        toggle();
        break;

      default: ''
    }

  })



  document.querySelectorAll('.close-icon').forEach((icon) => icon.addEventListener('click', (e) => {
    switch (i) {
      case 0:
        document.querySelectorAll('.reward-container')[i].classList.remove('show')
        document.body.style.overflow = "auto";
        toggle();
        toggle();
        outputError1.classList.remove('show')
        outputError2.classList.remove('show')
        break;

      case 1:
        document.querySelectorAll('.reward-container')[i].classList.remove('show')
        document.body.style.overflow = "auto";
        outputError1.classList.remove('show')
        outputError2.classList.remove('show')
        toggle();
        break;

      default: ''
    }

  }))
  // })

}










