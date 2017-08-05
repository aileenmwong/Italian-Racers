window.onload = function() {
  console.log('Racers Ready!');

  //grab all the DOM elements and wrap them in a container
  const $els = {
    redCar: document.querySelector('#red'),
    blueCar: document.querySelector('#blue'),
    racetrack: document.querySelector('.racetrack')
  }

  var rPosition = 0;
  var bPosition = 0;

  //make a function to move the cars
  function animate(move){

    console.log($els.redCar)
    console.log($els.blueCar)
    console.log(move);

    //if keyCode 90(z key) is pressed, move the red car 2px
    if (move.keyCode === 90){
      rPosition += 2;
      $els.redCar.style.left = rPosition + 'px';
    }
    //if keyCode 39(right arrow key) is pressed, move the blue car 2px
    if (move.keyCode === 39){
      bPosition += 2;
      $els.blueCar.style.left = bPosition + 'px';
    }
  }



  //if one car gets to a certain position, that car is the winner
  // function getWinner() {
  //   if (rPosition === ){
  //     $els.querySelector('#result').innerHTML = 'Red winner'
  //   }
  //   else if (bPosition === //finish point)
  //     return ('Blue Car is the winner')
  //   //print winner in results box

  // }

  //initialize the cars put click event on button, inititalize function animate
  let button = document.querySelector('button');
  button.addeventlistener('click', start);

  function start() {
    document.onkeydown = animate;
  }

  //reset all cars back to point 0
  function reset() {
    //reset positions
    //reset inner html of results

  }





};




