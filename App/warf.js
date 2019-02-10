var question = [{
    "drug": "allopurinol",
    "answer": "increases"
  },{
    "drug": "amiodarone",
    "answer": "increases"
  },{
    "drug": "azithromycin",
    "answer": "increases"
  },{
    "drug": "bezafibrate",
    "answer": "increases"
  },{
    "drug": "capecitabine",
    "answer": "increases"
  },{
    "drug": "ciprofloxacin",
    "answer": "increases"
  },{
    "drug": "cranberry juice",
    "answer": "increases"
  },{
    "drug": "disulfiram",
    "answer": "increases"
  },{
    "drug": "doxycycline",
    "answer": "increases"
  },{
    "drug": "erythromycin",
    "answer": "increases"
  },{
    "drug": "fenofibrate",
    "answer": "increases"
  },{
    "drug": "fluconazole",
    "answer": "increases"
  },{
    "drug": "fluvastatin",
    "answer": "increases"
  },{
    "drug": "itraconazole",
    "answer": "increases"
  },{
    "drug": "ketoconazole",
    "answer": "increases"
  },{
    "drug": "methylphenidate",
    "answer": "increases"
  },{
    "drug": "norfloxacin",
    "answer": "increases"
  },{
    "drug": "ofloxacin",
    "answer": "increases"
  },{
    "drug": "omeprazole",
    "answer": "increases"
  },{
    "drug": "propafenone",
    "answer": "increases"
  },{
    "drug": "sulphonamides",
    "answer": "increases"
  },{
    "drug": "tramadol",
    "answer": "increases"
  },{
    "drug": "Acute alcohol",
    "answer": "decreases"
  },{
    "drug": "azathioprine",
    "answer": "decreases"
  },{
    "drug": "carbamazepine",
    "answer": "decreases"
  },{
    "drug": "eslicarbazepine",
    "answer": "decreases"
  },{
    "drug": "griseofulvin",
    "answer": "decreases"
  },{
    "drug": "phenobarbital",
    "answer": "decreases"
  },{
    "drug": "propylthiouracil",
    "answer": "decreases"
  },{
    "drug": "phenytoin",
    "answer": "decreases"
  },{
    "drug": "primidone",
    "answer": "decreases"
  },{
    "drug": "raloxifene",
    "answer": "decreases"
  },{
    "drug": "rifampicin",
    "answer": "decreases"
  },{
    "drug": "St. Johns Wort",
    "answer": "decreases"
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
   
   	textNode += '<h3 class="tWhite" id="q'+question[x].drug+'">'+question[x].drug+'</h3><div><input type="radio" id="r'+question[x].drug+'" class="radio-half" name="'+question[x].drug+'" onclick="checkAns('+x+','+0+')"><label for="r'+question[x].drug+'">Increase INR</label><input type="radio" id="r2'+question[x].drug+'" class="radio-half" name="'+question[x].drug+'" onclick="checkAns('+x+','+1+')"><label for="r2'+question[x].drug+'">Decreases INR</label></div><hr>'
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
  	 	selection = "increases"
  	 }else if(input == 1){
  	 	selection = "decreases"
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








      
     