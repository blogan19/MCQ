var quizName = "calc4";
var question = [{
    "qNo": "Question One",
    "q": "What weight of white soft paraffin is required to make 175g of the following product?<ul><li>Zinc oxide 12% </li><li>Salicylic acid 2%</li><li>Starch 20%</li><li>White soft paraffin to 100%</li></ul>  ",
    "answer": "115.5",
    "answerS": "115.5",
    "units": "g"
   },{
    "qNo": "Question Two",
    "q": "If 300 mg of potassium permanganate is dissolved in 3 litres of water, what is the strength of the resulting solution?(%w/v) answer to 2 decimal points",
    "answer": "0.01",
    "answerS": "0.01%",
     "units": "%W/V"
   },{
    "qNo": "Question Three",
    "q": "You are presented with a prescription for allopurinol tablets 100mg at a dose of 300mg each day for 21 days, reducing to 100mg daily for a further 21 days.  How many packs of 28 tablets should you supply? ",
    "answer": "3",
    "answerS": "3 packs",
     "units": "packs of 28"
   },{
    "qNo": "Question Four",
    "q": "A patient has been prescribed 40g of 0.2% GTN ointment for an anal fissure.  The only strength GTN ointment you have available is 1%.  What weight of the 1% GTN ointment would you need to prepare the required product?",
    "answer": "8",
     "answerS": "8g",
     "units": "g"
   },{
    "qNo": "Question Five",
    "q": "An injection solution contains 0.5% w/v of active ingredient.  How much of the active ingredient is needed to prepare 800 litres of solution?",
    "answer": "4",
     "answerS": "4kg",
     "units": "kg"
   },{
    "qNo": "Question Six",
    "q": "One 24 tablet box of methotrexate 2.5mg tablets costs &pound;2.39.  A patient starts methotrexate at a dose of 10mg once weekly for 2 weeks increasing to 12.5mg once weekly for 2 weeks and then 15mg once weekly thereafter. How much will it cost for 1 years treatment to nearest pence?",
    "answer": "30.47",
     "answerS": "£30.47",
     "units": "pounds"
   },{
    "qNo": "Question Seven",
    "q": "A 1 year old child on the paediatric ward is prescribed a dose of aspirin 12.5mg/kg four times daily for Kawasakis disease. The child weighs 11.5kg. There is no liquid preparation available and you have to supply aspirin 75mg dispersible tablets to the ward. How many tablets(to the nearest whole tablet) would you need to supply for a two week course?",
    "answer": "112",
     "answerS": "112 tablets",
     "units": "tablets"
   },{
    "qNo": "Question Eight",
    "q": "An ampoule contains 12.5% w/v of active ingredient. The ampoules are supplied as 10mL volume. How many ampoules are needed to produce a 1 litre bag of final concentration 0.5% w/v active ingredient? ",
    "answer": "4",
     "answerS": "4 ampoules",
     "units": "ampoules"
   },{
    "qNo": "Question Nine",
    "q": "You receive a prescription asking you to prepare 24 pessaries using 2g moulds.  Each pessary contains 400mg of drug A. What weights of base is required to make the suppositories?",
    "answer": "40",
     "answerS": "40g",
     "units": "g"
   },{
    "qNo": "Question Ten",
    "q": "You receive a private prescription for fexofenadine tablets 120mg 30 days supply at a dose of 120mg four times daily. One pack of 30 fexofenadine 120mg tablets costs &pound;2.51. The pharmacy you work in charges a dispensing fee of 25% of the total cost of the medication. How much will this prescription cost?",
    "answer": "12.55",
     "answerS": "&pound;12.55",
     "units": "pounds"
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


