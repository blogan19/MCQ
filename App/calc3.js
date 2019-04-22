var quizName = "calc3";
var question = [{
    "qNo": "Question One",
    "q": "A patient is prescribed prednisolone 1% eye drops 1 drop into both eyes 8 times daily for 5 days followed by 6 times daily for a further 5 days then four times a day for 14 days. Assuming 1 drop = 0.05ml and a bottle contains 2.5ml. How many bottles will be required for the whole course rounded to the nearest bottle?",
    "answer": "5",
    "answerS": "5 bottles",
    "units": "bottles"
   },{
    "qNo": "Question Two",
    "q": "A patient weighing 51kg requires drug x at a dose of 2.5mg/kg. What dose should be prescribed?",
    "answer": "127.5",
    "answerS": "127.5mg",
     "units": "mg"
   },{
    "qNo": "Question Three",
    "q": "You receive a prescription for a 3 year old for Ranitidine 2mg/kg twice daily for 2 weeks. The child weighs 16kg and a 75mg/5ml suspension is available. What quantity of ranitidine do you need to supply to the nearest ml?",
    "answer": "60",
    "answerS": "60ml",
     "units": "ml"
   },{
    "qNo": "Question Four",
    "q": "A baby weighing 0.72kg requires an infusion of insulin at a rate of 0.04unit/kg/hour. The insulin is available as 10units in 50ml sodium chloride 0.9%. What is the rate of the infusion in ml/hour (to 2 decimal points)?",
    "answer": "0.14",
     "answerS": "0.14ml/hour",
     "units": "ml/hour"
   },{
    "qNo": "Question Five",
    "q": "An elderly patient on your ward requires IV paracetamol 15mg/kg QDS.  They weigh 7stone 2lb.  What dose of paracetamol should the patient receive in (mg) to the nearest 100mg? (1 stone = 6.35lb and 2.2lb = 1kg).",
    "answer": "700",
     "answerS": "700mg",
     "units": "mg"
   },{
    "qNo": "Question Six",
    "q": "A patient has been prescribed a chemotherapeutic agent at a dose of 500mg/m2. The patient weighs 162kg and is 198cm tall. What dose should be prescribed to the nearest mg (see formulas and resources)",
    "answer": "1492",
     "answerS": "1492mg",
     "units": "mg"
   },{
    "qNo": "Question Seven",
    "q": "You have a stock solution of drug y 50mg/10ml. What volume of stock solution in mls solution is needed to make 200ml of a solution containing 50microgram/ml?",
    "answer": "2",
     "answerS": "2ml",
     "units": "ml"
   },{
    "qNo": "Question Eight",
    "q": "A patient is prescribed hydroxycarbamide for chronic myeloid leukemia at a dose of 1g Monday to Friday and 1.5g on a Saturday and a Sunday.  How many 500mg tablets will you need to supply for an 84 day course?",
    "answer": "192",
     "answerS": "192 tablets",
     "units": "tablets"
   },{
    "qNo": "Question Nine",
    "q": "Potassium permanganate is available as a stock solution of 1 in 10 000. What is the weight of the drug per litre in mg?",
    "answer": "100",
     "answerS": "100mg",
     "units": "mg"
   },{
    "qNo": "Question Ten",
    "q": "A patient is prescribed aminophylline 0.5mg/kg/hour. The patient weighs 60kg. The nurse adds 750mg aminophylline to a 500ml bag of 5% glucose. What rate in mls/minute should the infusion be set?",
    "answer": "20",
     "answerS": "20 ml/hour",
     "units": "ml/hour"
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


