
var newStreakCount = 0;
function switchDisplay(){
    $('#lengthDiv').slideUp();
    $('#container1').slideDown();
    newStreakCount = 0;
}


var quizLength = 0;
function setQuizLength(l){  
if(l == 0){
    l == question.length;
} 
 quizLength = l;
}

var random = [];
function generateRan(){
    var max = question.length;
    for(var i = 0;i<max ; i++){
        var rn = Math.floor(Math.random()*max);
        if(random.indexOf(rn) == -1){
            random.push(rn);
        }
        else
         i--;
    }
 
}
generateRan();

var radioNode = document.getElementsByName("r");
var count = 0;
function setQuestions(){
    for(i=0; i<radioNode.length; i++){
        radioNode[i].disabled = false;
    }

    var n = random[count];
    $("input[type='radio']").prop("checked",false);
    $("label").css({"backgroundColor": "#ffffff", "color":"#000000"});

    $("#q").html(question[n].q);
    $("#l1").html(question[n].o1);
    $("#l2").html(question[n].o2);
    $("#l3").html(question[n].o3);
    $("#l4").html(question[n].o4);
    $("#l5").html(question[n].o5);

    $("#r1").val(question[n].o1);
    $("#r2").val(question[n].o2);
    $("#r3").val(question[n].o3);
    $("#r4").val(question[n].o4);
    $("#r5").val(question[n].o5);  
}

var incorrectFeedback ="";
var score = 0;
var streakArr = [];
var answeredQuestions = [];
var answeredFeedback = [];
function checkAns(){
    
    var input = $('input[name=r]:checked', '#form').val();
    var radioId = $('input[name="r"]:checked').attr('id');

    var selector = 'label[for=' + radioId + ']';
    var lbl = document.querySelector(selector);
    addTot();
    
    var ans = question[random[count]].answer;
    if(input == ans){
        lbl.style.backgroundColor = "green";
        lbl.style.color = "#ffffff";
        score++;
        streakArr.push("y");
        answeredFeedback.push("C");
        add();
    }else{
        lbl.style.backgroundColor = "red";
        lbl.style.color = "#ffffff";
        streakArr.push("n");
        incorrectFeedback = "Correct Answer: " + ans;
        answeredFeedback.push("I");
        toastI2();
    }
    //disble radio nodes
    for(i=0; i<radioNode.length; i++){
        radioNode[i].disabled = true;
    }

    answeredQuestions.push(random[count]);
    console.log(answeredQuestions);
    console.log(answeredFeedback);
count++;
$("#scoreDisp").show();
$("#scoreDisp").html("Score: " + score + "/" + count);

streak();
highScores();
if(quizLength == count){
       setTimeout(endQuiz,1000);
}
setTimeout(setQuestions,1500);

}

var streakNo = 0;
function streak(){
    
    if(streakArr.includes("n") == true){
          streakNo = 0;
          streakArr = [];
          
          $("#streak").hide();
    }else{
        streakNo = streakArr.length;
        $("#streak").show();
        $("#streak").html("Streak: " + streakNo);
    }
   
  if(localStorage.getItem('streak') == null){
    localStorage.setItem('streak', streakNo);
   } else if(localStorage.getItem('streak') != null){
        var hs = localStorage.getItem('streak');
        if(streakNo > hs){
            localStorage.setItem('streak', streakNo);
            if(newStreakCount == 0){
                newStreak();
            }
            newStreakCount++
        }
   }   
}


function get_totScore() {
    var totScore = new Array;

    var totScore_str = localStorage.getItem('totA');
    if (totScore_str !== null) {
        totScore = JSON.parse(totScore_str); 
    }
    return totScore;
}

function add() {
    var totScore = get_totScore();
    totScore.push(1);
    localStorage.setItem('totA', JSON.stringify(totScore));
}

function get_totAnswered() {
    var totAnswered = new Array;

    var totAnswered_str = localStorage.getItem('totQ');
    if (totAnswered_str !== null) {
        totAnswered = JSON.parse(totAnswered_str); 
    }
    return totAnswered;
}

function addTot() {
    var totAnswered = get_totAnswered();
    totAnswered.push(1);
    localStorage.setItem('totQ', JSON.stringify(totAnswered));
}



function highScores(){
    var streak = localStorage.getItem('streak');
    $("#highestStreak").html(streak);
    $("#longestStreak").html("Your longest streak is " + streak);

    var avg = ((get_totScore().length/get_totAnswered().length)*100).toFixed();
    if(isNaN(avg) != true){
        $("#avgPercentage").html(avg + "%");
    }
    $("#totqAnswered").html("Total Questions Answered: " + get_totAnswered().length);
}
highScores();


function resetScores(){
    var c = confirm("Are you sure? This will delete all data for this quiz");
    if(c == true){
    console.log('called');
    localStorage.removeItem("streak");
    localStorage.removeItem("totA");
    localStorage.removeItem("totQ");
    highScores();
}else{
    return;
}
}


function endQuiz(){
    $("#container1").slideUp();
    $("#container2").show()
    $("#endScoreCont").html("You scored a total of: "+score + "/" + count);
    var perc = ((score/count)*100).toFixed();
    $(".fill").css("height", perc + "%");
    document.getElementById('scorePerc').innerHTML = perc + "%"
    console.log('finished');

}

function feedback(){
    document.getElementById("btnFeedback").style.display ="none";
    document.getElementById("scoreCircle").style.display ="none";
    var fb = "<div class='alert alert-info'>Questions highlighted red are those which you answered incorrectly</div><ul class='list-group'>"
    var ans;
    var correctAns;
    for(i = 0;i<answeredQuestions.length; i++){
        if(answeredFeedback[i] == "C"){
            ans = "list-group-item-success"
            correctAns = "";
        }else if(answeredFeedback[i] == "I"){
            ans = "list-group-item-danger";
            correctAns = "<li class='list-group-item list-group-item-info'>Correct Answer: "+ question[answeredQuestions[i]].answer+"</li>"
        }
        fb += "<li class='list-group-item "+ans+"'>"+ question[answeredQuestions[i]].q+"</li>"+correctAns+"<li class='list-group-item'>"+question[answeredQuestions[i]].o1+"</li><li class='list-group-item'>"+question[answeredQuestions[i]].o2+"</li><li class='list-group-item'>"+question[answeredQuestions[i]].o3+"</li><li class='list-group-item'>"+question[answeredQuestions[i]].o4+"</li><li class='list-group-item'>"+question[answeredQuestions[i]].o5+"</li>";
    }
    fb+="</ul>"
    document.getElementById('randomFeedback').innerHTML = fb;
}
//localStorage.clear();


