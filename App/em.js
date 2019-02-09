

function generateQ(){  	
	for(i = 0; i < options.length; i++){
	 	var id = "tO"+(i+1);
	 	document.getElementById(id).innerHTML = options[i];
	}
	
	var str = "";
	for(i=0; i <question.length; i++){
	 str+= '<div><h3 class="tWhite" id="h'+question[i].qNo+'">'+question[i].qNo+'</h3><br><div class="jumbotron bgWhite textCentre" id="jumbo'+question[i].qNo+'">'+question[i].q+'</div><div class="emSel" id="emSel'+question[i].qNo+'"><select class="sel form-control" id="sel'+question[i].qNo+'"><option value="select">Select Answer:</option><option value="'+options[0]+'">'+options[0]+'</option><option value="'+options[1]+'">'+options[1]+'</option><option value="'+options[2]+'">'+options[2]+'</option><option value="'+options[3]+'">'+options[3]+'</option><option value="'+options[4]+'">'+options[4]+'</option><option value="'+options[5]+'">'+options[5]+'</option><option value="'+options[6]+'">'+options[6]+'</option><option value="'+options[7]+'">'+options[7]+'</option></select></div><button class="btn btn-block grad2 tWhite" id="submitBtn'+question[i].qNo+'" onclick="checkAns('+i+')"> Check Answer</button></div><br><div class="lineBreak"></div>'
	};
	document.getElementById('container1').innerHTML = str;
}
generateQ();

var count = 0;
var score = 0;
function checkAns(qNo){
	var ans = question[qNo].a;
	var input = document.getElementById("sel"+question[qNo].qNo)
	var i = input.options[input.selectedIndex].value;
	if(i == "select"){
		return;
	}
	
	document.getElementById("jumbo"+question[qNo].qNo).style.opacity = 0.5;
	document.getElementById("h"+question[qNo].qNo).style.display = "none";
	document.getElementById("submitBtn"+question[qNo].qNo).style.display="none";
	var select = document.getElementById("emSel"+question[qNo].qNo);

	if(ans == i){
		select.style.backgroundColor = "green";
		select.style.color = "white";
		select.disabled = true;		
		toastC();
		score++;
	}else{
		select.style.backgroundColor = "red";
		select.style.color = "white";
		select.disabled = true;
		toastI();
	}
	count++;
	var scoreDisp = document.getElementById('scoreDisp')
	scoreDisp.innerHTML = "Score: " + score + "/" + count;
	scoreDisp.style.display = "block";
	if(count == question.length){
		finish();
	}
}

function finish(){
	document.getElementById('feedbackDiv').style.display = "block";
	document.getElementById('scoreFin').innerHTML = "Score: " + score + "/" + count;
	document.getElementById('scorePerc').innerHTML = ((score/count)*100).toFixed() + "%";
	$("#qCont").hide();
	$("#container1").hide();
	highScore();
	
}

function displayAnswers(){
	var answerList ="";
for(i=0; i <question.length; i++){
      answerList+= '<ul class="list-group"><li class="list-group-item active"><b>Question '+(i+1)+':</b> '+question[i].q+'</li><li class="list-group-item">'+question[i].a+'</li>';
    }
    document.getElementById('answerList').innerHTML = answerList;
    $("#answerList").slideToggle();
}

function refresh(){
	location.reload();
}

var hs;
function highScore(){

 if(localStorage.getItem(quizName)== null){
    localStorage.setItem(quizName, score);
    var hs = score;
    if( hs > 0){
    	toastnewHS();
    }
    
  }else if(localStorage.getItem(quizName)!= null){
    var ps = localStorage.getItem(quizName, score);
    if(ps > score){
       hs = ps;
    }else if(ps < score){
       hs = score;
      localStorage.setItem(quizName, score);
     	if(hs > 0){
     		 toastnewHS();
     	}
     
    }
  }
  console.log(hs);
  document.getElementById("highScore").innerHTML = "Highest Score: " + hs + "/" + count + " <span class='glyphicon glyphicon-star star'>";
}
highScore();
