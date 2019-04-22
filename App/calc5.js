var quizName = "calc5";
var question = [{
    "qNo": "Question One",
    "q": "How much glucose 5% w/v would you need to add to diazepam solution 0.5% w/v to make an intravenous infusion of diazepam of 200mg in 1 litre?",
    "answer": "960",
    "answerS": "960ml",
    "units": "ml"
   },{
    "qNo": "Question Two",
    "q": "An 8 month old child weighing 6kg is prescribed Fusidic acid  50mg/ml orally three times daily for 7 days. A dose of 15mg/kg is recomended. what is the total amount in mls required (answer to one dp)?",
    "answer": "37.8",
    "answerS": "37.8ml",
     "units": "ml"
   },{
    "qNo": "Question Three",
    "q": "An 83 year old male Patient has had a diagnosis of deep vein thrombus confirmed. The patient weighs 65.2kg, has a serum creatinine of 170micromoles/L and a D-Dimer 2300microgram/L. Your local policy states that enoxaparin should be used at a dose of 1.5mg/kg once daily unless the creatinine clearance is less than 30ml/min.  If the crcl is less than 30mlmin the dose used is 1mg/kg.  How many milligrams of enoxaparin should be used for each dose in this patient (answer to 1 dp)? ",
    "answer": "65.2",
    "answerS": "65.2mg",
     "units": "mg"
   },{
    "qNo": "Question Four",
    "q": "A patient has been prescribed digoxin 125 micrograms daily  a serum level is taken and comes back as 0.85microgram/L. If the dose is increased to 187.5micrograms what would you expect the serum level to be bearing in mind digoxin displays first order kinetics (answer to 2 decimal points)? ",
    "answer": "1.28",
     "answerS": "1.28 microgram/L",
     "units": "micrograms/L"
   },{
    "qNo": "Question Five",
    "q": "A 3 year old child is prescribed methotrexate for psoriasis at a dose of 200micrograms/kg once weekly for 4 weeks increasing to 400micrgrams/kg once weekly for a further 4 weeks. The child weighs 22.5kg and the oral solution is available at a strength of 2mg/ml. How many mls of the oral solution will be required for the entire 8 weeks? ",
    "answer": "27",
     "answerS": "27ml",
     "units": "ml"
   },{
    "qNo": "Question Six",
    "q": "What weight of menthol is needed to prepare 100g of aqueous cream, which when further diluted to 500g will produce 1% preparation?",
    "answer": "5",
     "answerS": "5g",
     "units": "g"
   },{
    "qNo": "Question Seven",
    "q": "What weight of a substance is required to make 200mls of a solution such that 10mls diluted to 1L will give a 1 in 1000 solution?",
    "answer": "20",
     "answerS": "20g",
     "units": "g"
   },{
    "qNo": "Question Eight",
    "q": "What volume of alcohol 96% is needed to produce 4 litres of 80% to 2 decimal points?",
    "answer": "3333.33",
     "answerS": "3333.33mls",
     "units": "mls"
   },{
    "qNo": "Question Nine",
    "q": "A patient is prescribed clindamycin 450mg four times daily for four weeks to treat a diabetic foot ulcer. You are asked to calculate how much this course length will cost. You only have 150mg capsules available and find that 1 box of 24 capsules costs &pound;4.85. How much will the whole course cost? ",
    "answer": "67.90",
     "answerS": "&pound; 67.90",
     "units": "pounds"
   },{
    "qNo": "Question Ten",
    "q": "How many grams of sodium chloride are there in a 500mls infusion of sodium chloride 0.45% and glucose 2.5% solution?",
    "answer": "2.25",
     "answerS": "2.25g",
     "units": "g"
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


