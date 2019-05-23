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
  $("h1").text("level "+level);
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

function checkAnswer(currentLevel){
  if(gamePattern[currentLevel] === userClickedPattern[currentLevel]){
    if(gamePattern[gamePattern.length-1] === userClickedPattern[currentLevel] && gamePattern.length-1 === currentLevel){
      setTimeout(function(){
        nextSequence();
      },1000);
      userClickedPattern = [];
    }else{return;}
  }else{
    playSound("wrong");
    $("body").addClass("game-over");
    setTimeout(function(){
      $("body").removeClass("game-over");
    },200);
    $("h1").text("Game Over, Press Any Key to Restart");
    startOver();
  }
}

function startOver(){
  level = 0;
  gamePattern = [];
  userClickedPattern = [];
  firstCheck = 0;
}

$(".btn").on("click", function(){
  //if user doesn't press a key, click cannot be active.
  //input the code here.
  if(userClickedPattern.length-1 < 0 && gamePattern.length-1 < 0){
    return;
  }else{
    var userChosenColour = this.id;
    userClickedPattern.push(userChosenColour);
    $(this).fadeOut(50).fadeIn(50);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length-1);
  }
});

$("body").keypress(function(){
  ++firstCheck;
  if(firstCheck===1){
    nextSequence();
  }
});
