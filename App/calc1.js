var quizName = "calc1";
var question = [{
    "qNo": "Question One",
    "q": "A paediatric syrup comes is available at a strength of 7.5mg/5ml. A 3 year old child is prescribed a dose of 2.5mg three times daily. How many mls of the suspension do you need to supply to cover 7 days of treatment (rounded to the nearest ml)?",
    "answer": "35",
    "answerS": "35ml",
    "units": "ml"
   },{
    "qNo": "Question Two",
    "q": "What weight of substance is required to make 250 mL of a solution when 10mL of the same solution diluted to 1L will give a 1 in 10,000 solution?",
    "answer": "2.5",
    "answerS": "2.5g",
     "units": "g"
   },{
    "qNo": "Question Three",
    "q": "What volume of alcohol 96% v/v is needed to produce 3 litres of 80% v/v?",
    "answer": "2500",
    "answerS": "2500ml",
     "units": "ml"
   },{
    "qNo": "Question Four",
    "q": "A patient is prescribed chlorphenamine syrup (2mg/5ml) 4mg four times daily for six days. What quantity is required to the nearest ml?",
    "answer": "240ml",
     "answerS": "240ml",
     "units": "mls"
   },{
    "qNo": "Question Five",
    "q": "A patient is prescribed dopamine 2.5microgram/kg/min. Dopamine is available at a strength of 4mg/ml.  At what rate must the infusion be set to (ml/hr) if the patient weighs 80kg?",
    "answer": "3",
     "answerS": "3ml/hour",
     "units": "ml/hour"
   },{
    "qNo": "Question Six",
    "q": "The formula for Ferrous Sulphate is: <ul><li>Ferrous sulphate 60 mg</li><li> Ascorbic Acid 10mg</li><li>Orange syrup 0.5ml</li><li>Double strength cloroform water</li></ul> How much ferrous sulphate (g) is required to prepare 140mls of ferrous sulphate solution?",
    "answer": "1.68",
     "answerS": "1.68g",
     "units": "g"
   },{
    "qNo": "Question Seven",
    "q": "What is the amount of solid ingredient in 250ml of a 0.5%w/v solution(in grams)? ",
    "answer": "1.25",
     "answerS": "1.25g",
     "units": "g"
   },{
    "qNo": "Question Eight",
    "q": "What quantity of potassium chloride is required to prepare 2.5 litres of a solution containing 2 mmol/mL? (molecular weight = 74.5)",
    "answer": "372.5",
     "answerS": "372.5g",
     "units": "g"
   },{
    "qNo": "Question Nine",
    "q": "A patient is prescribed 75g of a cream containing 2.5% w/w sulphur in aqueous cream.  Calculate the weight of sulphur required to compound the cream(g) to 2dp: ",
    "answer": "1.88",
     "answerS": "1.88g",
     "units": "g"
   },{
    "qNo": "Question Ten",
    "q": "A child weighing 6.6kg is prescribed a dose of 12mg/kg/day ciprofloxacin, to be given IV in 2 divided doses.  What is the correct volume of ciprofloxacin 2mg/mL that should be given for each dose, rounded to the nearest mL? ",
    "answer": "20",
     "answerS": "20ml",
     "units": "mls"
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


