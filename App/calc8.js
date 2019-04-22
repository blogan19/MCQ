var quizName = "calc8";
var question = [{
    "qNo": "Question One",
    "q": "You are asked to predict the concentration of a drug with a half-life of 16 hours. A patients serum contains 84 micrograms/ml of the drug. What would the plasma concentration be after 24 hours?(1dp)",
    "answer": "31.5",
    "answerS": "31.5micograms/ml",
    "units": "micrograms/ml"
   },{
    "qNo": "Question Two",
    "q": "You are asked to recommend a dose of oral oxycodone for a patient who has been taking codeine.  The patient has been taking 2 tablets of codeine 30mg four times daily.  The Dr would like to know the equivalent total daily dose of oxycodone. Calculate the dose of oxycodone required to the nearest ml of oxycodone oral solution (5mg/5ml)(100mg of codeine is equivalent to 6.6mg of oxycodone).",
    "answer": "36",
    "answerS": "36ml",
     "units": "ml"
   },{
    "qNo": "Question Three",
    "q": "A 5 year old child weighing 23kg requires desferrioxamine mesilate at a dose of 15mg/kg/hour for the first hour and then reduce to 10mg/kg/hour for a further 2 hours How much desferrioxamine mesilate would the patient receive in the first three hours of treatment?",
    "answer": "805",
    "answerS": "805mg",
     "units": "mg"
   },{
    "qNo": "Question Four",
    "q": "A patient is prescribed 0.7mg buprenorphine. Stock solution is 500 micrograms/ml. What volume should be administered?",
    "answer": "1.4",
     "answerS": "1.4ml",
     "units": "ml"
   },{
    "qNo": "Question Five",
    "q": "240mg of drug is diluted in 40ml of water for injection. A 5ml sample of the resulting solution is then taken. What would be the strength of this sample as a percentage w/v?",
    "answer": "0.6",
     "answerS": "0.6%w/v",
     "units": "%w/v"
   },{
    "qNo": "Question Six",
    "q": "Potassium permanganate is as a concentrate that requires dilution. What is the percentage of the concentrate if it requires a 1 in 50 dilution of that concentrate to produce a 1 in 8000 final solution (answer to 3d.p)",
    "answer": "0.625",
     "answerS": "0.625%v/v",
     "units": "%v/v"
   },{
    "qNo": "Question Seven",
    "q": "You have been asked to administer 150mg of a drug in 1 litre of NaCl at a rate of 60 micrograms per Kg/Hour for a 50Kg Female Patient. Assuming 20 drops per ml, what is the nearest approximate whole drop rate per minute that needs to be set on the giving set",
    "answer": "7",
     "answerS": "7 drops/minute",
     "units": "drops/minute"
   },{
    "qNo": "Question Eight",
    "q": "You have drug x available a 60mg tablet.  You are required to use the tablet to make up powders to sprinkle on a childs food.  10 powders are required each weighing 200mg.  Each powder will contain 24mg of drug and the rest will be made up with lactose.  How much lactose would be required in grams?",
    "answer": "2",
     "answerS": "2g",
     "units": "g"
   },{
    "qNo": "Question Nine",
    "q": "It is recommended that dalbavancin is used in a patient with cellulitis.  The patient will receive one dose of 1500mg dalbavancin. Each 500mg vial costs &pound;558.70. Alternatively the patient could receive outpatient intravenous therapy with Ceftriaxone 2g OD for 7 days. With each 1g vial costing &pound;9.58 and an average cost of &pound;40 per day for a nurse to administer the ceftriaxone in the patients house. Calculate the price difference between the two regimes (to the nearest pound).",
    "answer": "1262",
     "answerS": "&pound;1262",
     "units": "pounds"
   },{
    "qNo": "Question Ten",
    "q": "The recommended dosage for Dobutamine hydrochloride by IV infusion is 10mcg / Kg / minute. One 20ml vial is added to 1 Litre of Sodium Chloride 0.9% w/v. The patient is an 75Kg adult. Assuming no adjustment is required for ideal body weight. If Dobutamine vials contain 250mg Dobutamine in a 20ml, what should the infusion rate bein mls/minute",
    "answer": "3",
     "answerS": "3ml/min",
     "units": "ml/min"
   }];

  function createCalculation(){

   
   var a = document.getElementById('container1');
   var textNode ="";
    for(var i = 0; i < question.length; i++){
      textNode += '<br><div class="container" id="question'+i+'"><h3 class="qNo" id="questionNo'+i+'">'+question[i].qNo+'</h3><div class="jumbotron questionHeader" id="qJumbo'+i+'">  <p class="CSpara" id="para'+i+'">'+question[i].q+'</p></div> <div class="jumbotron CSjumbo" id="jumbo'+i+'"> <input type="number" class="CSText" id="input'+i+'" placeholder="Answer Input"> <button type="button" class="btn  checkBtn" id="btn'+i+'" onclick="checkAns('+i+')">Check Answer</button></div></div></div><div class="lineBreak" id="lineBreak'+i+'"></div>';   
       
      }
      a.innerHTML = textNode;
  };
  createCalculation();

  function setUnits(){

    for(var i = 0; i <question.length; i++){
      var unit = question[i].units;
      var a = document.getElementById("input"+i);
      a.placeholder = unit;
      console.log(a);
    }
  }
  setUnits();

  var questionCount = 0;
  var score = 0;
  function checkAns(id){

    var input = document.getElementById("input"+id).value;
    var ans =  question[id].answer;
    var jumbo = document.getElementById("jumbo"+id);
    var qJumbo = document.getElementById("qJumbo"+id);
    var btn = document.getElementById("btn"+id);
    var para = document.getElementById("para"+id);
    var reportLi = document.getElementById("reportList" +id);

    if(input == ans){
      qJumbo.style.backgroundColor = "#82b74b";
      para.innerHTML = "Correct"
      para.style.color = "white";
      btn.style.border = "none";
      reportLi.style.backgroundColor = "#82b74b";
      document.getElementById("snackCMsg").innerHTML = question[id].answerS;
      snackC();
      score++;
    }else if(input != ans){
      qJumbo.style.backgroundColor = "red";
      para.innerHTML = "Incorrect";
      para.style.color = "white";
      reportLi.style.backgroundColor = "red";
      document.getElementById("snackIMsg").innerHTML = question[id].answerS;
      snackI();
    }
    console.log(score);
    setTimeout(minimise, 2000, id);
  }




function minimise(id){
  document.getElementById("jumbo"+id).style.display = "none"; 
  document.getElementById("qJumbo"+id).style.display = "none";
  document.getElementById("lineBreak"+id).style.display = "none";
  document.getElementById("questionNo"+id).style.display = "none";


  questionCount++;
  if(questionCount == question.length){
    document.getElementById("quizFinish").style.display = "block";
    document.getElementById("scoreDisp").innerHTML = " "+ score + "/" + questionCount;
    document.getElementById("timeFinish").innerHTML = minutes + " minutes and "+ seconds + "seconds";
    document.getElementById("timeRow").style.display = "none";
  }

}

function viewReport(){
  document.getElementById("quizFinish").style.display = "none";
  document.getElementById("reportJumbo").style.display = "block";
}

function generateReport(){
  var div = document.getElementById("reportList");
  for( i = 0; i <question.length; i++){
      var p = document.createElement("p");
      p.id = "reportList" + i;
      p.className ="listStyle";
      var textNode = document.createTextNode(question[i].q + " = " + question[i].answerS);
      p.appendChild(textNode);
      div.appendChild(p);
  }
}
generateReport();

function snackC() {
        var x = document.getElementById("snackbarC");
      x.className = "show";
            setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
  }
  function snackI(){
    var x = document.getElementById("snackbarI");
      x.className = "show";
            setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
  }



  function createCalculation(){

   
   var a = document.getElementById('container1');
   var textNode ="";
    for(var i = 0; i < question.length; i++){
      textNode += '<br><div class="container" id="question'+i+'"><h3 class="qNo" id="questionNo'+i+'">'+question[i].qNo+'</h3><div class="jumbotron questionHeader" id="qJumbo'+i+'">  <p class="CSpara" id="para'+i+'">'+question[i].q+'</p></div> <div class="jumbotron CSjumbo" id="jumbo'+i+'"> <input type="number" class="CSText" id="input'+i+'" placeholder="Answer Input"> <button type="button" class="btn  checkBtn" id="btn'+i+'" onclick="checkAns('+i+')">Check Answer</button></div></div></div><div class="lineBreak" id="lineBreak'+i+'"></div>';   
       
      }
      a.innerHTML = textNode;
  };
  createCalculation();

  function setUnits(){

    for(var i = 0; i <question.length; i++){
      var unit = question[i].units;
      var a = document.getElementById("input"+i);
      a.placeholder = unit;
      console.log(a);
    }
  }
  setUnits();

  var questionCount = 0;
  var score = 0;
  function checkAns(id){

    var input = document.getElementById("input"+id).value;
    var ans =  question[id].answer;
    var jumbo = document.getElementById("jumbo"+id);
    var qJumbo = document.getElementById("qJumbo"+id);
    var btn = document.getElementById("btn"+id);
    var para = document.getElementById("para"+id);
    var reportLi = document.getElementById("reportList" +id);

    if(input == ans){
      qJumbo.style.backgroundColor = "#82b74b";
      para.innerHTML = "Correct"
      para.style.color = "white";
      btn.style.border = "none";
      reportLi.style.backgroundColor = "#82b74b";
      document.getElementById("snackCMsg").innerHTML = question[id].answerS;
      snackC();
      score++;
    }else if(input != ans){
      qJumbo.style.backgroundColor = "red";
      para.innerHTML = "Incorrect";
      para.style.color = "white";
      reportLi.style.backgroundColor = "red";
      document.getElementById("snackIMsg").innerHTML = question[id].answerS;
      snackI();
    }
    console.log(score);
    setTimeout(minimise, 2000, id);
  }





function minimise(id){
  document.getElementById("jumbo"+id).style.display = "none"; 
  document.getElementById("qJumbo"+id).style.display = "none";
  document.getElementById("lineBreak"+id).style.display = "none";
  document.getElementById("questionNo"+id).style.display = "none";


  questionCount++;
  if(questionCount == question.length){
    document.getElementById("quizFinish").style.display = "block";
    document.getElementById("scoreDisp").innerHTML = " "+ score + "/" + questionCount;
    highScore();
  }

}

function highScore(){
  console.log("called");
  if(localStorage.getItem(quizName)== null){
    localStorage.setItem(quizName, score);
    var hs = score;
  }else if(localStorage.getItem(quizName) != null){
    var ps = localStorage.getItem(quizName, score);
    if(ps > score){
      var hs = ps;
    }else if(ps < score){
      var hs = score;
      localStorage.setItem(quizName, score);
    }
  }
  
  //console.log(hs);
  document.getElementById("highScore").innerHTML = "Highest Score: " + hs + "/" + questionCount + " <span class='glyphicon glyphicon-star star'></span>";
}  




function viewReport(){
  document.getElementById("quizFinish").style.display = "none";
  document.getElementById("reportJumbo").style.display = "block";
}

function generateReport(){
  var div = document.getElementById("reportList");
  for( i = 0; i <question.length; i++){
      var p = document.createElement("p");
      p.id = "reportList" + i;
      p.className ="listStyle";
      var textNode = document.createTextNode(question[i].q + " = " + question[i].answerS);
      p.appendChild(textNode);
      div.appendChild(p);
  }
}
generateReport();

function snackC() {
        var x = document.getElementById("snackbarC");
      x.className = "show";
            setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
  }
  function snackI(){
    var x = document.getElementById("snackbarI");
      x.className = "show";
            setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
  }


