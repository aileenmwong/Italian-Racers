window.onload = function() {
  console.log('Racers Ready!');

  //grab all the DOM elements and wrap them in a container
  const $els = {
    redCar: document.querySelector('#red'),
    blueCar: document.querySelector('#blue'),
    racetrack: document.querySelector('.racetrack')
  }

  let rPosition = 0;
  let bPosition = 0;

  //make a function to move the cars
  function animate(move){

    // console.log($els.redCar)
    // console.log($els.blueCar)
    // console.log(move);
    // console.log($els.redCar.style.left)

    //if keyCode 90(z key) is pressed, move the red car 5px
    if (move.keyCode === 90){
      rPosition += 10;
      //console.log(rPosition)
      $els.redCar.style.left = rPosition + 'px';
      }
    //if keyCode 39(right arrow key) is pressed, move the blue car 5px
    if (move.keyCode === 39){
      bPosition += 10;
      $els.blueCar.style.left = bPosition + 'px';
    }
    getWinner();

  }

    //if one car gets to the end position, that car is the winner
  function getWinner() {
    if ($els.redCar.style.left === '450px'){
      document.querySelector('#result').innerHTML = 'Peach is the Winner!';
      //document.removeEventListener('onkeydown', animate);
    }
    else if ($els.blueCar.style.left === '450px'){
      document.querySelector('#result').innerHTML = 'Yoshi is the Winner!';
      //document.removeEventListener('onkeydown', animate);
    }


  }

  //grab the start button
  let startButton = document.querySelector('#beginGame');
  //when button is clicked, start game
  startButton.addEventListener('click', start);

  //initialize the cars put click event on button, inititalize function animate
  function start() {
  // When user presses a key down, begin moving car
    document.onkeydown = animate;
  };


  //grab the reset button
  let resetButton = document.querySelector('#resetGame');
  //when button is clicked, reset game
  resetButton.addEventListener('click', reset);

  function reset() {
    //TA told me to do this :)
    location.reload();

    // //reset all cars back to point 0
    // let rPosition = 0;
    // let bPosition = 0;
    // //reset results box to blank
    // $els.querySelector('#result').innerHTML = ' ';
  };
}






