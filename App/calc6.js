var quizName = "calc6";
var question = [{
    "qNo": "Question One",
    "q": "You receive a prescription for 2%w/w drug x in aqueous cream.  What weight of drug x do you need to make 80g of cream(to 1 decimal point)? ",
    "answer": "1.6",
    "answerS": "1.6g",
    "units": "g"
   },{
    "qNo": "Question Two",
    "q": "How many grams of sodium chloride are there in a 500mls bag of sodium chloride 0.9%?",
    "answer": "4.5",
    "answerS": "4.5g",
     "units": "g"
   },{
    "qNo": "Question Three",
    "q": "A patient is prescribed calcium gluconate at a dose of 4800mg over 24 hours. you have available calcium gluconate 10% injection. What rate in ml/hour should it be delivered at?",
    "answer": "2",
    "answerS": "2ml/hour",
     "units": "ml/hour"
   },{
    "qNo": "Question Four",
    "q": "A patient is prescribed 0.8mg of drug A. You have a vial containing 150micrograms/ml. What volume should be administered to the patient(to the nearest 1 decimal point)?",
    "answer": "5.3",
     "answerS": "5.3ml",
     "units": "ml"
   },{
    "qNo": "Question Five",
    "q": "Calculate the amount of drug in a 8ml 0.2% solution(answer in mg)?",
    "answer": "1.6",
     "answerS": "1.6mg",
     "units": "mg"
   },{
    "qNo": "Question Six",
    "q": "350g of an ointment containing 12.5% w/w of a single active ingredient has been prepared. Calculate the weight of active ingredient contained in 140g of the ointment?",
    "answer": "17.5",
     "answerS": "17.5g",
     "units": "g"
   },{
    "qNo": "Question Seven",
    "q": "A patient requires a 0.5mg dose of adrenaline.  You have adrenaline 1 in 1000 available.  What volume should be given (answer in mls to 1dp)?",
    "answer": "0.5",
     "answerS": "0.5mls",
     "units": "ml"
   },{
    "qNo": "Question Eight",
    "q": "A 1 litre bag of sodium chloride 0.9% is set to be given over a 5 hour period. Calculate the rate of delivery in millilitres/minute (to 2 dp)",
    "answer": "3.33",
     "answerS": "3.33mls",
     "units": "ml"
   },{
    "qNo": "Question Nine",
    "q": "You are required to compound 300g of a cream containing 4 parts Betnovate ointment  and 8 parts yellow soft paraffin.  How much betnovate cream is required?",
    "answer": "100",
     "answerS": "100g",
     "units": "g"
   },{
    "qNo": "Question Ten",
    "q": "A 5kg baby requires 20mg/kg phenytoin. A 5ml vial of 50mg/ml is available for dilution prior to infusion. The phenytoin is diluted up to 50ml with NaCl 0.9%. Calculate the volume of phenytoin injection that must be used to prepare the infusion",
    "answer": "2",
     "answerS": "2ml",
     "units": "ml"
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


