var buttonColors = ["red","blue","green","yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var started = false;

$(document).keydown(function(){
        if(!started){
                nextSequence();
                started = true;
});
$(".btn").click(
        function (){
            var userChosenColor = this.id;
            userClickedPattern.push(userChosenColor);
           playSound(userChosenColor);
           animatePress("#" +userChosenColor);
           checkAnswer(userClickedPattern.length-1);
        }
        )


        function nextSequence(){
            userClickedPattern = [];
            level++;
            $("h1").html("Level " + level);
    
            var randomNumber = Math.floor(Math.random()*4);
            var randomChosenColor = buttonColors[randomNumber];
            gamePattern.push(randomChosenColor);
    
            $("#" + randomChosenColor).fadeOut(100).fadeIn(100);
            playSound(randomChosenColor);
        }
    function checkAnswer(currentLevel){
        if( gamePattern[currentLevel] === userClickedPattern[currentLevel]){
            if(gamePattern.length === userClickedPattern.length){
                setTimeout(function(){
                    nextSequence();
                },1000);
            }
        }
        else{
            $("body").addClass("game-over");
           playSound("wrong")
            setTimeout(function(){
                $("body").removeClass("game-over");
                
            },200)
            $("h1").text("Game Over, Press Any Key To Restart");
            startOver();
        }
       
    }
    
function playSound(name){
    var audio = new Audio("sounds/" + name+".mp3");
    audio.play();
}

    function animatePress(currentColor){
        $(currentColor).addClass("pressed");
        setInterval( function() {
            $(currentColor).removeClass("pressed");
        }, 100);
    }

function startOver(){
    gamePattern = [];
    level = 0;
   stareted = false;
}




