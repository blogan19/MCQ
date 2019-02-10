var question = [{"drug":"Aluminium containing antacids",
 "answer":"constipation"
},{"drug":"Iron preparations",
 "answer":"constipation"
},{"drug":"Calcium supplements",
 "answer":"constipation"
},{"drug":"Antispasmodics",
 "answer":"constipation"
},{"drug":"Colestyramine",
 "answer":"constipation"
},{"drug":"Calcium channel blockers",
 "answer":"constipation"
},{"drug":"Sedating antihistamines",
 "answer":"constipation"
},{"drug":"Opioid analgesics",
 "answer":"constipation"
},{"drug":"Tricyclic antidepressants",
 "answer":"constipation"
},{"drug":"Antipsychotics",
 "answer":"constipation"
},{"drug":"Antiparkinson drugs",
 "answer":"constipation"
},{"drug":"Antiepileptic drugs",
 "answer":"constipation"
},{"drug":"Alpha blockers",
 "answer":"constipation"
},{"drug":"Magnesium containing antacids",
 "answer":"diarrhoea"
},{"drug":"H2-receptor antagonists",
 "answer":"diarrhoea"
},{"drug":"Proton pump inhibitors",
 "answer":"diarrhoea"
},{"drug":"Aminosalicylates",
 "answer":"diarrhoea"
},{"drug":"Misoprostol",
 "answer":"diarrhoea"
},{"drug":"Orlistat",
 "answer":"diarrhoea"
},{"drug":"Antibiotics",
 "answer":"diarrhoea"
},{"drug":"Sulphonylureas",
 "answer":"diarrhoea"
},{"drug":"Metformin",
 "answer":"diarrhoea"
},{"drug":"Acarbose",
 "answer":"diarrhoea"
},{"drug":"Levothyroxine",
 "answer":"diarrhoea"
},{"drug":"Cytotoxic drugs such as methotrexate",
 "answer":"diarrhoea"
},{"drug":"Colchicine",
 "answer":"diarrhoea"
},{"drug":"Leflunomide",
 "answer":"diarrhoea"
}];

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

function startQuiz(){
	$('#startContainer').hide();
	$('#container1').show();
}

function createQuestion(){  
   var a = document.getElementById('container1');
   var textNode ="";

 
   for(var i = 0; i <question.length; i++){
   	var x = random[i];
   
   	textNode += '<h3 class="tWhite" id="q'+question[x].drug+'">'+question[x].drug+'</h3><div><input type="radio" id="r'+question[x].drug+'" class="radio-half" name="'+question[x].drug+'" onclick="checkAns('+x+','+0+')"><label for="r'+question[x].drug+'">diarrhoea</label><input type="radio" id="r2'+question[x].drug+'" class="radio-half" name="'+question[x].drug+'" onclick="checkAns('+x+','+1+')"><label for="r2'+question[x].drug+'">constipation</label></div><hr>'
   }
      a.innerHTML = textNode;
      console.log(a);
  };
  createQuestion();

  var score = 0;
  var qCount = 0;
  function checkAns(drug, input){
  	 
  	 qCount++;
  	 var ans = question[drug].answer;
  	 var selection;
     console.log(question[drug].drug + " " + ans );
  	 if(input == 0){
  	 	selection = "diarrhoea"
  	 }else if(input == 1){
  	 	selection = "constipation"
  	 }
  
  	 var questionTitle = document.getElementById("q"+question[drug].drug);
  	 if(selection == ans){
  	 	console.log('correct');
  	 	questionTitle.style.color ="#7CFC00";
  	 	toastC();
  	 	score++;
  	 }else if(selection != ans){
  	 	document.getElementById("q"+question[drug].drug).style.color ="#FF0000";
  	 	toastI();
  	 	console.log('incorrect');
  	 }
  	 if(qCount == question.length){
  	 	$('#container1').hide();
  	 	$('#scoreCont').show();
  	 	$('#scoreDisp').html("Your score: " + score+"/"+qCount);
  	 }
  	 questionTitle.innerHTML = questionTitle.innerHTML +  ": " + ans;
  	 document.getElementById("r"+question[drug].drug).nextSibling.style.display = "none";
  	 document.getElementById("r2"+question[drug].drug).nextSibling.style.display = "none";

  }








      
     