 $(document).ready(function(){
    
    //Generate random number

    function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
    }
    
    var target = 0;
    var beer = 0;
    var shots = 0;
    var jack = 0;
    var mojito = 0;

    var target = getRandomInt(35,69);
    console.log ("target: " + target);
    $('#randomNumber').text(target);

    var beer = getRandomInt(1,6);
    console.log("beer:" + beer);
    beerValue = parseInt(beer);
    $('#beer').attr("data", beerValue);

    var shots = getRandomInt(1,6);
    console.log("shots: " + shots);
    shotsValue = parseInt(shots);
    $('#shots').attr("data", shotsValue);

    var jack = getRandomInt(1,6);
    console.log("jack: " + jack);
    jackValue = parseInt (jack);
    $('#jack').attr("data",jackValue);

    var mojito = getRandomInt(1,6);
    console.log("mojito: " + mojito);
    mojitoValue = parseInt (mojito);
    $('#mojito').attr("data",mojitoValue);

 //Reset

 function reset() {
  target = getRandomInt(25,50);
  console.log("new target: " + target);
  $('#randomNumber').text(target);
  $('#yourLevel').text("0");

  beerLevel = 0;
  shotsLevel = 0;
  jackLevel = 0;
  mojitoLevel = 0;
  beerValue = 0;
  shotsValue = 0;
  jackValue = 0;
  mojitoValue = 0;

  var beer = getRandomInt(1,6);
  console.log("beer:" + beer);
  beerValue = parseInt(beer);
  $('#beer').attr("data", beerValue);

  var shots = getRandomInt(1,6);
  console.log("shots: " + shots);
  shotsValue = parseInt(shots);
  $('#shots').attr("data", shotsValue);

  var jack = getRandomInt(1,6);
  console.log("jack: " + jack);
  jackValue = parseInt (jack);
  $('#jack').attr("data",jackValue);

  var mojito = getRandomInt(1,6);
  console.log("mojito: " + mojito);
  mojitoValue = parseInt (mojito);
  $('#mojito').attr("data",mojitoValue);

}

  function updateMusicWin () { 
  var snd = new Audio("./assets/music/win.wav");
  snd.play();
  }

  function updateMusicLoss () {
  var snd = new Audio("./assets/music/loss.mp3");
  snd.play();
  }

    //update Scores
    var wins = 0;
    var losses = 0;

    function updateWin() {
      wins++;
      $('#wins').text(wins);
      reset();
      updateMusicWin();
      $("#result").css("color","green");
      $("#result").html('<br>' + "You reached the ideal level! Now just chill...or press any drink to start next round" + '<br>');
    };

    function updateLoss() {
      losses++;
      $('#losses').text(losses);
      updateMusicLoss();
      $("#result").css("color","red");
      $("#result").html('<br>' + "You had too much! Press any drink to start next round!" + '<br>');
      reset();
    };

    //Clicks
    
    var beerLevel = 0;
    var shotsLevel = 0;
    var jackLevel = 0;
    var mojitoLevel = 0;

    $('.images').on("click", "#beer", function(){
      var imgValue = ($(this).attr("data"));
      imgValue = parseInt(imgValue);
      beerLevel += imgValue;
      console.log(beerLevel);
      yourLevel();
    })

    $('.images').on("click", "#shots", function(){
      var imgValue = ($(this).attr("data"));
      imgValue = parseInt(imgValue);
      shotsLevel += imgValue;
      console.log(shotsLevel);
      yourLevel();
    })

    $('.images').on("click", "#jack", function(){
      var imgValue = ($(this).attr("data"));
      imgValue = parseInt(imgValue);
      jackLevel += imgValue;
      console.log(jackLevel);
      yourLevel();
    })

    $('.images').on("click", "#mojito", function(){
      var imgValue = ($(this).attr("data"));
      imgValue = parseInt(imgValue);
      mojitoLevel += imgValue;
      console.log(mojitoLevel);
      yourLevel();
    })

    function yourLevel(){
    $('#result').html("<br>"+"<br>");
    yourTotalLevel = beerLevel + shotsLevel + jackLevel + mojitoLevel;
    $("#yourLevel").text(yourTotalLevel);
        if (yourTotalLevel === target) {
        updateWin();
      } else if (yourTotalLevel > target){
        updateLoss();
      }
    }

  })

