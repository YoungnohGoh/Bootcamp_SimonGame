var gamePattern = [];
var userClickedPattern = [];

var buttonColours = ["red", "blue", "green", "yellow"];

function makeSound(id){
  switch (id){
    case 'green':
        var green = new Audio('sounds/green.mp3');
        green.play();
        if (green !== undefined) {
            green.then(_ => {
              // Automatic playback started!
              // Show playing UI.
            })
            .catch(error => {
              // Auto-play was prevented
              // Show paused UI.
        });
        break;

    case 'blue':
        var blue = new Audio('sounds/blue.mp3');
        blue.play();
        if (blue !== undefined) {
            blue.then(_ => {
              // Automatic playback started!
              // Show playing UI.
            })
            .catch(error => {
              // Auto-play was prevented
              // Show paused UI.
        });
        break;

    case 'red':
        var red = new Audio('sounds/red.mp3');
        red.play();
        if (red !== undefined) {
            red.then(_ => {
              // Automatic playback started!
              // Show playing UI.
            })
            .catch(error => {
              // Auto-play was prevented
              // Show paused UI.
        });
        break;

    case 'yellow':
        var yellow = new Audio('sounds/yellow.mp3');
        yellow.play();
        if (yellow !== undefined) {
            yellow.then(_ => {
              // Automatic playback started!
              // Show playing UI.
            })
            .catch(error => {
              // Auto-play was prevented
              // Show paused UI.
        });
        break;

    default:
        var wrong = new Audio('sounds/wrong.mp3');
        wrong.play();
        muted="muted";
        break;
  }
}

function nextSequence() {
  var randomNumber = Math.floor(Math.random()*4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  console.log(randomChosenColour);
  makeSound(randomChosenColour);
}
nextSequence();
// function(name){
//
// };

// $(".btn").on("click", function(){
//   var userChosenColour = this.id;
//   userClickedPattern.push(userChosenColour);
//   console.log(userClickedPattern);
//   $(this).fadeOut(50);
//   $(this).fadeIn(50);
//   makeSound(this.id);
// });
