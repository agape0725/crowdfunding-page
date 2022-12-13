

// document.querySelectorAll('.proceed').forEach((button) => button.addEventListener('click', (e) => {
//   console.log('button')

//   document.querySelectorAll('.reward-container')[0].classList.add('show');
// }))

let clicked = document.querySelectorAll('.proceed').length;
let outputReward1 = document.getElementById('selected-reward-output1');
let outputReward2 = document.getElementById('selected-reward-output2');
let outputError1 = document.getElementById('output1-error');
let outputError2 = document.getElementById('output2-error');


document.querySelectorAll('.confirm-reward').forEach((confirm) => confirm.addEventListener('click', function (e) {

  outputReward1 = parseInt(outputReward1.value);
  outputReward2 = parseInt(outputReward2.value);

  if (outputReward2 < 75) {
    outputError2.textContent = 'Pledge $75 or more.'
    outputError2.classList.add('show');
  } else if (outputReward1 !== '') {
    outputError2.textContent = 'Enter digit.'
    outputError2.classList.add('show');
  }

  if (outputReward1 < 25) {
    outputError1.textContent = 'Pledge $25 or more.'
    outputError1.classList.add('show');
    outputReward1.value = '';
  } else if (outputReward1 === '') {
    outputError1.textContent = 'Enter digit.'
    outputError1.classList.add('show');
    outputReward1.value = '';
  } else {
    console.log('yes');
  }

}))


for (let i = 0; i <= clicked; i++) {

  document.querySelectorAll('.proceed')[i].addEventListener('click', function (e) {
    let textContent = this.textContent;
    console.log(textContent);

    switch (i) {
      case 0:
        document.querySelectorAll('.reward-container')[i].classList.add('show');
        break;

      case 1:
        document.querySelectorAll('.reward-container')[i].classList.add('show');
        break;

      default: ''
    }


    document.querySelectorAll('.close-icon').forEach((icon) => icon.addEventListener('click', (e) => {
      switch (i) {
        case 0:
          document.querySelectorAll('.reward-container')[i].classList.remove('show')
          break;

        case 1:
          document.querySelectorAll('.reward-container')[i].classList.remove('show')
          break;

        default: ''
      }
    }))
  })
}









