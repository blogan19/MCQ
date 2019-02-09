function createCalculation(){

   
   var a = document.getElementById('container1');
   var textNode ="";
   var s = "'"
    for(var i = 0; i < question.length; i++){
      textNode += '<br><div class="container" id="question'+i+'"><h3 class="qNo" id="questionNo'+i+'">'+question[i].qNo+'</h3><div class="well questionHeader" id="qJumbo'+i+'">  <p id="para'+i+'" style="font-size:14px">'+question[i].q+'</p></div> <div class="container"> <input type="radio" id="'+question[i].qNo+'r1" class="radio" name="'+question[i].qNo+'ans" onclick="checkAns('+s+question[i].o1+s+','+i+')"><label for="'+question[i].qNo+'r1">'+question[i].o1+'</label><input type="radio" id="'+question[i].qNo+'r2" class="radio" name="'+question[i].qNo+'ans" onclick="checkAns('+s+question[i].o2+s+','+i+')"><label for="'+question[i].qNo+'r2">'+question[i].o2+'</label><input type="radio" id="'+question[i].qNo+'r3" class="radio" name="'+question[i].qNo+'ans" onclick="checkAns('+s+question[i].o3+s+','+i+')"><label for="'+question[i].qNo+'r3">'+question[i].o3+'</label><input type="radio" id="'+question[i].qNo+'r4" class="radio" name="'+question[i].qNo+'ans" onclick="checkAns('+s+question[i].o4+s+','+i+')"><label for="'+question[i].qNo+'r4">'+question[i].o4+'</label><input type="radio" id="'+question[i].qNo+'r5" class="radio" name="'+question[i].qNo+'ans" onclick="checkAns('+s+question[i].o5+s+','+i+')"><label for="'+question[i].qNo+'r5">'+question[i].o5+'</label><input type="radio" id="'+question[i].qNo+'ansR" class="radio"><label for="'+question[i].qNo+'ansR" class="invis" style="opacity:0.6"></label></div></div></div><div class="lineBreak" id="lineBreak'+i+'"></div>';   
      }
      a.innerHTML = textNode;
  };
  createCalculation();

  
  var questionCount = 0;
  var score = 0;
  function checkAns(o, i){

    var no = i;
    
    var input = o;
    var answer = question[i].answer;
    var rad = $('input[name="'+question[i].qNo+'ans"]:checked').attr('id');
    var li = document.getElementById("feedbackLi"+questionCount);

    if(input == answer){
      toastC();
      document.getElementById(rad).nextSibling.style.backgroundColor = "green";
      li.style.backgroundColor="green";
      li.style.color = "white";
      score++;
    }else{
      document.getElementById(rad).nextSibling.style.backgroundColor = "red";
      li.style.backgroundColor="red";
      li.style.color = "white";
      var correctAns = document.getElementById(question[i].qNo +"ansR").nextSibling;
      correctAns.innerHTML = "<b>Correct Answer: </b>" + question[i].answerS;
      correctAns.style.display = "block";
      toastI();
    }
    
    var radioNode = document.getElementsByName(question[i].qNo+'ans');

    for(i=0; i<radioNode.length; i++){
        if(radioNode[i].checked != true){
          radioNode[i].nextSibling.style.display = "none";
        }
        radioNode[i].disabled = true;
    }
    
    questionCount++;
    document.getElementById('scoreDisp').style.display = "block";
  	document.getElementById('scoreDisp').innerHTML = "Score: " + score + "/" + questionCount;
     if(questionCount == question.length){
      setTimeout(quizFinish, 500);
      document.getElementById('scoreFin').innerHTML = "Score: " + score + "/" + questionCount;
      var perc = ((score/questionCount)*100).toFixed();
      document.getElementById('scorePerc').innerHTML = perc + "%";

      $(".score").text();
      $(".fill").css("height", perc + "%");
     }
  }

  function generateFeedbackList(){
      var ansText ="";
    for(i=0; i <question.length; i++){
      ansText+= '<ul class="list-group"><li class="list-group-item active"><b>Question '+(i+1)+':</b></li><li class="list-group-item" id="feedbackLi'+i+'"> '+question[i].q+' Options: '+question[i].o1+','+question[i].o2+', '+question[i].o3+', '+question[i].o4+', '+question[i].o5+'. Answer: '+question[i].answer+'</li><li class="list-group-item"><b>'+question[i].answerS+'</b></li>';
    }
    document.getElementById('feedbackList').innerHTML = ansText;
    console.log(document.getElementById('feedbackList'))
 
  }
  generateFeedbackList();

  function quizFinish(){
    $("#container1").hide();
    $("#feedback").show();
    highScore();
  }

function refresh(){
  location.reload();
}

function highScore(){
  if(localStorage.getItem(quizName)== null){
    localStorage.setItem(quizName, score);
    var hs = score;
    toastnewHS();
  }else if(localStorage.getItem(quizName) != null){
    var ps = localStorage.getItem(quizName, score);
    if(ps > score){
      var hs = ps;
    }else if(ps < score){
      var hs = score;
      localStorage.setItem(quizName, score);
      toastnewHS();
    }
  }
  
  //console.log(hs);
  document.getElementById("highScore").innerHTML = "Highest Score: " + hs + "/" + questionCount + " <span class='glyphicon glyphicon-star star'></span>";
}

//localStorage.clear();