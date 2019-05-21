var autoplayWanted = true;
var gamePattern = [];
var userClickedPattern = [];
var buttonColours = ["red", "blue", "green", "yellow"];
var level = 0;
var firstCheck = 0;

function nextSequence() {
  var randomNumber = Math.floor(Math.random()*4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  $("."+randomChosenColour).fadeOut(50).fadeIn(50);
  animatePress(randomChosenColour);
  playSound(randomChosenColour);
  level = level + 1;
}
//
function playSound(name){
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
};

function animatePress(currentColour){
    $("#"+currentColour).addClass("pressed");
  setTimeout(function(){
    $("#"+currentColour).removeClass("pressed");}, 100);
}

$(".btn").on("click", function(){
  var userChosenColour = this.id;
  userClickedPattern.push(userChosenColour);
  $(this).fadeOut(50).fadeIn(50);
  playSound(userChosenColour);
  animatePress(userChosenColour);
});

$("body").keypress(function(){
  ++firstCheck;
  if(firstCheck===1){
    nextSequence();
    $("h1").text("level "+level);
  }
});
